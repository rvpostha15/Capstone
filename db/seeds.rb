puts "🌱 Planting seeds..."

# Teachers
Teacher.create!(
  lehrer: true,
  first_name: "Rachel",
  last_name: "Katz",
  username: "rkatz",
  email: "rachel@katz.com",
  password: "password",
  password_confirmation: "password"
)

Teacher.create!(
  lehrer: true,
  first_name: "Greem",
  last_name: "Lee",
  username: "glee",
  email: "greem@lee.com",
  password: "password",
  password_confirmation: "password"
)

  
# Students
Student.create!(
  lehrer: false,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password",
  teacher_id: Teacher.first.id
)

Student.create!(
  lehrer: false,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password",
  teacher_id: Teacher.last.id
)

12.times do
  Student.create!(
    lehrer: false,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password: "password",
    teacher_id: Teacher.all.sample.id
  )
end

# Decks
Deck.create!(
  title: "Spanish",
  teacher_id: Teacher.all.sample.id
)

Deck.create!(
  title: "German",
  teacher_id: Teacher.all.sample.id
)

Deck.create!(
  title: "Ruby on Rails",
  teacher_id: Teacher.all.sample.id
)

Deck.create!(
  title: "React",
  teacher_id: Teacher.all.sample.id
)

# Flashcards for Spanish Deck
spanish_flashcards = [
  { front: "hola", back: "hello" },
  { front: "gracias", back: "thank you" },
  { front: "por favor", back: "please" },
  { front: "adiós", back: "goodbye" },
  { front: "amigo", back: "friend" }
]

spanish_flashcards.each do |card|
  Flashcard.create!(
    front: card[:front],
    back: card[:back],
    deck_id: Deck.find_by(title: "Spanish").id
  )
end

# Flashcards for German Deck
german_flashcards = [
  { front: "hallo", back: "hello" },
  { front: "danke", back: "thank you" },
  { front: "bitte", back: "please" },
  { front: "tschüss", back: "goodbye" },
  { front: "freund", back: "friend" }
]

german_flashcards.each do |card|
  Flashcard.create!(
    front: card[:front],
    back: card[:back],
    deck_id: Deck.find_by(title: "German").id
  )
end

# Flashcards for Ruby on Rails Deck
ruby_on_rails_flashcards = [
  { front: "What does MVC stand for in Rails?", back: "Model-View-Controller" },
  { front: "What command creates a new Rails application?", back: "rails new app_name" },
  { front: "What is the command to start a Rails server?", back: "rails server or rails s" },
  { front: "What is a Rails migration?", back: "A way to alter the database schema over time in a consistent and organized manner." },
  { front: "What is the purpose of the 'config/routes.rb' file in a Rails application?", back: "To define the routes and URL patterns for the application." }
]

ruby_on_rails_flashcards.each do |card|
  Flashcard.create!(
    front: card[:front],
    back: card[:back],
    deck_id: Deck.find_by(title: "Ruby on Rails").id
  )
end

# Flashcards for React Deck
react_flashcards = [
  { front: "What is React?", back: "A JavaScript library for building user interfaces." },
  { front: "What is JSX?", back: "A syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code." },
  { front: "What is a React component?", back: "A self-contained, reusable piece of code that represents a part of a user interface." },
  { front: "What is a state in React?", back: "An object that holds data and determines how a component renders and behaves." },
  { front: "What is a prop in React?", back: "A way to pass data from a parent component to a child component." }
]

react_flashcards.each do |card|
  Flashcard.create!(
    front: card[:front],
    back: card[:back],
    deck_id: Deck.find_by(title: "React").id
  )
end


# Assignments
3.times do
  Assignment.create!(
    complete: Faker::Boolean.boolean,
    deck_id: Deck.all.sample.id,
    teacher_id: Teacher.first.id,
    student_id: Student.first.id,
  )
end

3.times do
  Assignment.create!(
    complete: Faker::Boolean.boolean,
    deck_id: Deck.all.sample.id,
    teacher_id: Teacher.last.id,
    student_id: Student.second.id,
  )
end

puts "✅ Done seeding!"