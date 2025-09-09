ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"
require "simplecov"

SimpleCov.start "rails" do
  parallel_number = [
    ENV["CIRCLE_NODE_INDEX"] || ENV["CI_INDEX"],
    ENV["TEST_ENV_NUMBER"] || ENV["JOB_NUMBER"]
  ].compact.join("_")

  if parallel_number.present?
    command_name "Job #{parallel_number}"
  end
  coverage_dir "reports/simplecov"
end

module ActiveSupport
  class TestCase
    # Run tests in parallel with specified workers
    parallelize(workers: :number_of_processors)

    # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
    fixtures :all

    # Add more helper methods to be used by all tests here...
  end
end
