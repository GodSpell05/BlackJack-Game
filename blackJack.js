let player = {
    name: "Amresh",
    chips: 0
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13) + 1

    if(randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }

};

function startGame(){
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,  secondCard]
    sum =  firstCard + secondCard

    renderGame()
};

function renderGame(){
    cardsEl.textContent = "Cards: "

    for( let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    };

    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
        message = 'Do you want to draw a new card? '
        hasBlackJack = true
    } else if (sum === 21){
        message = "Congrats, You've got BlackJack! "
        player.chips += 500 
        hasBlackJack = true
    } else {
        message = "You're out of the game "
        isAlive = false
    }
    messageEl.textContent = message

};

function newCard(){

    if(isAlive === true  ){  
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        console.log(card)
    }

};

function resetGame(){
    cards = []
    sum = 0
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " 
    player.chips = 0
    messageEl.textContent = 'Want to play a round?'
}

