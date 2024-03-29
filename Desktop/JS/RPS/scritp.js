const computerChoiceDisplay = document.getElementById('Computer-choice');
const userchoice = document.getElementById('user-choice');
const resultdisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userclick
let computerChoice
let result
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userclick = e.target.id
    userchoice.innerHTML = userclick
    generateRandomchoice()
    getresult()
}))
function generateRandomchoice() {
    const randomnumber = Math.floor(Math.random() * possibleChoice.length +1);
    if  (randomnumber === 1) {
        computerChoice = 'Rock'
    }
    if  (randomnumber === 2) {
        computerChoice = 'Paper'
    }
    if  (randomnumber === 3) {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}
function getresult() {
    if (computerChoice === userclick){
        result = 'its a draw'
    }
    if (computerChoice === 'Rock' && userclick ==='Paper'){
        result = 'You Win !'
    }
    if (computerChoice === 'Paper' && userclick === 'Scissors'){
        result = 'You Win !'
    }
    if (computerChoice ==='Scissors' && userclick ==='Rock'){
        result = 'You Win !'
    }
    if (computerChoice === 'Rock' && userclick ==='Scissors'){
        result = 'You Lost !'
    }
    if (computerChoice === 'Paper' && userclick === 'Rock'){
        result = 'You Lost !'
    }
    if (computerChoice ==='Scissors' && userclick ==='Paper'){
        result = 'You Lost !'
    }
    resultdisplay.innerHTML = result
}
