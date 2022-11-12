/* eslint-disable import/prefer-default-export */
import checkBtnImg from '../../img/done.svg';
import deleteImg from '../../img/delete.svg';
import dragImg from '../../img/drag.svg';

export const displayTodo = (list) => {
  /* reset the inner content of the todo task list */
  const todoTastList = document.querySelector('.todo__list');
  todoTastList.innerHTML = '';

  /* Checking if task list is empty */
  if (list.length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.className = 'task__list-emply';
    emptyMsg.innerText = 'Empty task list';
    todoTastList.appendChild(emptyMsg);
  } else {
    /* loop through the task array */
    list.forEach((task) => {
      /* create a task div */
      const taskDiv = document.createElement('div');
      taskDiv.className = 'todo__item';

      /* create a task check button */
      const taskCheckBtn = document.createElement('button');
      taskCheckBtn.className = 'todo__btn-check';

      /* create a task check button image */
      const taskCheckBtnImg = document.createElement('img');
      taskCheckBtnImg.src = checkBtnImg;
      taskCheckBtnImg.alt = 'to do completion icon';
      taskCheckBtnImg.className = 'todo__btn-img';

      /* create the todo element using textarea */
      const todo = document.createElement('textarea');
      todo.className = 'todo';
      todo.name = 'todo_item';
      todo.id = `todo__item-${task.index + 1}`;
      todo.cols = '30';
      todo.rows = '1';
      todo.innerText = task.description;

      if (task.completed === true) {
        todo.classList.add('completed');
      }

      /* create a task delete button */
      const deleteBtn = document.createElement('img');
      deleteBtn.src = deleteImg;
      deleteBtn.alt = 'delete icon';
      deleteBtn.className = 'todo__btn-delete';

      /* create a task drag button */
      const dragBtn = document.createElement('img');
      dragBtn.src = dragImg;
      dragBtn.alt = 'delete icon';
      dragBtn.className = 'todo__btn-drag';

      /* Appending elements to parents */
      taskCheckBtn.appendChild(taskCheckBtnImg);
      taskDiv.appendChild(taskCheckBtn);
      taskDiv.appendChild(todo);
      taskDiv.appendChild(dragBtn);
      taskDiv.appendChild(deleteBtn);
      todoTastList.appendChild(taskDiv);
    });
  }
};
