/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
var CaptureItens = document.querySelectorAll(".Item");
var TeamContainer = document.querySelector("#TeamContainer");
var container = document.querySelector("#container");
var Teambtn = document.querySelector("#Teambtn");
var TeamClose = document.querySelector("#closeTeamContainer");
CaptureItens.forEach(function (elem) {
  elem.addEventListener('mouseover', function () {
    elem.classList.add('hoverItem');
  });
  elem.addEventListener('mouseleave', function () {
    setTimeout(function () {
      elem.classList.remove('hoverItem');
    }, 500);
  });
});
Teambtn.addEventListener("click", function () {
  container.classList.add('blur');
  TeamContainer.classList.add('On');
});
TeamClose.addEventListener("click", function () {
  container.classList.remove('blur');
  TeamContainer.classList.remove('On');
});

/* 

    Senha Netlify: Net1981FyEryk

*/
/******/ })()
;
//# sourceMappingURL=main.js.map