require "support/application_system_test_case"

class Games::CardGamesTest < ApplicationSystemTestCase
  setup do
    @games_card_game = games_card_games(:one)
  end

  test "visiting the index" do
    visit games_card_games_url
    assert_selector "h1", text: "Card games"
  end

  test "should create card game" do
    visit games_card_games_url
    click_on "New card game"

    fill_in "Description", with: @games_card_game.description
    fill_in "State", with: @games_card_game.state
    fill_in "Title", with: @games_card_game.title
    fill_in "Type", with: @games_card_game.type

    click_on "Create Card game"

    assert_text "Card game was successfully created"
    click_on "Back"
  end

  test "should update Card game" do
    visit games_card_game_url(@games_card_game)
    click_on "Edit this card game", match: :first

    fill_in "Description", with: @games_card_game.description
    fill_in "State", with: @games_card_game.state
    fill_in "Title", with: @games_card_game.title
    fill_in "Type", with: @games_card_game.type

    click_on "Update Card game"

    assert_text "Card game was successfully updated"
    click_on "Back"
  end

  test "should destroy Card game" do
    visit games_card_game_url(@games_card_game)
    click_on "Destroy this card game", match: :first

    assert_text "Card game was successfully destroyed"
  end
end
