class Teacher < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
    #Associations
    has_many :students
    has_many :assignments, through: :students

    has_many :decks
    has_many :flashcards, through: :decks

    # has_many :assignments
    # has_many :students, through: :assignments

    #Validations
    VALID_EMAIL_REGEX = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i		
    validates :first_name, :last_name, :username, presence: true
    validates :username, uniqueness: true
    # validates :password_digest, :username, length: { minimum: 5 }
    validates :email, format:{with:VALID_EMAIL_REGEX, multiline:true}
end
