const posiTive = document.getElementById("posiTive");
const negaTive = document.getElementById("negaTive");

function btnColor(e) {
  posiTive.style.backgroundColor = "transparent";
  negaTive.style.backgroundColor = "#23464e";
}
function btnColorSwap(e) {
  posiTive.style.backgroundColor = "#23464e";
  negaTive.style.backgroundColor = "transparent";
}

negaTive.addEventListener("click", btnColor);

posiTive.addEventListener("click", btnColorSwap);

// asd

const posiTive1 = document.getElementById("posiTive1");
const negaTive1 = document.getElementById("negaTive1");

function btnColor1(e) {
  posiTive1.style.backgroundColor = "transparent";
  negaTive1.style.backgroundColor = "#23464e";
}
function btnColorSwap1(e) {
  posiTive1.style.backgroundColor = "#23464e";
  negaTive1.style.backgroundColor = "transparent";
}

negaTive1.addEventListener("click", btnColor1);

posiTive1.addEventListener("click", btnColorSwap1);

// drawer

function showSidebar() {
  const sidebar = document.querySelector(".sideBar");
  sidebar.style.display = "block";
}

function closeSidebar() {
  const closesidebar = document.querySelector(".sideBar");
  closesidebar.style.display = "none";
}

// custom buttons

const custonBTN = document
  .querySelector(".custom-button")
  .addEventListener("click", openBTN);

const customNrm = document.querySelector(".custom-button");
function openBTN() {
  document.querySelector(".custom-button").innerText = "clicked";
}
