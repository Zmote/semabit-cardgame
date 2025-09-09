# frozen_string_literal: true

class GameResult
  attr_reader :rounds, :card_count, :players
  def initialize(rounds, card_count, players)
    @rounds, @card_count, @players = rounds, card_count, players
  end
end
