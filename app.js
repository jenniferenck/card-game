const card = document.getElementsByClassName('card');

const values = [1, 1, 2, 2];


// assign values --- will later need to scramble values
for (let j=0; j<values.length; j++){
    card[j].value = values[j];
    console.log(card[j].value);
}

let numFlips = 0;

// turn over cards with click (only if there are less than 2 turned)
for (let i=0; i<card.length; i++){ 
    card[i].addEventListener('click', ()=> {
        if (!card[i].classList.contains('in-play') && !card[i].classList.contains('matched') && document.getElementsByClassName('in-play').length < 2) {
            card[i].classList.add('in-play');
            let flippedCard = card[i]
            console.log(flippedCard);
            // call function to revert card back (removing 'in-play' class)
            revertToOriginal(flippedCard);
        }
        numFlips ++; 
        // console.log(numFlips);  
        // if values are equal set class to 'matched'      
    })
}

// takes the card that is overturned and flips back with delay of 2s
// setTimeout(flipCardBack, 3000); timeout was not working... come back

function revertToOriginal (cardValue){
    console.log('it worked');
    console.log(cardValue);
    cardValue.classList.remove('in-play');
}
 
if (document.getElementsByClassName('in-play').length === 2){

}

function assignMatch (){
    card[i]
}
           


// document.getElementsByClassName('in-play').length < 2

//var displayCard = function ();