module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true
    field :favorite_genre, String, null: true
    field :books, [Types::BookType], null: true
    field :books_count, Integer, null: true

    def books_count
      object.books.count
    end
  end
end
