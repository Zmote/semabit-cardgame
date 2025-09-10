# frozen_string_literal: true

module Games
  module Cards
    class Card
      attr_reader :color
      def initialize
        @color = CardColor.random
        @opened = false
      end

      def color?(color)
        @color == color
      end

      def open?
        @opened
      end

      def flip
        @opened = !@opened
      end
    end
  end
end
