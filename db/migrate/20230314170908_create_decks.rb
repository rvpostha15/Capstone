class CreateDecks < ActiveRecord::Migration[7.0]
  def change
    create_table :decks do |t|
      t.string :title
      t.integer :creator_id

      t.timestamps
    end
  end
end
