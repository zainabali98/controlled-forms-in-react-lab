import React from 'react'
import { useState } from 'react'

function BookShelf() {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  })

  function handleInputChange(event) {
    const newBookCopy = { ...newBook };
    newBookCopy[event.target.name] = event.target.value;
    setNewBook(newBookCopy);
  }


  function handleSubmit(event) {
    event.preventDefault();

    setBooks([...books, newBook]);

    setNewBook({
      title: '',
      author: ''
    });
  }


  return (
    <div>
      <h1>Book Shelf</h1>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>

          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name='title'
                id='title'
                value={newBook.title}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="author">Author</label>
              <input type="text"
                name='author'
                id='author'
                value={newBook.author}
                onChange={handleInputChange} />
            </div>

            <button type='submit'>Add New Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((book, index) => (
            <div className="bookCard" key={index}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookShelf