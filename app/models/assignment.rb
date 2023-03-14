class Assignment < ApplicationRecord
  belongs_to :deck
  belongs_to :teacher
  belongs_to :student
end
