"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[179],{942:(t,e,a)=>{const s=a.p+"img/delete.svg",o=a.p+"img/drag.svg",n=a.p+"img/done.svg",d=()=>{const t=document.querySelector(".todos__list");t.innerHTML="";const e=JSON.parse(localStorage.getItem("tasks"))||[];if(0===e.length){const e='<p class="todos__list-empty">Empty task list</p>';t.insertAdjacentHTML("afterbegin",e)}else{const a=e.map(((t,e)=>!0===t.completed?`\n        <div draggable="true" class="todo">\n          <button class="todo__btn-check checked" data-check-btn='${e+1}'>\n            <img src="${n}" alt="to do completion icon" class="todo__check-img">\n          </button>\n          <label class="todo__label" for="todo__item-${e+1}">\n            <textarea class="todo__item completed" name="todo__item" id="todo__item-${e+1}" cols="30" rows="1" data-task-id='${e+1}'>${t.description}</textarea>\n            <button class="todo__btn-delete" data-delete-btn='${e+1}'>\n              <img src="${s}" alt="delete icon" class="todo__delete-img">\n            </button>\n          </label>\n          <img src="${o}" alt="drag icon" class="todo__btn-drag" data-drag-btn='${e+1}'>\n        </div>`:`\n        <div draggable="true" class="todo">\n          <button class="todo__btn-check" data-check-btn='${e+1}'>\n            <img src="${n}" alt="to do completion icon" class="todo__check-img">\n          </button>\n          <label class="todo__label" for="todo__item-${e+1}">\n            <textarea class="todo__item" name="todo__item" id="todo__item-${e+1}" cols="30" rows="1" data-task-id='${e+1}'>${t.description}</textarea>\n            <button class="todo__btn-delete" data-delete-btn='${e+1}'>\n              <img src="${s}" alt="delete icon" class="todo__delete-img">\n            </button>\n          </label>\n          <img src="${o}" alt="drag icon" class="todo__btn-drag" data-drag-btn='${e+1}'>\n        </div>`));t.insertAdjacentHTML("afterbegin",a.join(""))}},l=document.querySelector(".todos__form");document.addEventListener("DOMContentLoaded",(()=>{d()})),l.addEventListener("submit",(t=>{t.preventDefault();const e=l.querySelector("#task");if(""===e.value||null===e.value)e.setCustomValidity("Please enter a task"),e.reportValidity();else{(t=>{const e=JSON.parse(localStorage.getItem("tasks"))||[],a={description:t.get("task"),completed:!1,id:e.length+1};e.push(a),localStorage.setItem("tasks",JSON.stringify(e))})(new FormData(l)),d(),l.reset()}})),document.addEventListener("click",(t=>{if(t.target.dataset.deleteBtn){(t=>{const e=JSON.parse(localStorage.getItem("tasks")).reduce(((e,a)=>a.id===t?e:(a.id=e.length+1,[...e,a])),[]);localStorage.setItem("tasks",JSON.stringify(e))})(parseInt(t.target.dataset.deleteBtn,10)),d()}else if(t.target.dataset.taskId){const e=parseInt(t.target.dataset.taskId,10),a=t.target.parentElement.parentElement;document.querySelectorAll(".todo").forEach((t=>{t.classList.remove("editing")})),a.classList.add("editing"),t.target.addEventListener("change",(t=>{const a=t.target.value;((t,e)=>{const a=JSON.parse(localStorage.getItem("tasks"));a.find((e=>e.id===t)).description=e,localStorage.setItem("tasks",JSON.stringify(a))})(e,a),d()}))}else if(t.target.dataset.checkBtn){(t=>{const e=JSON.parse(localStorage.getItem("tasks")),a=e.find((e=>e.id===t));a.completed=!a.completed,localStorage.setItem("tasks",JSON.stringify(e))})(parseInt(t.target.dataset.checkBtn,10)),d()}else t.target.classList.contains("todos__clear-btn")?((()=>{const t=JSON.parse(localStorage.getItem("tasks")).reduce(((t,e)=>e.completed?t:(e.id=t.length+1,[...t,e])),[]);localStorage.setItem("tasks",JSON.stringify(t))})(),d()):document.querySelectorAll(".todo").forEach((t=>{t.classList.remove("editing")}))}))}},t=>{t(t.s=942)}]);