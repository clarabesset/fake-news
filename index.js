"use strict";

var switchButton = document.querySelector(".switch-button");
var switchBtnRight = document.querySelector(".switch-button-case.right");
var switchBtnLeft = document.querySelector(".switch-button-case.left");
var activeSwitch = document.querySelector(".active");
var startGame = document.querySelector(".start");

function switchLeft() {
  switchBtnRight.classList.remove("active-case");
  switchBtnLeft.classList.add("active-case");
  activeSwitch.style.left = "0%";
}

function switchRight() {
  switchBtnRight.classList.add("active-case");
  switchBtnLeft.classList.remove("active-case");
  activeSwitch.style.left = "50%";
}

switchBtnLeft.addEventListener(
  "click",
  function() {
    switchLeft();
  },
  false
);

switchBtnRight.addEventListener(
  "click",
  function() {
    switchRight();
  },
  false
);

function startGameFr() {
  window.location = "./playgamefr.html";
}

function startGameEng() {
  window.location = "./playgame.html";
}

function gameVersion() {
  document.querySelector(".left").classList.contains("active-case")
    ? startGameFr()
    : startGameEng();
}

startGame.onclick = gameVersion;
