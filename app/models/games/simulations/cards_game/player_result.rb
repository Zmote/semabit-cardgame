# frozen_string_literal: true

module Games
  module Simulations
    module CardsGame
      class PlayerResult
        attr_reader :id, :name, :cards_remaining, :open_cards
        def initialize(player)
          @id = SecureRandom.uuid
          @name = player.name
          @open_cards = player.open_cards
          @cards_remaining = @open_cards.length
        end
      end
    end
  end
end
