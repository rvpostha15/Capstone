class AddMoreDeviseToTeachers < ActiveRecord::Migration[7.0]
  def change
    change_table :teachers do |t|
      # Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      # Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

    end

    add_index :teachers, :confirmation_token, unique: true
    # add_index :teachers, :unlock_token,       unique: true
  end
end
