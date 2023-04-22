let addTask = document.querySelector(".addTaskBtn");
let tasks = document.getElementById("inputId");
let taskContainer = document.querySelector(".tasksContainer");
let timer = document.getElementById("numTask");
let dateAndTime = document.getElementById("date");
let delectbtn = document.getElementById("delectBtn");

let count = 0;

id = [0];

addTask.addEventListener("click", () => {
  let request = prompt("Add Tasks");
  if (request === null || request === undefined) {
    return;
  } else if (Number(request) || Symbol(request)) {
    let rat = prompt("insert letter");
    request = rat;
  }

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
    <button  id = "delectBtn" onClick = "delectCard(value)" "value = ${id[0]}"><i class="fa-solid fa-trash"></i></button>
  </div>`
    );
  } else {
    taskContainer.hidden = true;
  }
  id[0] = +(
    // gg
    count++
  );

  timer.innerHTML = count;

  console.log(id);
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
      count--;
      timer.innerHTML = count;
      element.remove();
    }
  });
};
