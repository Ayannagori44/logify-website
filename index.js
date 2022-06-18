"use strict";

const icon = document.querySelector("#menu");
const times = document.querySelector(".times");

icon.addEventListener("click", function () {
  document.querySelector(".nav-right").classList.toggle("active");
  document.querySelector(".line-1").classList.toggle("active");
  document.querySelector(".line-2").classList.toggle("active");
  document.querySelector(".line-3").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
});
times.addEventListener("click", function () {
  document.querySelector(".nav-right").classList.toggle("active");
  document.querySelector(".line-1").classList.toggle("active");
  document.querySelector(".line-2").classList.toggle("active");
  document.querySelector(".line-3").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
});
