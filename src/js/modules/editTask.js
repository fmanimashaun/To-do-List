const editTask = (id, str) => {
  // get list of tasks from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  // get the task to edit
  const task = tasks.find((task) => task.id === id);

  // update the task description
  task.description = str;

  // save the updated task list to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default editTask;