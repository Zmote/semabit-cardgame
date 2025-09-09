require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  shared_opts = { screen_size: [ 1400, 1400 ] }
  browser = ENV.fetch("BROWSER", "headless_chrome")
  case browser
  when "firefox"
    driven_by :selenium, using: :firefox, **shared_opts
  when "chrome"
    driven_by :selenium, using: :chrome, **shared_opts
  when "headless_firefox"
    driven_by :selenium, using: :headless_firefox, **shared_opts
  else
    # Default to a headless Chrome for CI and local development speed
    driven_by :selenium, using: :headless_chrome, **shared_opts
  end

  puts "Using browser #{browser}"

  def setup
    visit "/"
  end
end
