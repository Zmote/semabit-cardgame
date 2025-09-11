# frozen_string_literal: true

require "rufus-scheduler"
require "faker"

scheduler = Rufus::Scheduler.singleton

Rails.application.config.after_initialize do
  scheduler.every "1m" do
    ActionCable.server.broadcast("player_Global", { body: Faker::Quote.yoda })
  end

  puts "\e[0;31mAction Cable Logger might be disabled, check application.rb to reenable it\e[0m\n"
end

at_exit do
  scheduler.shutdown
end
