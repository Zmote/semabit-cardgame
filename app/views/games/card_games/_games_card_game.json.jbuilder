json.extract! games_card_game, :id, :title, :description, :type, :state, :created_at, :updated_at
json.url games_card_game_url(games_card_game, format: :json)
