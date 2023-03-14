class RenameCreatorIdToTeacherIdInDecks < ActiveRecord::Migration[7.0]
  def change
    rename_column :decks, :creator_id, :teacher_id
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
