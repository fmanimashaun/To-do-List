import '../css/reset.css';
import '../scss/styles.scss';
import TaskList from './modules/taskList.js';

const taskform = document.querySelector('.todos__form');
const todoTastList = document.querySelector('.todos__list');

document.addEventListener('DOMContentLoaded', () => {
  // create a new task list
  const taskList = new TaskList();

  // display the task list
  taskList.displayList();
});
