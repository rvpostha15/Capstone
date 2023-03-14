class Student < ApplicationRecord
    #Associations
    belongs_to :teacher

    has_many :assignments
    has_many :decks, through: :assignments

    #Validations
    VALID_EMAIL_REGEX = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i		
    validates :email, :first_name, :last_name, :username, :password_digest ,presence: true
    validates :email, :username, uniqueness: true
    # validates :password_digest, :username, length: { minimum: 5 }
    validates :email, format:{with:VALID_EMAIL_REGEX, multiline:true}
end
