class DeckSerializer < ActiveModel::Serializer
  attributes :id, :title, :creator_id
end
