import '../scss/styles.scss';
import displayTodos from './modules/displayTodos.js';
import addTask from './modules/addTask.js';
import removeTask from './modules/removeTask.js';

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
  } else if (e.target.dataset.checkBtn) {
    // get the task id
    console.log('clicked', e.target.dataset.checkBtn);
  }
});