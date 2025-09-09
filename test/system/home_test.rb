# frozen_string_literal: true

require "support/application_system_test_case"
class HomeTest < ApplicationSystemTestCase
  test "Home" do
    assert_content "Hello to Semabit"
  end
end
