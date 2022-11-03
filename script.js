"use strict";

let gameRules = document.querySelector(".btn--rule");
let modal = document.querySelector(".help");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close-help");

//game rules functions
gameRules.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
// close
close.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
