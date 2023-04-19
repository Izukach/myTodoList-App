let addTask = document.querySelector(".addTaskBtn");
let tasks = document.getElementById("inputId");
let taskContainer = document.querySelector(".tasksContainer");
let timer = document.getElementById("numTask");
let dateAndTime = document.getElementById("date");
let delectbtn = document.getElementById("delectBtn");

let count = 0;

addTask.addEventListener("click", () => {
  let request = prompt("Add Tasks");
  if (request === null || request === undefined) return;

  if (request === "") {
    count--;
  }

  if (request !== "") {
    tasks = request;
    taskContainer.insertAdjacentHTML(
      "beforebegin",
      `<div class="taskDiv">
    <input type="checkbox" id="input" name="" value="" />
    <span id="inputId"> ${tasks}</span>
    <button id = "delectBtn"><i class="fa-solid fa-trash"></i></button>
  </div>`
    );
  } else {
    taskContainer.hidden = true;
  }
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

delectbtn.addEventListener("click", () => {
  console.log("happy");
});
