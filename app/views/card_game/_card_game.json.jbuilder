json.rounds card_game.rounds
json.players card_game.players do |player|
  json.(player, :id, :name, :rank, :cards_remaining)
end
