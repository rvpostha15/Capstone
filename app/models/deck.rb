class Deck < ApplicationRecord
    #Associations
    belongs_to :teacher

    has_many :flashcards

    #Validations
    validates :title, :creator_id, presence: true
end
