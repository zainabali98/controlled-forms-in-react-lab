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
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>


    </div>
  )
}

export default BookShelf