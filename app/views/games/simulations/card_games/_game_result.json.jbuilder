json.rounds game_result.rounds
json.card_count game_result.card_count
json.players game_result.players do |player|
  json.(player, :id, :name, :cards_remaining)
  json.open_cards player.open_cards do |card|
    json.color card.color
  end
end
