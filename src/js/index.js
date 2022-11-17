import '../css/reset.css';
import '../css/styles.css';
import Task from './modules/task.js';
import TaskList from './modules/taskList.js';

const taskform = document.querySelector('.todos__form');
const taskList = new TaskList();

// add event listener to form
taskform.addEventListener('submit', (event) => {
  event.preventDefault();

  // create an instance of a book from book class
  const task = new Task();
  /* add the task to task list */
  taskList.addTask(task);
  taskform.reset();
});

// Add event listener to window reload
window.addEventListener('load', () => {
  // load page content
  taskList.display();
  taskList.updateTask();
  taskList.removeTask();
});
