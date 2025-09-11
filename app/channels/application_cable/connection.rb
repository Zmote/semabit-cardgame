# frozen_string_literal: true

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    rescue_from StandardError, with: :report_error
    identified_by :current_user

    def connect
      self.current_user = request.params[:uuid]
    end

    private

    def report_error(e)
      Rails.logger.error e.message
    end
  end
end
