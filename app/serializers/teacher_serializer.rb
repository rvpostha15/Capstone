class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :teacher, :first_name, :last_name, :username, :email, :password_digest
end
