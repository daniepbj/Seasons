let textFadeIn = document.getElementById("textFadeIn");
let textFadeUp = document.getElementById("textFadeUp");
let textDance = document.getElementById("textDance");
let textHeatUp = document.getElementById("textHeatUp");
let textColors1 = document.getElementById("textColors1");
let textColors2 = document.getElementById("textColors2");
let textColors3 = document.getElementById("textColors3");
let textColors4 = document.getElementById("textColors4");
let textColors5 = document.getElementById("textColors5");
let textColors6 = document.getElementById("textColors6");
let textColors7 = document.getElementById("textColors7");
let textColors = document.getElementsByClassName("textColors")[0];
let bird = document.getElementById("bird");

setTimeout(function () {
  textFadeIn.remove();
  textFadeUp.remove();
}, 13000);

setTimeout(function () {
  textDance.innerHTML =
    "♪ And I must dance, and I must sing.To see the beauty of the spring ♪";
}, 13000);

setTimeout(function () {
  textDance.remove();
}, 26000);

setTimeout(function () {
  textHeatUp.innerHTML =
    "The earth is warm, the sun's ablaze, It is a time of carefree days. And bees abuzz that chance to. ";
}, 26000);

setTimeout(function () {
  textColors1.innerHTML = "May see me snoozing in the grass. ";
}, 26000);

setTimeout(function () {
  textColors2.innerHTML = "The leaves are ";
}, 26000);

setTimeout(function () {
  textColors3.innerHTML = "yellow, ";
}, 26000);

setTimeout(function () {
  textColors4.innerHTML = "red, ";
}, 26000);

setTimeout(function () {
  textColors5.innerHTML = "and ";
}, 26000);

setTimeout(function () {
  textColors6.innerHTML = "brown. ";
}, 26000);

setTimeout(function () {
  textColors7.innerHTML = "A shower sprinkle softly down.";
}, 26000);

setTimeout(function () {
  textHeatUp.remove();
}, 39000);

setTimeout(function () {
  textColors.remove();
}, 39000);

setTimeout(function () {
  bird.remove();
}, 25500);
