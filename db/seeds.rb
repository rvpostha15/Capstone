puts "🌱 Planting seeds..."

# Teachers
3.times do
    Teacher.create!(
      lehrer: true,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      username: Faker::Internet.username,
      email: Faker::Internet.email,
      password: "password"
    )
  end
  
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
  10.times do
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
  5.times do
    Deck.create!(
      title: Faker::Lorem.word,
      teacher_id: Teacher.all.sample.id
    )
  end

  # Flashcards
  50.times do
    Flashcard.create!(
      front: Faker::Lorem.word,
      back: Faker::Lorem.word,
      deck_id: Deck.all.sample.id,
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