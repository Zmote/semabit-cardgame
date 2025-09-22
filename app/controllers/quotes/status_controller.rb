# frozen_string_literal: true

module Quotes
  class StatusController < ApplicationController
    def index
      render json: {
        status: quotes_broadcast_enabled,
        global: quotes_broadcast_global,
        interval: quotes_broadcast_interval
      }
    end

    private

    def quotes_broadcast_enabled
      Rails.configuration.x.quotes.broadcast[:enabled]
    end

    def quotes_broadcast_global
      Rails.configuration.x.quotes.broadcast[:global]
    end

    def quotes_broadcast_interval
      interval = Setting.quotes_value(key: :interval).to_i
      interval < 1 ? 10 : interval
    end
  end
end
