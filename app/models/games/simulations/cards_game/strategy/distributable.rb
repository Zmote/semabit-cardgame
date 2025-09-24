# frozen_string_literal: true

module Games
  module Simulations
    module CardsGame
      module Strategy
        module Distributable
          def distribute_cards(players, card_count)
            raise NotImplementedError, "#{self.class} must implement the 'distribute_cards' method"
          end
        end
      end
    end
  end
end
