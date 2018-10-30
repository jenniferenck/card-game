const card = document.getElementsByClassName('card');

const values = [1, 1, 2, 2];


// assign values --- will later need to scramble values
for (let j=0; j<values.length; j++){
    card[j].value = values[j];
    console.log(card[j].value);
}

for (let i=0; i<card.length; i++){ 
    card[i].addEventListener('click', ()=> {
        if (!card[i].classList.contains('in-play') && !card[i].classList.contains('matched') && document.getElementsByClassName('in-play').length < 2) {
            card[i].classList.add('in-play');
        }        
    })
}

if (document.getElementsByClassName('in-play').length === 2){

}

function assignMatch (){
    card[i]
}
           


// document.getElementsByClassName('in-play').length < 2

//var displayCard = function ();