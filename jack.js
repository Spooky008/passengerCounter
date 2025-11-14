let player = {
    name: "Aliyu",
    chips: 200
}
let sum = 0
cards = []
let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card")
let playerEl = document.getElementById("player")
playerEl.textContent = player.name + ": $" + player.chips

function randomCard(){
    randommm = Math.floor(Math.random() * 13)+ 1
    if(randommm > 10){
        return 10
    } else if(randommm === 1){
        return 11
    } else{
        return randommm
    }
}

function rendergame(){
    if (sum <= 20){
    message="Do you want to draw a new card"
    } else if(sum === 21){
        message="Black Jack!!! You just won a thousand dollars"
        hasBlackJack = true
        player.chips += 1000
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message="You suck"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function startgame(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function newcard(){
    if(isAlive === true && hasBlackJack === false){
        let newcard = randomCard()
        sum += newcard
        cards.push(newcard)
        rendergame()
    }
    
}

// let airbnb = {
//     name : "galway castle",
//     location : "norway",
//     available : true,
//     price : 190,
//     ammenities : ["gym","pool","restaurant"]
// } 

// airbnb.ammenities
// airbnb.location

// likesDocumentaries = true
// likesStartups = true

// if (likesDocumentaries === true || likesStartups === true){
//     recommend()
// }

// function recommend(){
//     console.log("hey, check out this movie here!!!")
// }
 
// let player1Time = 102
// let player2Time = 107

// // cmd+d - ctrl+d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// function totalRaceTime(){
//     return player1Time + player2Time
// }

// RaceTime = totalRaceTime()
// console.log(RaceTime)
// let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// for(let i = 0; i < sentence.length; i++){
    
//     greetingEl.textContent += sentence[i] + " "
// }



// let age = 100

// if(age < 100){
//     console.log("Not eligible")
// } else if( age === 100){
//     console.log("Here's your birthday card you old geezy")
// } else{
//     console.log("Not eligible you old cunt")
// }

// me = ["Aliyu",20,true]

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// messages.push("Same here!")

// console.log(messages)