/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import deleteImg from '../../img/delete.svg';
import dragImg from '../../img/drag.svg';
import checkBtnImg from '../../img/done.svg';

export const displayTodo = (list) => {
  /* reset the inner content of the todo task list */
  const todoTastList = document.querySelector('.todos__list');
  todoTastList.innerHTML = '';

  /* Checking if task list is empty */
  if (list.length === 0) {
    /* create the empty message html */
    const emptyMsghtml = '<p class="todos__list-empty">Empty task list</p>';

    // insert the empty message html into the page
    todoTastList.insertAdjacentHTML('afterbegin', emptyMsghtml);
  } else {
    /* create the task list html */
    const tasklistHtml = list.map((task, index) => `
    <div draggable="true" class="todo">
      <button class="todo__btn-check"><img src="${checkBtnImg}" alt="to do completion icon" class="todo__check-img"></button>
      <label class="todo__label" for="todo__item-${index + 1}">
        <textarea class="todo__item" name="todo__item" id="todo__item-${index + 1}" cols="30" rows="1">${task.description}</textarea>
        <button class="todo__btn-delete"><img src="${deleteImg}" alt="delete icon" class="todo__delete-img"></button>
      </label>
      <img src="${dragImg}" alt="drag icon" class="todo__btn-drag">
     </div>`).join('');

    // insert the task list html into the page
    todoTastList.insertAdjacentHTML('afterbegin', tasklistHtml);
  }
};
