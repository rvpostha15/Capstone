
class StudentMailer < ApplicationMailer
    default from: 'noreply@AssignMint.com'

    def welcome_email(student)
        @student = student
        @url = 'http://AssignMint.com'
        mail(to: @student.email, subject: 'Welcome to AssignMint')
    end
end