import displayTodos from './displayTodos.js';

const checkTask = (id) => {
  // get the task list from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  // get the task to check
  const task = tasks.find((task) => task.id === id);

  // check the task
  task.completed = !task.completed;

  // save the updated task list to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // display the updated task list
  displayTodos();
};

export default checkTask;