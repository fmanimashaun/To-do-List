import { displayTodo } from './displayTaskList.js';

export default class TaskList {
  constructor() {
    if (localStorage.getItem('taskList')) {
      this.tasks = JSON.parse(localStorage.getItem('taskList'));
    } else {
      this.tasks = [];
    }
  }

  display() {
    displayTodo(this.tasks);
  }

  addTask(task) {
    task.index = this.tasks.length;
    this.tasks.push(task);

    // update the local storage with the new task
    localStorage.setItem('taskList', JSON.stringify(this.tasks));

    // update the page with the new task
    this.display();
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  getTasks() {
    return this.tasks;
  }
}