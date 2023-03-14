class FlashcardSerializer < ActiveModel::Serializer
  attributes :id, :front, :back
  has_one :deck
end
