# frozen_string_literal: true

module Games
  module Cards
    class Die
      class << self
        def cast
          CardColor.random
        end
      end
    end
  end
end
