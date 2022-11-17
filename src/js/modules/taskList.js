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
    task.index = this.tasks.length + 1;
    this.tasks.push(task);

    // update the local storage with the new task
    localStorage.setItem('taskList', JSON.stringify(this.tasks));

    // update the page with the new task
    this.display();
  }

  removeTask() {
    /* get the nodeList of task been displayed */
    const todoTastList = document.querySelector('.todo__list');

    /* get the current task list */
    const currentTasks = this.getTasks();

    /* add event listener to the task list container */
    todoTastList.addEventListener('click', (event) => {
      /* check if the event target is the textarea */
      if (event.target.matches('textarea')) {
        /* get the input label element */
        const todoLabel = event.target.parentElement;

        /* get the label parent div */
        const todoDiv = todoLabel.parentElement;

        /* add a focus class to the label parent div to display the delete btn */
        todoDiv.classList.add('focus');
      } else if (event.target.classList.contains('todo__btn-delete')) {
        /* check if number of task is one when delete btn clicked */
        if (currentTasks.length === 1) {
          /* clear the page */
          todoTastList.innerHTML = '';

          /* remove the last task from the task list and update localstorage */
          currentTasks.splice(0, 1);

          localStorage.setItem('taskList', JSON.stringify(currentTasks));

          /* display empty message */
          this.display();
        } else {
          /* get the input label element */
          const todoLabel = event.target.parentElement;

          /* get the label for attribute value */
          const todoLabelAtr = todoLabel.getAttribute('for');

          /* get the index of the task to be deleted */
          const todoIndex = todoLabelAtr.split('-')[1] - 1;

          /* get the label parent div */
          const todoDiv = todoLabel.parentElement;

          /* remove the task from the task list and update localstorage */
          todoDiv.parentElement.removeChild(todoDiv);
          currentTasks.splice(todoIndex, 1);

          // /* update the task index */
          currentTasks.forEach((task, index) => {
            task.index = index + 1;
          });

          localStorage.setItem('taskList', JSON.stringify(currentTasks));

          /* update the index of the task in the task list */
          this.display();
        }
      }
    });
  }

  updateTask() {
    /* get the nodeList of task been displayed */
    const todoTastList = document.querySelector('.todo__list');

    /* get the current task list */
    const currentTasks = this.getTasks();

    /* add event listener to the task list container check for changes */
    todoTastList.addEventListener('click', (event) => {
      /* check if the event target is the textarea */
      if (event.target.matches('textarea')) {
        const todoInput = event.target;

        /* get the input label element */
        const todoLabel = event.target.parentElement;

        /* get the label for attribute value */
        const todoLabelAtr = todoLabel.getAttribute('for');

        /* get the index of the task to be deleted */
        const todoIndex = todoLabelAtr.split('-')[1];

        todoInput.addEventListener('change', () => {
          /* get the task description */
          const todoDescription = todoInput.value;

          /* update the task description */
          currentTasks[todoIndex].description = todoDescription;

          /* update the task list */
          localStorage.setItem('taskList', JSON.stringify(currentTasks));

          /* update the task list */
          this.display();
        });
      }
    });
  }

  getTasks() {
    return this.tasks;
  }
}