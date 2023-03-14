class DeckSerializer < ActiveModel::Serializer
  attributes :id, :title, :teacher_id

  has_many :flashcards
end
