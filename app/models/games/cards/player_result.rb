# frozen_string_literal: true

module Games
  module Cards
    class PlayerResult
      attr_reader :id, :name, :cards_remaining
      def initialize(name, cards_remaining)
        @id = SecureRandom.uuid
        @name, @cards_remaining = name, cards_remaining
      end
    end
  end
end
