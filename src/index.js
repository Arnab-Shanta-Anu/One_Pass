const electron = require("electron");
const path = require("path");

const btn = document.getElementById("btn");
const p1 = document.getElementById("pass1");
const p2 = document.getElementById("pass2");
const target = document.getElementById("target");

btn.addEventListener("click", function (event) {
  target.innerHTML = String(scramble(p1).value);
});
/**
 *
 * a b c d e f
 * g h i j k l
 * m n o p q r
 * s t u v w x
 * y z 0 1 2 3
 * 4 5 6 7 8 9
 *
 * **/
function scramble(pass) {
  for (let i = 0; i < pass.length(); i++) {}
  return pass;
}
