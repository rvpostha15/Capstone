
class TeacherMailer < ApplicationMailer
    default from: 'noreply@AssignMint.com'

    def welcome_email(teacher)
        @teacher = teacher
        @url = 'http://AssignMint.com'
        mail(to: @teacher.email, subject: 'Welcome to AssignMint')
    end
end

