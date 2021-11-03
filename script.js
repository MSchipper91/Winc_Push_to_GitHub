const navbarBtn = document.querySelector(".dropdown .btn");

const backgroundColorHome = document.querySelector(".dropdown .navbar .home");
const backgroundColorGreen = document.querySelector(".dropdown .navbar .green");
const backgroundColorRed = document.querySelector(".dropdown .navbar .red");
const backgroundColorPurple = document.querySelector(".dropdown .navbar .purple")
const backgroundColorBlue = document.querySelector(".dropdown .navbar .blue")
const backgroundColorYellow = document.querySelector(".dropdown .navbar .yellow")

function openNavbar() {
    const showNavbar = document.querySelector(".dropdown .navbar");
    showNavbar.classList.toggle("hide");
  }

navbarBtn.addEventListener("click", openNavbar);


backgroundColorHome.addEventListener("click", () => {
  resetBackground();
  openNavbar();
});

function changeBackgroundColorGreen() {
  document.body.classList.toggle("background-green")
}

backgroundColorGreen.addEventListener("click", () => {
  resetBackground();
  changeBackgroundColorGreen();
  openNavbar();
});

function changeBackgroundColorRed() {
  document.body.classList.toggle("background-red");
}

backgroundColorRed.addEventListener("click", () => {
  resetBackground();
  changeBackgroundColorRed();
  openNavbar();
});

function changeBackgroundColorPurple() {
  document.body.classList.toggle("background-purple");
}

backgroundColorPurple.addEventListener("click", () => {
  resetBackground();
  changeBackgroundColorPurple();
  openNavbar();
});

function changeBackgroundColorBlue() {
  document.body.classList.toggle("background-blue");
}

backgroundColorBlue.addEventListener("click", () => {
  resetBackground();
  changeBackgroundColorBlue();
  openNavbar();
});

function changeBackgroundColorYellow() {
  document.body.classList.toggle("background-yellow");
}

backgroundColorYellow.addEventListener("click", () => {
  resetBackground();
  changeBackgroundColorYellow();
  openNavbar();
});

function resetBackground() {
  document.body.className="background-home";
}