import '../scss/styles.scss';
import displayTodos from './modules/displayTodos.js';
import addTask from './modules/addTask.js';

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
