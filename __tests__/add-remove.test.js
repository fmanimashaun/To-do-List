// import the function to be tested
import addTask from '../src/js/modules/addTask.js';
import removeTask from '../src/js/modules/removeTask.js';
import editTask from '../src/js/modules/editTask.js';
import clearCompleted from '../src/js/modules/clearCompleted.js';

// create a mock function for localStorage
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
  };
})();

// mock the local storage
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('addTask', () => {
  // clear localStorage before each test
  beforeEach(() => {
    window.localStorage.clear();
  });

  // test that the function adds a task to localStorage
  test('Add item to localstorage', () => {
    localStorage.setItem('tasks', JSON.stringify([])); // add empty task list to localStorage
    // create FormData object
    const formData = new FormData();
    formData.append('task', 'Test task');

    // call addTask function with FormData object
    addTask(formData);

    // retrieve task list from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    // expect the task list to contain one task with the correct properties
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Test task');
    expect(tasks[0].completed).toBe(false);
    expect(tasks[0].id).toBe(1);
  });
});

// Test for removeTask function
describe('removeTask', () => {
  // clear localStorage before each test
  beforeEach(() => {
    window.localStorage.clear();
  });
  // test that the function adds a task to localStorage
  test('remove item to localstorage', () => {
    // add intial task list to localStorage
    localStorage.setItem('tasks', JSON.stringify([
      {
        description: 'Task 1',
        completed: false,
        id: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        id: 2,
      },
      {
        description: 'Task 3',
        completed: false,
        id: 3,
      },
    ]));

    // retrieve task list from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks.length).toBe(3);

    // call removeTask function with id of task to remove
    removeTask(2);

    // retrieve task list from localStorage
    tasks = JSON.parse(localStorage.getItem('tasks'));

    // test that the task list contains the correct tasks
    expect(tasks[1].description).toBe('Task 3');

    // test that the task list contains the correct number of tasks
    expect(tasks.length).toBe(2);
  });
});

// Test for editTask function
describe('editTask', () => {
  // clear localStorage before each test
  beforeEach(() => {
    window.localStorage.clear();
  });
  // test that the function adds a task to localStorage
  test('Add item to localstorage', () => {
    // add intial task list to localStorage
    localStorage.setItem('tasks', JSON.stringify([
      {
        description: 'Task 1',
        completed: false,
        id: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        id: 2,
      },
      {
        description: 'Task 3',
        completed: false,
        id: 3,
      },
    ]));

    // retrieve task list from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks.length).toBe(3);

    // create the values to be passed to the editTask function
    const id = 2;
    const str = 'edited task';

    // call editTask function with id of task to edit
    editTask(id, str);

    // retrieve the updated task list from localStorage
    tasks = JSON.parse(localStorage.getItem('tasks'));

    // test that the task list contains the correct tasks
    expect(tasks[id - 1].description).toBe('edited task');
  });
});

// Test for clearCompleted function
describe('clearCompleted', () => {
  // clear localStorage before each test
  beforeEach(() => {
    window.localStorage.clear();
  });

  // test that the function adds a task to localStorage
  test('Add item to localstorage', () => {
    // add intial task list to localStorage
    localStorage.setItem('tasks', JSON.stringify([
      {
        description: 'Task 1',
        completed: true,
        id: 1,
      },
      {
        description: 'Task 2',
        completed: true,
        id: 2,
      },
      {
        description: 'Task 3',
        completed: false,
        id: 3,
      },
    ]));

    // retrieve task list from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks.length).toBe(3);

    // call clearCompleted function
    clearCompleted();

    // retrieve the updated task list from localStorage
    tasks = JSON.parse(localStorage.getItem('tasks'));

    // test that the task list contains the correct tasks
    expect(tasks.length).toBe(1);
  });
});
