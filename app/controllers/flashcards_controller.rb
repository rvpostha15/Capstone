class FlashcardsController < ApplicationController

    def index 
        flashcards = Flashcard.all
        render json: flashcards, status: :ok
    end

    def show 
        flashcard = find_flashcard
        render json: flashcard, status: :ok
    end

    def create 
        flashcard = Flashcard.create!(flashcard_params)
        render json: flashcard, status: :created
    end

    def update
        deck = find_deck
        flashcard = find_flashcard
        flashcard.update!(flashcard_params)
        render json: flashcard, status: :accepted
    end

    def destroy
        deck = find_deck
        flashcard = find_flashcard
        flashcard.destroy!
        head :no_content
    end

    private 

    def find_deck
        Deck.find(params[:deck_id])
    end

    def find_flashcard
        Flashcard.find(params[:flashcard_id])
    end

    def flashcard_params
        params.permit(:front, :back, :deck_id)
    end
end
