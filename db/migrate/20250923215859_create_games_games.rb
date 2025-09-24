class CreateGamesGames < ActiveRecord::Migration[8.0]
  def change
    create_table :games_games do |t|
      t.string :title
      t.string :description
      t.string :type
      t.integer :state

      t.timestamps
    end
  end
end
