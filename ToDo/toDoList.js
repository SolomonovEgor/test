"use strict";

const input = document.querySelector("#taskText");
const addButton = document.querySelector(".addTask");
const tasksList = document.querySelector("#tasks ul");
const closeAllButton = document.querySelector(".closeAllBut");
const selectList = document.getElementsByClassName("select")[0];

addButton.addEventListener("click", () => {
  if (input.value !== "") {
    let newTask = document.createElement("li");
    let closeBut = document.createElement("button");

    newTask.classList.add("tasks", "inProcess");
    newTask.innerHTML = input.value;
    closeBut.className = "closeBut";
    closeBut.innerHTML = "x";

    newTask.addEventListener("click", function () {
      this.classList.toggle("done");
      this.classList.toggle("inProcess");
    });

    closeBut.addEventListener("click", function () {
      this.parentElement.remove();
      if (!tasksList.firstElementChild) closeAllButton.style.display = "none";
    });

    input.value = "";

    newTask.append(closeBut);
    tasksList.append(newTask);

    closeAllButton.style.display = "block";
  }
});

closeAllButton.addEventListener("click", () => {
  tasksList.innerHTML = "";
  if (tasksList.innerHTML === "") closeAllButton.style.display = "none";
});

selectList.addEventListener("change", function () {
  for (let li of tasksList.children) {
    if (selectList.value === "In process") {
      if (li.classList.contains("inProcess")) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    } else if (selectList.value === "Done") {
      if (li.classList.contains("done")) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    } else {
      li.style.display = "block";
    }
  }
});
