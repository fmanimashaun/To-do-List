/**
 * @jest-environment jsdom
 */

import TaskList from '../src/js/modules/taskList.js';

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Display task list', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('when empty', () => {
    document.body.innerHTML = '<div class="todos__list"></div>';

    const todoholder = document.querySelector('.todos__list');

    const task = {
      description: 'task 1',
      completed: false,
      index: null,
    };

    const taskList = new TaskList();

    taskList.addTask(task);
    expect(todoholder.innerHTML).toBe('<div draggable="true" class="todo"><button class="todo__btn-check"><img src="test-file-stub" alt="to do completion icon" class="todo__check-img"></button><label class="todo__label" for="todo__item-1"><textarea class="todo__item" name="todo__item" id="todo__item-1" cols="30" rows="1"></textarea><button class="todo__btn-delete"><img src="test-file-stub" alt="delete icon" class="todo__delete-img"></button></label><img src="test-file-stub" alt="drag icon" class="todo__btn-drag"></div>');
  });
});
