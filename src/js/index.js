import '../css/reset.css';
import '../scss/styles.scss';
import Task from './modules/task.js';
import TaskList from './modules/taskList.js';

const taskform = document.querySelector('.todos__form');
const todoTastList = document.querySelector('.todos__list');
const taskList = new TaskList();

// add event listener to form
taskform.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTodoInput = document.querySelector('.todos__label-input').value;
  // create an instance of a book from book class
  const task = new Task(newTodoInput);
  /* add the task to task list */
  taskList.addTask(task);
  taskform.reset();
});

// Add event listener to window reload
window.addEventListener('load', () => {
  taskList.display();
  taskList.updateTask();
  taskList.removeTask();
  taskList.clearAllCompleted();
});

// Add event listener to window to listen to click event
window.addEventListener('click', (event) => {
  event.stopPropagation();

  /* remove focus from last focused task */
  if (!event.target.classList.contains('todo__btn-delete') && !event.target.classList.contains('todo__item')) {
    const taskDivArr = todoTastList.childNodes;
    taskDivArr.forEach((taskDiv) => {
      taskDiv.classList.remove('focus');
    });
  }
});
