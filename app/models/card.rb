# frozen_string_literal: true

class Card
  attr_reader :color
  def initialize
    @color = CardColor.random
    @opened = false
  end

  def color?(color)
    @color == color
  end

  def open?
    @opened
  end

  def flip
    @opened = !@opened
  end
end
