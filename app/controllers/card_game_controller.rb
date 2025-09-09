class CardGameController < ApplicationController
  def create
    players = [
      Player.new(1, "Carol", 1, 0),
      Player.new(2, "Alice", 2, 2),
      Player.new(3, "Bob", 3, 3),
      Player.new(4, "Mario", 4, 3)
    ]
    @card_game = CardGame.new(4, players.sort_by {|player| player.rank })
    render :show, status: :created
  end
end
