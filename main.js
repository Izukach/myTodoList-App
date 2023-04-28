let addTask = document.querySelector(".addTaskBtn");
let tasks = document.getElementById("inputId");
let taskContainer = document.querySelector(".tasksContainer");
let timer = document.getElementById("numTask");
let dateAndTime = document.getElementById("date");
let delectbtn = document.getElementById("delectBtn");

let count = 0;

addTask.addEventListener("click", () => {
  let request = prompt("Add Tasks");
  if (
    request === null ||
    request === undefined ||
    request === "" ||
    Number(request)
  ) {
    return;
  }

  if (request !== "") {
    tasks = request;
    taskContainer.insertAdjacentHTML(
      "beforebegin",
      `<div class="taskDiv">
    <input type="checkbox" id="input" name="" value="" />
    <span id="inputId"> ${tasks}</span>
    <button  id = "delectBtn" onClick = "delectCard(${count})"><i class="fa-solid fa-trash"></i></button>
  </div>`
    );

    count++;
  } else {
    taskContainer.hidden = true;
  }

  timer.innerHTML = count;
});

const myDate = () => {
  const today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + " -" + today.getFullYear();
  dateAndTime.innerHTML = date;
};

myDate();

const delectCard = (value) => {
  let card = document.querySelectorAll(".taskDiv");
  card.forEach((element, id) => {
    if (value == id) {
      element.remove();
      count--;
      timer.innerHTML = count;
    }
  });
};
