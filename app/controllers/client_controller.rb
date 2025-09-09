# frozen_string_literal: true

class ClientController < ApplicationController
  def index
    respond_to do |format|
      format.html
      # Certain devtools call the client root (like chrome.devtools), fallback
      # until proper integration is being considered
      format.json { head :not_found }
    end
  end
end
