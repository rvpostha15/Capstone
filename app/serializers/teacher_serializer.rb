class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :lehrer, :first_name, :last_name, :username, :email, :password_digest, :students_with_assignments

  # Define a custom method called students_with_assignments
  def students_with_assignments
    # For each student associated with the teacher (object refers to the teacher instance)
    object.students.map do |student|
      # Call as_json on the student instance, which returns a hash representation of the student
      # Only include names and email in the hash representation of the student
      student.as_json(only: [:id, :first_name, :last_name, :email])
      # Then merge the assignments into the hash, so the student's assignments are included in the output
        .merge(assignments: student.assignments.select(:id, :deck_id, :complete))
    end
  end
end
