
class SessionsController < ApplicationController
    include ActionController::RespondWith
    respond_to :json

    def new
    end
  
    def create
        lehrer = params[:user][:lehrer].to_i
        puts "params[:session][:lehrer]: #{params[:user][:lehrer]}"
        if lehrer == 1
            create_teacher_session
            puts 'teacher teacher'
        elsif lehrer == 0
            create_student_session
            puts "this is running"
        end
    end
  
    def destroy
      sign_out(current_student || current_teacher)
      head :no_content
    end
  
    private
  
    def create_teacher_session
        if params[:user][:lehrer] == 1
            teacher = Teacher.find_by(email: params[:user][:email])
            puts "found teacher: #{teacher}"
            if teacher && teacher.valid_password?(params[:user][:password])
                sign_in(teacher)
                render json: teacher, status: :ok
            else
                render json: { error: 'Invalid email or password' }, status: :unauthorized
            end
        end
    end
      
    def create_student_session
        student = Student.find_by(email: params[:user][:email])
        if student
            if student.valid_password?(params[:user][:password])
                sign_in(student)
                render json: student, status: :ok
            else
                render json: { error: 'Invalid email or password' }, status: :unauthorized
            end
        else
            render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
    end
end
      
  