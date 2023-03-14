class RenameTeacherToLehrer < ActiveRecord::Migration[7.0]
  def change
    rename_column :teachers, :teacher, :lehrer
    rename_column :students, :teacher, :lehrer
  end
end
