import React from 'react'

function Books({ books, user }) {
  return(
    <>
      <div className="lg:pl-10">
        <h1 className="font-bold mb-4">
          Books from {user.name}
        </h1>
        {
          books.map(book => (
            <div
              key={book.id}
            >
              <div className="p-6 shadow mb-4">
          <h3 className='text-2xl font-bold text-gray-800'>{book.title}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default Books;