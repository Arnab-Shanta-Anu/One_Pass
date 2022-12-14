const electron = require("electron");
const path = require("path");

const btn = document.getElementById("btn");
const p1 = document.getElementById("pass");
const target = document.getElementById("target");

btn.addEventListener("click", function (event) {
  target.innerHTML = scramble(p1.value.toLowerCase());
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
  const map = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let repPass = "";
  let char;
  let number;
  for (let i = 0; i < pass.length; i++) {
    let charNo = map.indexOf(pass[i]);
    let j = i;
    if (i > 5) {
      j = i % 6;
    }
    char = charNo % 6;
    number = parseInt(charNo / 6) + 1;
    char += 6 * j;
    char = map[char];
    repPass = repPass.concat(char);
    repPass = repPass.concat(number, " ");
  }
  return repPass.toUpperCase();
}
/**
 * todo
 * use google drive to upload the data
 *
 */
