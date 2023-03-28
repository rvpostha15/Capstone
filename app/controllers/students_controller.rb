class StudentsController < ApplicationController


    def index 
        students = Student.all
        render json: students, status: :ok
    end

    def show 
        student = find_student
        render json: student, status: :ok
    end

    # def create 
    #     student = Student.create!(student_params)
    #     render json: student, status: :created
    # end

    def create
        student = Student.new(student_params)
        if student.save
          StudentMailer.welcome_email(student).deliver_now
          render json: student, status: :created
        else
          render json: { errors: student.errors }, status: :unprocessable_entity
        end
    end

    private 

    def find_student
        Student.find(params[:id])
    end

    def student_params
        params.require(:student).permit(:lehrer, :first_name, :last_name, :username, :email, :password, :password_confirmation, :teacher_id)
    end
end
