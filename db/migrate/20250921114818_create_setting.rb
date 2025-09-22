class CreateSetting < ActiveRecord::Migration[8.0]
  def change
    create_table :settings do |t|
      t.string :scope, null: false
      t.string :category, null: false
      t.json :value, default: {}

      t.timestamps
      t.index [ :scope, :category ], unique: true
    end
  end
end
