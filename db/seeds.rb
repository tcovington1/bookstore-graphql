# User
# t.string "name"
# t.string "email"
# t.string "favorite_genre"

# Book
# t.bigint "user_id", null: false
# t.string "title"
# t.string "genre"

5.times do
  user = User.create(name: Faker::Name.name, email: Faker::Internet.email, favorite_genre: Faker::Book.genre)
  5.times do
    user.books.create(title: Faker::Book.title, genre: Faker::Book.genre)
  end
end