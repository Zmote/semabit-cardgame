# frozen_string_literal: true

require "support/application_system_test_case"
class HomeTest < ApplicationSystemTestCase
  test "Home" do
    # Due to animated pages on the frontend, capybara has trouble waiting
    # for the animation to see it in the visible state, for the moment using :all
    # but look for a more robust solution
    assert_content(:all, "Hello to Semabit")
  end
end
