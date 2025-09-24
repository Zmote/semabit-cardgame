require "support/application_system_test_case"

class Games::GamesTest < ApplicationSystemTestCase
  setup do
    @games_game = games_games(:one)
  end

  test "visiting the index" do
    visit games_games_url
    assert_selector "h1", text: "Games"
  end

  test "should create game" do
    visit games_games_url
    click_on "New game"

    fill_in "Description", with: @games_game.description
    fill_in "State", with: @games_game.state
    fill_in "Title", with: @games_game.title
    fill_in "Type", with: @games_game.type
    click_on "Create Game"

    assert_text "Game was successfully created"
    click_on "Back"
  end

  test "should update Game" do
    visit games_game_url(@games_game)
    click_on "Edit this game", match: :first

    fill_in "Description", with: @games_game.description
    fill_in "State", with: @games_game.state
    fill_in "Title", with: @games_game.title
    fill_in "Type", with: @games_game.type
    click_on "Update Game"

    assert_text "Game was successfully updated"
    click_on "Back"
  end

  test "should destroy Game" do
    visit games_game_url(@games_game)
    click_on "Destroy this game", match: :first

    assert_text "Game was successfully destroyed"
  end
end
