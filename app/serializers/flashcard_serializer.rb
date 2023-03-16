class FlashcardSerializer < ActiveModel::Serializer
  attributes :id, :front, :back, :deck_id
end
