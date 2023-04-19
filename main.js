let addTask = document.querySelector(".addTaskBtn");
let tasks = document.getElementById("inputId");
let taskContainer = document.querySelector(".tasksContainer");
let timer = document.getElementById("numTask");
let dateAndTime = document.getElementById("date");

let count = 0;

addTask.addEventListener("click", () => {
  let request = prompt("Add Tasks");

  tasks = request;
  taskContainer.insertAdjacentHTML(
    "beforebegin",
    `<div class="taskDiv">
    <input type="checkbox" id="input" name="" value="" />
    <span id="inputId"> ${tasks}</span>
  </div>`
  );

  count++;
  timer.innerHTML = count;
});

const myDate = () => {
  const today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + " -" + today.getFullYear();
  dateAndTime.innerHTML = date;
};

myDate();
