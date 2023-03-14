class StudentSerializer < ActiveModel::Serializer
  attributes :id, :teacher, :first_name, :last_name, :username, :email, :password_digest, :teacher_id
end
