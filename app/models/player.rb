# frozen_string_literal: true

class Player
  attr_reader :id, :name, :rank, :cards_remaining

  def initialize(id, name, rank, cards_remaining)
    @id, @name, @rank, @cards_remaining = id, name, rank, cards_remaining
  end
end
