require "quotes/quotes_scheduler"

at_exit do
  Quotes::QuotesScheduler.shutdown
end
