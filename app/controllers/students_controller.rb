class StudentsController < ApplicationController


    def index 
        students = Student.all
        render json: students, status: :ok
    end

    def show 
        student = find_student
        render json: student, status: :ok
    end

    def create 
        student = Student.create!(student_params)
        render json: student, status: :created
    end

    private 

    def find_student
        Student.find(params[:id])
    end

    def student_params
        params.permit(:lehrer, :first_name, :last_name, :username, :email, :password_digest, :teacher_id)
    end
end
