# frozen_string_literal: true

module Games
  module Cards
    class GameResult
      attr_reader :rounds, :card_count, :players
      def initialize(rounds, card_count, players)
        @rounds, @card_count, @players = rounds, card_count, players
      end
    end
  end
end
