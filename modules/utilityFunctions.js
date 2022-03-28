import books from './Books.js';
import * as Elements from './constElements.js';

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem('BOOKS_LIST')) != null) {
    books.BooksObject = JSON.parse(localStorage.getItem('BOOKS_LIST'));
    createContent();
  }
}

const addBook = () => {
  books.add(Elements.book, Elements.author);
  checkLocalStorage();
  Elements.booksList.parentElement.classList.remove('hide');
  Elements.author.parentElement.parentElement.classList.add('hide');
  Elements.contactInfo.classList.add('hide');
};

const removeBook = (element) => {
  books.remove(element);
};

export { addBook, removeBook, checkLocalStorage };
