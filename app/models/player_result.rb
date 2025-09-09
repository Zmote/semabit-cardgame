# frozen_string_literal: true

class PlayerResult
  attr_reader :id, :name, :cards_remaining
  def initialize(name, cards_remaining)
    @id = SecureRandom.uuid
    @name, @cards_remaining = name, cards_remaining
  end
end
