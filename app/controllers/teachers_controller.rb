class TeachersController < ApplicationController

    #Teacher Index Method is For Programming Only
    def index 
        teachers = Teacher.all
        render json: teachers, status: :ok
    end

    def show 
        teacher = find_teacher
        render json: teacher, include: {students: {include: :assignments}}, status: :ok
    end

    def create 
        teacher = Teacher.create!(teacher_params)
        render json: teacher, status: :created
    end

    private 

    def find_teacher
        Teacher.includes(students: :assignments).find(params[:id])
    end

    def teacher_params
        params.permit(:lehrer, :first_name, :last_name, :username, :email, :password_digest)
    end
end
