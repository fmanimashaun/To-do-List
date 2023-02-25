import displayTodos from './displayTodos.js';

const editTask = (id, str) => {
  // get list of tasks from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  // find the task to edit
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // update the task description
  tasks[taskIndex].description = str;

  // save the updated task list to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // display the updated task list
  displayTodos();
};

export default editTask;