class Flashcard < ApplicationRecord
    #Associations
    belongs_to :deck

    #Validations
    validates :front, :back, presence: true, length: { maximum: 1000 }
    validates :deck_id, presence: true
end
