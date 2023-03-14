class TeachersController < ApplicationController

    #Teacher Index Method is For Programming Only
    def index 
        teachers = Teacher.all
        render json: teachers, status: :ok
    end

    def show 
        teacher = find_teacher
        render json: teacher, status: :ok
    end

    def create 
        teacher = Teacher.create!(teacher_params)
        render json: teacher, status: :created
    end

    private 

    def find_teacher
        Teacher.find(params[:id])
    end

    def teacher_params
        params.permit(:title, :creator_id)
    end
end
