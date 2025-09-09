# frozen_string_literal: true

class Player
  attr_reader :name

  def initialize(name)
    @name  = name
    @cards = []
  end

  def play(die_color)
    @cards.reject(&:open?).each do |card|
      if card.color?(die_color)
        card.flip
        return
      end
    end
  end

  def take(card)
    @cards << card
  end

  def reset
    @cards = []
  end

  def cards_remaining
    @cards.reject { |card| card.open? }.length
  end
end
