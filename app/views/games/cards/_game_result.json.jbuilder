json.rounds game_result.rounds
json.card_count game_result.card_count
json.players game_result.players do |player|
  json.(player, :id, :name, :cards_remaining)
end
