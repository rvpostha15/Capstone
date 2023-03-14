class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :complete, :deck_id, :teacher_id, :student_id
  
  ##I don't think I need these associations
    # belongs_to :deck
    # belongs_to :teacher
    # belongs_to :student
end
