# frozen_string_literal: true

module Games
  module Cards
    class CardColor
      include Singleton
      RED = :red
      GREEN = :green
      BLUE = :blue
      CYAN = :cyan
      MAGENTA = :magenta
      YELLOW = :yellow

      class << self
        def random
          instance.random
        end
      end

      def random
        colors[rand(colors.length)]
      end

      private

      def colors
        @colors ||= [ RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW ].freeze
      end
    end
  end
end
