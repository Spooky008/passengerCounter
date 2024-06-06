let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")



function increment(){
     count += 1
     countEl.innerText = count
     
 }

function save(){
    dash = count + " - "
    saveEl.innerHTML += dash
    countEl.innerText = 0
    count = 0
}

// let name = "Aliyu"
// let greeting = "hi there"

// let myGreeting = greeting + " " + name
// console.log(myGreeting)