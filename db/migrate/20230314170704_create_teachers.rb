class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.boolean :teacher
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
