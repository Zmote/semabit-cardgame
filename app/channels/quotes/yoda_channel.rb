# frozen_string_literal: true

require "faker"
require "quotes"
require "quotes/actions"

module Quotes
  class YodaChannel < ApplicationCable::Channel
    def subscribed
      return unless broadcast?

      key = broadcast_key
      stream_from key
      start_broadcast key: key
    end

    def unsubscribed
      stop_broadcast
    end

    def update_interval(data)
      broadcast_interval = data["interval"].to_i
      if interval_valid?(broadcast_interval)
        key = broadcast_key
        stop_broadcast force: true
        global_interval(interval: broadcast_interval)
        start_broadcast key: key, interval: broadcast_interval
        # only send back a sync value, if the change is on global broadcast
        # i.e. the triggering client updates all other of the change
        # could be improved with a counter, that stops the global broadcast
        # when no subscribers exist
        if global_broadcast?
          ActionCable.server.broadcast(key, { action: Actions::INTERVAL,
                                              body: {
                                                interval: broadcast_interval
                                              }
          })
        end
      end
    end

    private

    def interval_valid?(interval)
      PERMITTED_INTERVALS.include?(interval)
    end

    def stop_broadcast(force: false)
      return unless broadcast?

      # on a global broadcast setup, it gets shutdown on exit as all schedules get shutdown
      # can be bypassed with force: true
      return if global_broadcast? && !force

      Scheduler.unregister_job(broadcast_key)
    end

    def start_broadcast(key: broadcast_key, interval: global_interval)
      return unless interval_valid?(interval)

      Scheduler.register_job(key) do |scheduler|
        scheduler.every "#{interval}s" do
          ActionCable.server.broadcast(key, { action: Actions::NEW_QUOTE,
                                              body: {
                                                id: Time.now.to_i,
                                                quote: Faker::Quote.yoda
                                              }
          })
        end
      end
    end

    def broadcast_key
      global_broadcast? ? CHANNEL_PREFIX : "#{CHANNEL_PREFIX}_#{params[:uuid]}"
    end

    def global_interval(interval: nil)
      if interval.nil?
        current_interval = Setting.quotes_value(key: :interval).to_i
        current_interval < 1 ? 10 : current_interval
      else
        setting = Setting.for(category: Setting::CATEGORY_QUOTES)

        if interval_valid?(interval)
          # overkill for this scenario, maybe (it isn't critical for this flow, more on a reload),
          # but let's make sure we always read the updated value
          setting.with_lock do
            setting.value[:interval] = interval
            setting.save
          end
          interval
        else
          setting.value[:interval]
        end
      end
    end

    def broadcast?
      Rails.configuration.x.quotes.broadcast[:enabled]
    end

    def global_broadcast?
      Rails.configuration.x.quotes.broadcast[:global]
    end
  end
end
