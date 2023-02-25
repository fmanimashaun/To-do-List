import displayTodos from './displayTodos.js';

const clearCompleted = () => {
  // get the task list from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  // remove all completed tasks from the task list and update the task ids
  const uncompletedTask = tasks.reduce((acc, task) => {
    if (task.completed) {
      return acc;
    }
    task.id = acc.length + 1;
    return [...acc, task];
  }, []);

  // save the updated task list to local storage
  localStorage.setItem('tasks', JSON.stringify(uncompletedTask));

  // display the updated task list
  displayTodos();
};

export default clearCompleted;