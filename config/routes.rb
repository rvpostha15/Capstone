Rails.application.routes.draw do
  devise_for :teachers
  resources :flashcards, only: [:index, :show, :create, :update, :destroy]
  resources :assignments, only: [:index, :show, :create, :destroy]
  resources :decks, only: [:index, :show, :create, :destroy]
  resources :students, only: [:index, :show, :create]
  resources :teachers, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/hello', to: 'application#hello_world'



  get '/auth', to: 'users#find_current_user'
  get '/current_teacher', to: 'sessions#current_logged_in_teacher'

  post '/decks/:deck_id/flashcards', to: 'flashcards#create'
  delete '/decks/:deck_id/flashcards/:flashcard_id', to: 'flashcards#destroy'
  patch '/decks/:deck_id/flashcards/:flashcard_id', to: 'flashcards#update'
 
  delete '/decks/:deck_id', to: 'decks#destroy'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


end
