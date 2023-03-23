class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    private

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response(exception)
      render json: { errors: exception.message }, status: :not_found
    end

    # def log_in_teacher(teacher)
    #   session[:teacher_id] = teacher.id
    # end
    
    # def log_in_student(student)
    #   session[:student_id] = student.id
    # end
    
    # def current_teacher
    #   @current_teacher ||= Teacher.find_by(id: session[:teacher_id])
    # end
    
    # def current_student
    #   @current_student ||= Student.find_by(id: session[:student_id])
    # end
    
    # def teacher_logged_in?
    #   current_teacher.present?
    # end
    
    # def student_logged_in?
    #   current_student.present?
    # end
    
    # helper_method :current_teacher, :current_student, :teacher_logged_in?, :student_logged_in?
  end
