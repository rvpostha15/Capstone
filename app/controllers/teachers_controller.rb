class TeachersController < ApplicationController

    def index 
        teachers = Teacher.all
        render json: teachers, status: :ok
    end

    def show 
        teacher = find_teacher
        render json: teacher, include: {students: {include: :assignments}}, status: :ok
    end

    # def create 
    #     teacher = Teacher.create!(teacher_params)
    #     TeacherMailer.welcome_email(teacher).deliver_now
    #     render json: teacher, status: :created
    # end
    def create
        teacher = Teacher.new(teacher_params)
        if teacher.save
          TeacherMailer.welcome_email(teacher).deliver_now
          render json: teacher, status: :created
        else
          render json: { errors: teacher.errors }, status: :unprocessable_entity
        end
    end
      
    private 

    def find_teacher
        Teacher.includes(students: :assignments).find(params[:id])
    end

    def teacher_params
        params.require(:teacher).permit(:lehrer, :first_name, :last_name, :username, :email, :password, :password_confirmation)
    end
end
