const electron = require("electron")
const path = require("path")

const btn = document.getElementById("btn")
const p1 = document.getElementById("pass1")
const p2 = document.getElementById("pass2")
const target = document.getElementById("target")

btn.addEventListener('click', function(event) {
    target.innerHTML = p1.value
    target.innerHTML = target.innerHTML+ " " + p2.value;

    if(p1.value === p2.value){
        target.innerHTML = "Success"
    }
    else{
        target.innerHTML = "Faliure"
    }
})