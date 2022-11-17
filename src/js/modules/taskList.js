import { displayTodo } from './displayTaskList.js';
import { getSiblings } from './getSiblings.js';

export default class TaskList {
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    if (localStorage.getItem('taskList')) {
      return JSON.parse(localStorage.getItem('taskList'));
    }
    return this.tasks;
  }

  display() {
    /* Load task HTML elements */
    displayTodo(this.getTasks());
  }

  addTask(task) {
    const currentTasks = this.getTasks();
    task.index = currentTasks.length + 1;
    currentTasks.push(task);

    // update the local storage with the new task
    localStorage.setItem('taskList', JSON.stringify(currentTasks));

    // update the page with the new task
    this.display();
  }

  removeTask() {
    /* get the nodeList of task been displayed */
    const todoTastList = document.querySelector('.todo__list');

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
        /* get the current task list */
        const currentTasks = this.getTasks();

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

    /* add event listener to the task list container check for changes */
    todoTastList.addEventListener('click', (event) => {
      /* get the current task list */
      const currentTasks = this.getTasks();

      /* check if the event target is the textarea */
      if (event.target.matches('textarea')) {
        const todoInput = event.target;

        /* get the input label element */
        const todoLabel = event.target.parentElement;

        /* get the label for attribute value */
        const todoLabelAtr = todoLabel.getAttribute('for');

        /* get the index of the task to be deleted */
        let todoIndex = todoLabelAtr.split('-')[1];

        /* get the label parent div */
        const targetSiblings = getSiblings(todoLabel.parentElement);
        targetSiblings.forEach((sibling) => {
          if (sibling.classList.contains('focus')) {
            sibling.classList.remove('focus');
          }
        });

        /* add event listener to check change in task description */
        todoInput.addEventListener('change', () => {
          /* get the task description */
          const todoDescription = todoInput.value;
          todoIndex -= 1;

          /* update the task description */
          currentTasks[todoIndex].description = todoDescription;

          /* update the task list in local storage */
          localStorage.setItem('taskList', JSON.stringify(currentTasks));

          /* update the task list */
          this.display();
        });
      } else if (event.target.classList.contains('todo__btn-check')) {
        /* get the current task list */
        const currentTasks = this.getTasks();

        /* toggle the check class */
        event.target.classList.toggle('checked');

        /* get the input label element in the  task div */
        const todoLabel = event.target.nextElementSibling;

        const todo = todoLabel.firstChild;

        /* get the label for attribute value */
        const todoLabelAtr = todoLabel.getAttribute('for');

        /* get the index of the task to be deleted */
        const todoIndex = todoLabelAtr.split('-')[1] - 1;

        todo.classList.toggle('completed');

        /* update the task list property value */
        currentTasks[todoIndex].completed = !currentTasks[todoIndex].completed;

        /* update the task list in local storage */
        localStorage.setItem('taskList', JSON.stringify(currentTasks));
      }
    });
  }

  clearAllCompleted() {
    /* get the nodeList of task been displayed */
    const clearAllBtn = document.querySelector('.todo__clear-btn');

    clearAllBtn.addEventListener('click', () => {
      /* get the current task list */
      const currentTasks = this.getTasks();

      /* remove all completed tasks */
      const updatedTask = currentTasks.filter((task) => task.completed === false);

      /* update task index */
      updatedTask.forEach((task, index) => {
        task.index = index + 1;
      });

      /* update the task list in local storage */
      localStorage.setItem('taskList', JSON.stringify(updatedTask));

      /* update the task list page */
      this.display();
    });
  }
}