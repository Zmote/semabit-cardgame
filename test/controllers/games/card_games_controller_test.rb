require "test_helper"

module Games
  class CardGamesControllerTest < ActionDispatch::IntegrationTest
    setup do
      @games_card_game = games_card_games(:one)
    end

    test "should get index" do
      get games_card_games_url
      assert_response :success
    end

    test "should get new" do
      get new_games_card_game_url
      assert_response :success
    end

    test "should create games_card_game" do
      assert_difference("Games::CardGame.count") do
        post games_card_games_url, params: { games_card_game: {
          description: @games_card_game.description,
          state: @games_card_game.state,
          title: @games_card_game.title,
          type: @games_card_game.type
        } }
      end

      assert_redirected_to games_card_game_url(Games::CardGame.last)
    end

    test "should show games_card_game" do
      get games_card_game_url(@games_card_game)
      assert_response :success
    end

    test "should get edit" do
      get edit_games_card_game_url(@games_card_game)
      assert_response :success
    end

    test "should update games_card_game" do
      patch games_card_game_url(@games_card_game), params: { games_card_game: {
        description: @games_card_game.description,
        state: @games_card_game.state,
        title: @games_card_game.title,
        type: @games_card_game.type
      } }
      assert_redirected_to games_card_game_url(@games_card_game)
    end

    test "should destroy games_card_game" do
      assert_difference("Games::CardGame.count", -1) do
        delete games_card_game_url(@games_card_game)
      end

      assert_redirected_to games_card_games_url
    end
  end
end
