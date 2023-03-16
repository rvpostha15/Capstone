class StudentSerializer < ActiveModel::Serializer
  attributes :id, :lehrer, :first_name, :last_name, :username, :email, :password_digest, :teacher_id, :full_name

  has_many :assignments

  def full_name() 
    "#{object.first_name} #{object.last_name}"
  end
end
