# frozen_string_literal: true

module Games
  module Simulations
    module CardsGame
      module Strategy
        class RandomDistribution
          include Distributable
          def distribute_cards(players, card_count)
            card_count.times do
              players.each do |player|
                player.take(Card.new)
              end
            end
          end
        end
      end
    end
  end
end
