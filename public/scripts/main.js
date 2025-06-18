/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
var CaptureItens = document.querySelectorAll(".Item");
var TeamContainer = document.querySelector("#TeamContainer");
var container = document.querySelector("#container");
var Teambtn = document.querySelector("#Teambtn");
TeamContainer.ariaDisabled = true;
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
if (TeamContainer.className === 'On') {
  document.addEventListener('click', function (cl) {
    if (cl.className != 'On') {
      alert('dfsfs');
    }
  });
}
/******/ })()
;
//# sourceMappingURL=main.js.map