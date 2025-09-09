class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: { safari: 16.4, chrome: 120, firefox: 121, opera: 106, ie: false }

  private

  def filter_params(key)
    found_params = params.permit(filter: [ :query ])
    found_params[:filter]&.[](key)
  end
end
