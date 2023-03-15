class Deck < ApplicationRecord
    #Associations
    belongs_to :teacher

    has_many :flashcards, dependent: :destroy
    has_many :assignments, dependent: :destroy

    #Validations
    validates :title, :teacher_id, presence: true
end
