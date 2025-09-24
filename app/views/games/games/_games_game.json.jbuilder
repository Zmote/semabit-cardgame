json.extract! games_game, :id, :title, :description, :type, :state, :created_at, :updated_at
json.url games_game_url(games_game, format: :json)
