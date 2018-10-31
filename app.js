const card = document.getElementsByClassName('card');

const values = [1, 1, 2, 2, 3, 3];


// assign values --- will later need to scramble values
for (let j=0; j<values.length; j++){
    card[j].value = values[j];
    console.log(card[j].value);
}

let flippedValues = [];
let scoreCount = 0;
let turnCounter = 0;
let pairsMatched = 0; // KEEP track of number to reach for game to finish

// turn over cards with click (only if there are less than 2 turned)

    for (let i=0; i<card.length; i++){ 
        card[i].addEventListener('click', ()=> {
            if (!card[i].classList.contains('in-play') && !card[i].classList.contains('matched') && turnCounter < 2) {
                    
                card[i].classList.add('in-play'); // change class to 'in-play'
                flippedValues.push(card[i]);
                    
                revertToOriginal(card[i]); // call function to revert card back (removing 'in-play' class)
                     
                if (turnCounter === 2){
                    console.log('you have 2 cards flipped'); // check for match
                    if (flippedValues[flippedValues.length-2].value === flippedValues[flippedValues.length-1].value){
                        console.log("it's a match!");
                        newPair (flippedValues[flippedValues.length-2], flippedValues[flippedValues.length-1]);
                    }
                    turnCounter = 0; // resets turnCounter;
                }    
            }  // END IF not 'in-play' or 'matched'
        
        }) // END callback for click

    } // END for loop

function newPair (card1, card2){
    card1.classList.add('matched');
    card2.classList.add('matched');
    card1.classList.remove('active');
    card2.classList.remove('active');
}


// if there are 2 'in-play' cards ... STOPPED HERE - need to move to when you hit 2 cards...
// takes the card that is overturned and flips back with delay of 2s
// setTimeout(flipCardBack, 3000); timeout was not working... come back

function revertToOriginal (cardEl){
    console.log('card flipped back');
    cardEl.classList.remove('in-play');
    turnCounter += 1; 
    scoreCount += 1;
    console.log('You have flipped ' + scoreCount + ' cards')
}
 
if (document.getElementsByClassName('in-play').length === 2){

}

function assignMatch (){
    card[i]
}
           


// document.getElementsByClassName('in-play').length < 2

//var displayCard = function ();