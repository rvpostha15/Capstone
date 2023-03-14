class Assignment < ApplicationRecord
    #Associations
    belongs_to :deck
    belongs_to :teacher
    belongs_to :student

    #Validations
    validates :deck_id, :student_id, :teacher_id, presence: true
end
