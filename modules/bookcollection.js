/* eslint-disable */
import Books from './books.js';

export class BookCollection {
  constructor() {
    this.bookObj = [];
    this.bookList = document.querySelector('#bookList');
    this.title = document.querySelector('#title');
    this.arthur = document.querySelector('#arthur');
    this.addBtn = document.querySelector('#addBtn');

    if (localStorage.getItem('inputArr')) {
      this.bookObj = JSON.parse(localStorage.getItem('inputArr'));
      this.displayBooks();
    }

    this.addBtn.addEventListener('click', this.newBook.bind(this));
  }

  newBook = ()=> {
    const title = this.title.value;
    const arthur = this.arthur.value;
    const book = new Books(title, arthur);
    this.bookObj.push(book);
    this.displayBooks();
    this.storeBook();
    this.title.value = '';
    this.arthur.value = '';
  }

  removeBook = (index)=> {
    this.bookObj.splice(index, 1);
    this.displayBooks();
    this.storeBook();
  }

  displayBooks = ()=> {
    this.bookList.innerHTML = '';
    this.bookObj.forEach((book, index) => {
      const bookItem = document.createElement('li');

      const paragraph = document.createElement('p');

      const span1 = document.createElement('span');
      span1.innerHTML = book.title;

      const span2 = document.createElement('span');
      span2.innerHTML = `by ${book.arthur}`;

      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'Remove';
      removeBtn.onclick = () => this.removeBook(index);

      paragraph.appendChild(span1);
      paragraph.appendChild(span2);

      bookItem.appendChild(paragraph);
      bookItem.appendChild(removeBtn);

      this.bookList.appendChild(bookItem);
    });
  }

  storeBook = ()=> {
    localStorage.setItem('inputArr', JSON.stringify(this.bookObj));
  }
}