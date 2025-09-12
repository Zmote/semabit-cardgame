# frozen_string_literal: true

module Quotes
  class StatusController < ApplicationController
    def index
      render json: {
        status: quotes_broadcast_enabled,
        global: quotes_broadcast_global
      }
    end

    private

    def quotes_broadcast_enabled
      Rails.configuration.x.quotes.broadcast[:enabled]
    end

    def quotes_broadcast_global
      Rails.configuration.x.quotes.broadcast[:global]
    end
  end
end
