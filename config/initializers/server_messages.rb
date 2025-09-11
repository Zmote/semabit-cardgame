# frozen_string_literal: true

return unless ENV.fetch("SERVER_MESSAGES", "0").to_i == 1

require "rufus-scheduler"
require "faker"

scheduler = Rufus::Scheduler.singleton

Rails.application.config.after_initialize do
  scheduler.every "10s" do
    ActionCable.server.broadcast("quotes", { body: { id: Time.now.to_i, quote: Faker::Quote.yoda } })
  end

  puts "\e[0;31mAction Cable Logger might be disabled, check application.rb to reenable it\e[0m\n"
end

at_exit do
  scheduler.shutdown
end
