module Types
  class BookType < Types::BaseObject
    field :id, Integer, null: false
    field :title, String, null: false
    field :genre, String, null: false
  end
end
