module Games
  module Simulations
    class CardGamesController < ApplicationController
      def create
        game_config = card_game_items
        card_game = CardsGame::Game.from(game_config)
        @game_result = card_game.play
        render :show, status: :created, location: @games_game
      end

      private

      def card_game_items
        params.permit(:card_count, :player_count)
      end
    end
  end
end
