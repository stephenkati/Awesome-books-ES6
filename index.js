/* eslint-disable */
import {
  navlist, navaddnew, navcontact, list, addnew, contact, navlink,
} from './modules/variables.js';
import { BookCollection } from './modules/bookcollection.js';
import { time } from './modules/time.js';

// run book
const bookCollection = new BookCollection();

// run the time function
setInterval(time, 1000);

navlink.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.link-color')?.classList.remove('link-color');
    link.classList.add('link-color');
  });
});
navlist.addEventListener('click', (e) => {
  e.preventDefault();
  list.style.display = 'flex';
  addnew.style.display = 'none';
  contact.style.display = 'none';
});
navaddnew.addEventListener('click', (e) => {
  e.preventDefault();
  list.style.display = 'none';
  addnew.style.display = 'flex';
  contact.style.display = 'none';
});
navcontact.addEventListener('click', (e) => {
  e.preventDefault();
  list.style.display = 'none';
  addnew.style.display = 'none';
  contact.style.display = 'block';
});
window.addEventListener('load', (e) => {
  e.preventDefault();
  list.style.display = 'flex';
  addnew.style.display = 'none';
  contact.style.display = 'none';
});