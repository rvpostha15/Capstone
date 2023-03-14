class StudentSerializer < ActiveModel::Serializer
  attributes :id, :lehrer, :first_name, :last_name, :username, :email, :password_digest, :teacher_id

  has_many :assignments
end
