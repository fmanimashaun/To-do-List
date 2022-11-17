export default class Task {
  constructor() {
    this.description = document.querySelector('.todos__label-input').value;
    this.completed = false;
    this.index = null;
  }
}