
module Games
  class CardsController < ApplicationController
    def create
      game_config = card_game_items
      card_game = Games::Cards::Game.from(game_config)
      @game_result = card_game.play
      render :show, status: :created
    end

    private

    def card_game_items
      params.require(:card).permit(:card_count, :player_count)
    end
  end
end
