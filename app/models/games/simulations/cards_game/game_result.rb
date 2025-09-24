# frozen_string_literal: true

module Games
  module Simulations
    module CardsGame
      class GameResult
        attr_reader :rounds, :card_count, :players
        def initialize(rounds, card_count, players)
          @rounds, @card_count, @players = rounds, card_count, players
        end
      end
    end
  end
end
