import '../css/reset.css';
import '../scss/styles.scss';
import displayTodos from './modules/displayTaskList.js';

// create an araa of objects to be used as the task list
const taskList = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: true,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
  {
    description: 'Task 4',
    completed: true,
    index: 4,
  },
];

// display the task list on page load
document.addEventListener('DOMContentLoaded', () => {
  displayTodos(taskList);
});
