# frozen_string_literal: true

module Games
  module Simulations
    module CardsGame
      module Strategy
        class DistributionFactory
          class << self
            def from(mode)
              case mode
              when :unique then UniqueDistribution.new
              else
                RandomDistribution.new
              end
            end
          end
        end
      end
    end
  end
end
