require "test_helper"

module Games
  class GamesControllerTest < ActionDispatch::IntegrationTest
    setup do
      @games_game = games_games(:one)
    end

    test "should get index" do
      get games_games_url
      assert_response :success
    end

    test "should get new" do
      get new_games_game_url
      assert_response :success
    end

    test "should create games_game" do
      assert_difference("Games::Game.count") do
        post games_games_url, params: { games_game: { description: @games_game.description, state: @games_game.state, title: @games_game.title, type: @games_game.type } }
      end

      assert_redirected_to games_game_url(Games::Game.last)
    end

    test "should show games_game" do
      get games_game_url(@games_game)
      assert_response :success
    end

    test "should get edit" do
      get edit_games_game_url(@games_game)
      assert_response :success
    end

    test "should update games_game" do
      patch games_game_url(@games_game), params: { games_game: { description: @games_game.description, state: @games_game.state, title: @games_game.title, type: @games_game.type } }
      assert_redirected_to games_game_url(@games_game)
    end

    test "should destroy games_game" do
      assert_difference("Games::Game.count", -1) do
        delete games_game_url(@games_game)
      end

      assert_redirected_to games_games_url
    end
  end
end
