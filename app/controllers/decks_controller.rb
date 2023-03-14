class DecksController < ApplicationController

    def index 
        decks = Deck.all
        render json: decks, status: :ok
    end

    def show 
        deck = find_deck
        render json: deck, status: :ok
    end

    def create 
        deck = Deck.create!(deck_params)
        render json: deck, status: :created
    end

    def destroy 
        deck = find_deck
        deck.destroy!
        head :no_content
    end

    private 

    def find_deck
        Deck.find(params[:id])
    end

    def deck_params
        params.permit(:title, :creator_id)
    end
end
