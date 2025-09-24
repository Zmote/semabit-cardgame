# frozen_string_literal: true

module Games
  module Simulations
    module CardsGame
      class CardColor
        include Singleton
        RED = :red
        GREEN = :green
        BLUE = :blue
        CYAN = :cyan
        MAGENTA = :magenta
        YELLOW = :yellow
        BLACK = :black
        SKYBLUE = :skyblue
        VIOLET = :violet
        WHITE = :white
        TURQUOISE = :turquoise

        class << self
          def random
            instance.random
          end

          def random_set(count)
            instance.random_set(count)
          end
        end

        def random
          colors[rand(colors.length)]
        end

        def random_set(count)
          local_colors = color_range
          colors_set = []
          count.times do
            colors_set << local_colors.delete_at(rand(local_colors.length))
          end
          colors_set
        end

        private

        def colors
          @colors ||= color_range.freeze
        end

        def color_range
          [ RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, BLACK, SKYBLUE, VIOLET, WHITE, TURQUOISE ]
        end
      end
    end
  end
end
