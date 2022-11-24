/* eslint-disable import/prefer-default-export */
import checkBtnImg from '../../img/done.svg';
import deleteImg from '../../img/delete.svg';
import dragImg from '../../img/drag.svg';

export const displayTodo = (list) => {
  /* reset the inner content of the todo task list */
  const todoTastList = document.querySelector('.todos__list');
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
      taskDiv.draggable = true;
      taskDiv.className = 'todo__item';

      /* create a task check button */
      const taskCheckBtn = document.createElement('button');
      taskCheckBtn.className = 'todo__btn-check';

      /* create a task check button image */
      const taskCheckBtnImg = document.createElement('img');
      taskCheckBtnImg.src = checkBtnImg;
      taskCheckBtnImg.alt = 'to do completion icon';
      taskCheckBtnImg.className = 'todo__check-img';

      /* create a task label */
      const taskLabel = document.createElement('label');
      taskLabel.className = 'todo__label';
      taskLabel.htmlFor = `todo__item-${task.index}`;

      /* create the todo element using textarea */
      const todo = document.createElement('textarea');
      todo.className = 'todo';
      todo.name = 'todo_item';
      todo.id = `todo__item-${task.index}`;
      todo.cols = '30';
      todo.rows = '1';
      todo.innerText = task.description;

      /* check of task has been completed */
      if (task.completed === true) {
        todo.classList.add('completed');
        taskCheckBtn.classList.add('checked');
      }

      /* create a task delete button */
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'todo__btn-delete';

      /* create a task delete button image */
      const deleteBtnImg = document.createElement('img');
      deleteBtnImg.src = deleteImg;
      deleteBtnImg.alt = 'delete icon';
      deleteBtnImg.className = 'todo__delete-img';

      /* create a task drag button */
      const dragBtn = document.createElement('img');
      dragBtn.src = dragImg;
      dragBtn.alt = 'drag icon';
      dragBtn.className = 'todo__btn-drag';

      /* Appending elements to parents */
      taskCheckBtn.appendChild(taskCheckBtnImg);
      taskDiv.appendChild(taskCheckBtn);
      taskLabel.appendChild(todo);
      deleteBtn.appendChild(deleteBtnImg);
      taskLabel.appendChild(deleteBtn);
      taskDiv.appendChild(taskLabel);
      taskDiv.appendChild(dragBtn);
      todoTastList.appendChild(taskDiv);
    });
  }
};
