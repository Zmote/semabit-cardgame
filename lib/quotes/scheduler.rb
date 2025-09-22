# frozen_string_literal: true

require "rufus-scheduler"
require "concurrent-ruby"
module Quotes
  module Scheduler
    JOB_REGISTRY = Concurrent::Map.new
    SCHEDULER = Rufus::Scheduler.new

    def self.register_job(key)
      return unless block_given?
      return if JOB_REGISTRY.key?(key)

      job_id = yield SCHEDULER
      unregister_job(key)
      JOB_REGISTRY.compute(key) { job_id }
    end

    def self.unregister_job(key)
      job_id = JOB_REGISTRY.delete(key)
      return unless job_id

      job = SCHEDULER.job(job_id)
      job&.unschedule
    end

    def self.shutdown
      JOB_REGISTRY.each do |key, _job_id|
        unregister_job(key)
      end
      SCHEDULER.shutdown
    rescue StandardError => err
      Rails.logger.warn(err.message)
    end
  end
end
