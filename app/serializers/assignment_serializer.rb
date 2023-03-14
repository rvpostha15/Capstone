class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :complete
  has_one :deck
  has_one :teacher
  has_one :student
end
