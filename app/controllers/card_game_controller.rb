class CardGameController < ApplicationController
  def create
    players = [
      Player.new("Carol"),
      Player.new("Alice"),
      Player.new("Bob"),
      Player.new("Mario")
    ]
    card_game = CardGame.new(players)
    @game_result = card_game.play
    render :show, status: :created
  end
end
