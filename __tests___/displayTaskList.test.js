/**
 * @jest-environment jsdom
 */

import { displayTodo } from '../src/js/modules/displayTaskList.js';

describe('Display task list', () => {
  test('when empty', () => {
    document.body.innerHTML = '<div class="todos__list"></div>';

    const todoholder = document.querySelector('.todos__list');
    const taskList = [];
    displayTodo(taskList);
    expect(todoholder.innerHTML).toBe('<p class="todos__list-emply"></p>');
  });

  test('display one task not complete', () => {
    document.body.innerHTML = '<div class="todos__list"></div>';

    const todoholder = document.querySelector('.todos__list');
    const taskList = [
      {
        description: 'task 1',
        completed: false,
        index: 1,
      },
    ];
    displayTodo(taskList);
    expect(todoholder.innerHTML).toBe('<div draggable="true" class="todo"><button class="todo__btn-check"><img src="test-file-stub" alt="to do completion icon" class="todo__check-img"></button><label class="todo__label" for="todo__item-1"><textarea class="todo__item" name="todo__item" id="todo__item-1" cols="30" rows="1"></textarea><button class="todo__btn-delete"><img src="test-file-stub" alt="delete icon" class="todo__delete-img"></button></label><img src="test-file-stub" alt="drag icon" class="todo__btn-drag"></div>');
  });

  test('display one task complete', () => {
    document.body.innerHTML = '<div class="todos__list"></div>';

    const todoholder = document.querySelector('.todos__list');
    const taskList = [
      {
        description: 'task 2',
        completed: true,
        index: 1,
      },
    ];
    displayTodo(taskList);
    expect(todoholder.innerHTML).toBe('<div draggable="true" class="todo"><button class="todo__btn-check checked"><img src="test-file-stub" alt="to do completion icon" class="todo__check-img"></button><label class="todo__label" for="todo__item-1"><textarea class="todo__item completed" name="todo__item" id="todo__item-1" cols="30" rows="1"></textarea><button class="todo__btn-delete"><img src="test-file-stub" alt="delete icon" class="todo__delete-img"></button></label><img src="test-file-stub" alt="drag icon" class="todo__btn-drag"></div>');
  });
});
