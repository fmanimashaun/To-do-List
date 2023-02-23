import { displayTodo } from './displayTaskList.js';

export default class TaskList {
  constructor() {
    this.tasks = [];
  }

  getList() {
    /* Checking if there taskList was stored in the localstorage */
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : this.tasks;
  }

  displayList() {
    // get the task list
    const taskList = this.getList();

    /* Load task HTML elements */
    displayTodo(taskList);
  }

  addToList(task) {
    // get the task list
    const taskList = this.getList();

    // add the new task to the task list
    taskList.push(task);

    // save the task list in the localstorage
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  removeFromList() {}

  updateTask() {}

  clearAllCompleted() {}
}