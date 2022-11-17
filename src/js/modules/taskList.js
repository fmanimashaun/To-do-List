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

  removeTask() {
    /* get the nodeList of task been displayed */
    const todoTastList = document.querySelector('.todo__list');

    const currentTasks = this.getTasks();

    todoTastList.addEventListener('click', (event) => {
      if (event.target.matches('textarea')) {
        const todoLabel = event.target.parentElement;
        const todoDiv = todoLabel.parentElement;
        todoDiv.classList.add('focus');
      } else if (event.target.classList.contains('todo__btn-delete')) {
        if (currentTasks.length === 1) {
          todoTastList.innerHTML = '';
          currentTasks.splice(0, 1);
          localStorage.setItem('taskList', JSON.stringify(currentTasks));
          this.display();
        } else {
          const todoLabel = event.target.parentElement;
          const todoLabelAtr = todoLabel.getAttribute('for');
          const todoIndex = todoLabelAtr.split('-')[1] - 1;
          const todoDiv = todoLabel.parentElement;
          todoDiv.parentElement.removeChild(todoDiv);
          currentTasks.splice(todoIndex, 1);
          localStorage.setItem('taskList', JSON.stringify(currentTasks));
          this.display();
        }
      }
    });
  }

  getTasks() {
    return this.tasks;
  }
}