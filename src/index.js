const electron = require("electron");
const path = require("path");

const btn = document.getElementById("btn");
const p1 = document.getElementById("pass1");
const p2 = document.getElementById("pass2");
const target = document.getElementById("target");

btn.addEventListener("click", function (event) {
  target.innerHTML = scramble(p1.value);
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
    char = map.indexOf(pass[i]) % 6;
    console.log(char);
    char = map[char];
    console.log(char);

    // number = char % 6 === 0 ? char / 6 : char / 6 + 1;
    repPass += char + " ";
    // repPass.concat(number + " ");
  }
  return repPass;
}
/**
 * todo
 * use google drive to upload the data
 *
 */
