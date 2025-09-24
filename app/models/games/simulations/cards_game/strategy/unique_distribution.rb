# frozen_string_literal: true

module Games
  module Simulations
    module CardsGame
      module Strategy
        class UniqueDistribution
          include Distributable
          def distribute_cards(players, card_count)
            players.each do |player|
              unique_colors = CardColor.random_set(card_count)
              cards = unique_colors.map { |color| Card.new(color) }
              player.take(*cards)
            end
          end
        end
      end
    end
  end
end
