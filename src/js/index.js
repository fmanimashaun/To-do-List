import '../css/reset.css';
import '../css/styles.css';

import { displayTodo } from './modules/displayTaskList.js';

const todoTask = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },

  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },

];

displayTodo(todoTask);
