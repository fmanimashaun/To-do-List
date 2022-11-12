export default class Task {
  constructor() {
    this.description = document.querySelector('.todos__label-input').value;
    this.status = false;
    this.index = null;
  }
}