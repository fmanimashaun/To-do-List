import '../css/reset.css';
import '../css/styles.css';
import { toggleClass } from '../modules/toggleClass.js';

const checkBtn = document.querySelector('.todo__btn-check');

toggleClass(checkBtn, 'checked');

checkBtn.addEventListener('click', () => {
  checkBtn.nextElementSibling.classList.toggle('completed');
});
