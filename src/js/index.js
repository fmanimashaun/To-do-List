import '../scss/styles.scss';
import displayTodos from './modules/displayTodos.js';
import addTask from './modules/addTask.js';
import removeTask from './modules/removeTask.js';
import editTask from './modules/editTask.js';

// get the form element
const form = document.querySelector('.todos__form');

// display the task list on page load
document.addEventListener('DOMContentLoaded', () => {
  displayTodos();
});

// handle the add task enter key press
form.addEventListener('submit', (e) => {
  // prevent the default form submit action
  e.preventDefault();

  // check if the form is valid
  const inputField = form.querySelector('#task');

  if (inputField.value === '' || inputField.value === null) {
    // set the custom validity message
    inputField.setCustomValidity('Please enter a task');

    // display the custom validity message to the user
    inputField.reportValidity();
  } else {
    // get form data
    const formData = new FormData(form);

    // add the task to the task list
    addTask(formData);

    // reset form
    form.reset();
  }
});

// handle the remove task click
document.addEventListener('click', (e) => {
  // check if the clicked element is the remove task button
  if (e.target.dataset.deleteBtn) {
    // get the task id
    const id = parseInt(e.target.dataset.deleteBtn, 10);

    // remove the task from the task list
    removeTask(id);
  } else if (e.target.dataset.taskId) {
    // get the task id
    const id = parseInt(e.target.dataset.taskId, 10);

    // get the current todo div
    const currentTodoDiv = e.target.parentElement.parentElement;

    // get the task todo list
    const taskTodoList = document.querySelectorAll('.todo');

    // remove the editing class from all todo divs
    taskTodoList.forEach((element) => {
      element.classList.remove('editing');
    });

    // add the editing class to the current todo div
    currentTodoDiv.classList.add('editing');

    // add event listener to the textarea element
    e.target.addEventListener('change', (e) => {
      // get the updated task description
      const updateDescription = e.target.value;

      // call the edit function
      editTask(id, updateDescription);
    });
  } else {
    const taskTodoList = document.querySelectorAll('.todo');
    taskTodoList.forEach((element) => {
      element.classList.remove('editing');
    });
  }
});