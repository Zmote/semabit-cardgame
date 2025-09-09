# frozen_string_literal: true

class CardGame
  attr_reader :rounds, :players
  def initialize(rounds, players)
    @rounds, @players = rounds, players
  end
end
