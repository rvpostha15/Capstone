class SessionsController < ApplicationController
    def create
      teacher = Teacher.find_by(email: params[:user][:email])
  
      if teacher&.valid_password?(params[:user][:password])
        sign_in(:teacher, teacher)
        render json: teacher, status: :ok
      else
        puts "Authentication failed for email: #{params[:user][:email]}" # Log the email
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  
    def destroy
      sign_out(current_teacher)
      head :no_content
    end
  end
  