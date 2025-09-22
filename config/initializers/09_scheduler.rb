require "quotes/scheduler"

at_exit do
  Quotes::Scheduler.shutdown
end
