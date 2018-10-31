const card = document.getElementsByClassName('card');
// card values: 
const values = [1, 1, 2, 2, 3, 3];

// scramble cards each page refresh

// assign values --- will later need to scramble values
for (let j=0; j<values.length; j++){
    card[j].value = values[j];
    console.log(card[j].value);
}

let flippedValues = []; // stores element values to compare for match
let currentScore = 0; // player's score is increased by each valid click 
let turnCounter = 0; //
let pairsMatched = 0; // KEEP track of number to reach for game to finish

// turn over cards with click (only if there are less than 2 turned)
    for (let i=0; i<card.length; i++){ 
        card[i].addEventListener('click', ()=> {
            if (!card[i].classList.contains('in-play') && !card[i].classList.contains('matched') && turnCounter < 2) {   
                
                card[i].classList.add('in-play'); // change class to 'in-play'
                removeClick(card[i], clickFunction) // removes clickability of same card...
                flippedValues.push(card[i]);
                    
                turnCounter += 1; 
                currentScore += 1; 
                // call function to updateScoreBoard (currentScore)
                updateScoreBoard(currentScore);
                     
                if (turnCounter === 2){
                    console.log('you have 2 cards flipped'); // check for match
                    // need to remove click for all other cards...
                    removeAllClicks (card, clickFunction)
                    setTimeout(flipBack, 1200, flippedValues[flippedValues.length-2], flippedValues[flippedValues.length-1]); // call function to revert card back (removing 'in-play' class)
                    if (flippedValues[flippedValues.length-2].value === flippedValues[flippedValues.length-1].value){
                        console.log("it's a match!");
                        newPair (flippedValues[flippedValues.length-2], flippedValues[flippedValues.length-1]);
                        resetCounter();
                    } else {
                        setTimeout(resetCounter, 1100);
                    }
                }    
            }  // END IF not 'in-play' or 'matched'
        
        }) // END callback for click

    } // END for loop

// CALLBACK FUNCTIONS: 

function resetCounter(){
    turnCounter = 0;
}

function newPair (card1, card2){
    card1.classList.add('matched');
    card2.classList.add('matched');
    card1.classList.remove('active');
    card2.classList.remove('active');
}

// takes the card that is overturned and flips back with delay of 2s
// setTimeout(flipCardBack, 3000); timeout was not working... come back

var flipBack = function revertToOriginal (card1, card2){
    console.log('card flipped back');
    card1.classList.remove('in-play');
    card2.classList.remove('in-play');
    console.log('You have flipped ' + currentScore + ' cards')
}
 
function updateScoreBoard (currentScore){
    document.getElementById('score').innerText = currentScore;
}

function removeClick (cardInplay, fn) {
    cardInplay.removeEventListener('click', fn);
}

function removeAllClicks (allCards, fn) {
    for (let i=0; i<allCards.length; i++){
        allCards[i].removeEventListener('click', fn)
    }
}

function clickFunction () {
    card[i].classList.add('in-play');
    flippedValues.push(card[i]);               
    turnCounter += 1; 
    currentScore += 1; 
    updateScoreBoard(currentScore);
}