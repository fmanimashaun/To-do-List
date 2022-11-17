import '../css/reset.css';
import '../css/styles.css';
import Task from './modules/task.js';
import TaskList from './modules/taskList.js';

const taskform = document.querySelector('.todos__form');
const todoTastList = document.querySelector('.todo__list');
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

// Add event listener to window to listen to click event
window.addEventListener('click', (event) => {
  event.stopPropagation();

  /* remove focus from last focused task */
  if (!event.target.classList.contains('todo__btn-delete') && !event.target.classList.contains('todo')) {
    const taskDivArr = todoTastList.childNodes;
    taskDivArr.forEach((taskDiv) => {
      taskDiv.classList.remove('focus');
    });
  }
});
