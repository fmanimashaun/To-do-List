const addTask = (formDataObj) => {
  // get the task list from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const description = formDataObj.get('task');
  const completed = false;
  const id = tasks.length + 1;

  // create a new task object
  const task = { description, completed, id };

  // add the new task to the task list
  tasks.push(task);

  // save the task list to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default addTask;