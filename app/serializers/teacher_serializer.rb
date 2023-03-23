class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :lehrer, :first_name, :last_name, :username, :email, :password, :password_confirmation, :students

  def students
    object.students.map do |student|
      student.as_json(only: [:id, :first_name, :last_name, :email])
        .merge(assignments: student.assignments.select(:id, :deck_id, :complete))
    end
  end
end
