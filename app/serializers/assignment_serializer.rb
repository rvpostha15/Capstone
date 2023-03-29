class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :complete, :deck_id, :teacher_id, :student_id
  
end
