# frozen_string_literal: true

namespace :test do
  namespace :system do
    desc "Run system tests in on Chrome"
    task :chrome do
      ENV["BROWSER"] = "headless_chrome"
      Rake::Task["test:system"].invoke
    end

    desc "Run system tests on Firefox"
    task :firefox do
      ENV["BROWSER"] = "headless_firefox"
      Rake::Task["test:system"].invoke
    end
  end
end
