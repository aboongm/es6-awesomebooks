import books from './Books.js';
import * as Elements from './constElements.js';

const addBook = () => {
  books.add(Elements.book, Elements.author);
  checkLocalStorage();
  Elements.booksList.parentElement.classList.remove('hide');
  Elements.author.parentElement.parentElement.classList.add('hide');
  Elements.contactInfo.classList.add('hide');
};
