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
  let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
    ["h", 8],
    ["i", 9],
    ["j", 10],
    ["k", 11],
    ["l", 12],
    ["m", 13],
    ["n", 14],
    ["o", 15],
    ["p", 16],
    ["q", 17],
    ["r", 18],
    ["s", 19],
    ["t", 20],
    ["u", 21],
    ["v", 22],
    ["w", 23],
    ["x", 24],
    ["y", 25],
    ["z", 26],
    ["0", 27],
    ["1", 28],
    ["2", 29],
    ["3", 30],
    ["4", 31],
    ["5", 32],
    ["6", 33],
    ["7", 34],
    ["8", 35],
    ["9", 36],
  ]);
  let repPass = "";
  let char;
  let number;
  for (let i = 0; i < pass.length; i++) {
    char = map.get(pass[i]) % 6;
    number = char % 6 == 0 ? char / 6 : char / 6 + 1;
    repPass.concat(char);
    repPass.concat(number + " ");
  }
  return repPass;
}
/**
 * todo
 * use google drive to upload the data
 *
 */
