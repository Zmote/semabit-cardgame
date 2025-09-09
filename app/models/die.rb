# frozen_string_literal: true

class Die
  class << self
    def cast
      CardColor.random
    end
  end
end
