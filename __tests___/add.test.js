/**
 * @jest-environment jsdom
 */

import Task from '../src/js/modules/task.js';
import { displayTodo } from '../src/js/modules/displayTaskList.js';

/* get the task list */
test('add new todo', () => {
  document.body.innerHTML = '<div class="todos__list"></div>';

  const list = document.querySelector('.todos__list');
  const task = new Task('wash dishes');
  const taskContainer = [];
  taskContainer.push(task);
  displayTodo(taskContainer);
  expect(list.innerHTML).toBe('<div draggable="true" class="todo"><button class="todo__btn-check"><img src="test-file-stub" alt="to do completion icon" class="todo__check-img"></button><label class="todo__label" for="todo__item-1"><textarea class="todo__item" name="todo__item" id="todo__item-1" cols="30" rows="1">wash dishes</textarea><button class="todo__btn-delete"><img src="test-file-stub" alt="delete icon" class="todo__delete-img"></button></label><img src="test-file-stub" alt="drag icon" class="todo__btn-drag"></div>');
});
