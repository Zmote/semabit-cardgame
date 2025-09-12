# frozen_string_literal: true

require "faker"

class QuotesChannel < ApplicationCable::Channel
  def subscribed
    return unless broadcast?

    key = broadcast_key
    stream_from key
    Quotes::QuotesScheduler.register_job(key) do |scheduler|
      scheduler.every "10s" do
        # Need to capture variables, which is why we use a Proc ere
        ActionCable.server.broadcast(key, { body: { id: Time.now.to_i, quote: Faker::Quote.yoda } })
      end
    end
  end

  def unsubscribed
    return unless broadcast?

    unless global_broadcast?
      Quotes::QuotesScheduler.unregister_job(broadcast_key)
    end
  end

  private

  def broadcast_key
    global_broadcast? ? "quotes" : "quotes_#{params[:uuid]}"
  end

  def broadcast?
    Rails.configuration.x.quotes.broadcast[:enabled]
  end
  def global_broadcast?
    Rails.configuration.x.quotes.broadcast[:global]
  end
end
