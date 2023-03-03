const removeTask = (id) => {
  // get the task list from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  // remove the task from the task list and update the task ids
  const updatedTasks = tasks.reduce((acc, task) => {
    if (task.id === id) {
      return acc;
    }
    task.id = acc.length + 1;
    return [...acc, task];
  }, []);

  // save the updated task list to local storage
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

export default removeTask;