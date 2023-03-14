class Deck < ApplicationRecord
    #Associations
    belongs_to :teacher

    has_many :flashcards

    #Validations
    validates :title, :teacher_id, presence: true
end
