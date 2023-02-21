/* eslint-disable import/prefer-default-export */
export const addTask = (task, list) => {
  task.index = list.length + 1;
  list.push(task);
  return list;
};