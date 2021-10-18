"use strict";

let select = document.querySelector("select");
let inp = document.getElementById("inpText");
let saveBut = document.getElementById("save");

select.addEventListener("change", (event) => {
  if (event.target) inp.value = event.target.value;
});

saveBut.addEventListener("click", () => {
  if (inp.value === "") {
    inp.style.border = "1px solid red";
  } else {
    let options = document.getElementsByTagName("option");
    for (let opt of options) {
      if (select.value == opt.value) {
        opt.value = inp.value;
        opt.innerHTML = inp.value;
        inp.value = "";
      }
    }
  }
});

inp.addEventListener("input", () => {
  inp.style.border = "1px solid rgb(177, 176, 176)";
});
