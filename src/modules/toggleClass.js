/* eslint-disable import/prefer-default-export */
export const toggleClass = (element, className) => {
  element.addEventListener('click', (event) => {
    event.stopPropagation();
    element.classList.toggle(className);
    console.log('clicked');
  });
};