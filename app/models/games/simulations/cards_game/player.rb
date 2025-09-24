# frozen_string_literal: true

module Games
  module Simulations
    module CardsGame
      class Player
        attr_reader :name

        def initialize(name)
          @name  = name
          @cards = []
        end

        def play(die_color)
          @cards.reject(&:open?).each do |card|
            if card.color?(die_color)
              card.flip
              return
            end
          end
        end

        def take(*cards)
          cards.each do |card|
            @cards << card
          end
        end

        def reset
          @cards = []
        end

        def open_cards
          @cards.reject { |card| card.open? }
        end
      end
    end
  end
end
