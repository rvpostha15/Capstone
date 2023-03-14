class AssignmentsController < ApplicationController

    def index 
        assignments = Assignment.all
        render json: assignments, status: :ok
    end

    def show 
        assignment = find_assignment
        render json: assignment, status: :ok
    end

    def create 
        assignment = Assignment.create!(assignment_params)
        render json: assignment, status: :created
    end

    def destroy 
        assignment = find_assignment
        assignment.destroy!
        head :no_content
    end

    private 

    def find_assignment
        Assignment.find(params[:id])
    end

    def assignment_params
        params.permit(:complete, :deck_id, :teacher_id, :student_id)
    end
end
