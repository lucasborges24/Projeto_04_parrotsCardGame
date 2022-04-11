
// Global Variables
const teams = [
    "acg", "ana", "apa", "goi", "gre", "gyn", "vil"
];
const MIN_CARD = 4;
const MAX_CARD = 14

let numCards;
let numRound = 0;

let deck = [];
let round = [];
let display = [];

// start game
numberCards();
createCards();
shufffffle();
addCards();

// function to get the number of cards for the game
function numberCards() {
    numCards = Number(prompt(`Com quantas cartas quer jogar? (Entre ${MIN_CARD} e ${MAX_CARD})`));
    while (numCards < MIN_CARD || numCards === NaN || numCards % 2 !== 0 || numCards > MAX_CARD) {
        numCards = Number(prompt(`coloca um número par entre ${MIN_CARD} e ${MAX_CARD}, por favor.`))
    }
}


// build the html card
function buildCard(i_team) {
    const team = teams[i_team]; // team -> i-th element of team's array
    const teamcard = `
    <main class="card" onclick="setCard(this)">
        <div class="face backcard" >
        <img src="images/parrot.svg"/>
        </div>
         <div class="face frontcard none">
         <img src="images/${team}.png" alt="${team}">
        </div>
    </main>
    `
    return teamcard; // return the html content for i_team index 
}


// create the cards with the buildCard function
function createCards() {
    for (let i = 0; i < numCards / 2; i++) { // added two cards to deck array. Each content is given by return of i-th teamcard
        deck.push(buildCard(i));
        deck.push(buildCard(i));
    }
}

// shuffle elements of the deck
function shufffffle() {
    return deck.sort(comparador);
}
function comparador() {
    return Math.random() - 0.5;
}

// adding the cards in the game
function addCards() {
    const container = document.querySelector(".allcards")
    for (let i = 0; i < deck.length; i++) {
        container.innerHTML += deck[i]
    }
}


//  game logic 

function setCard(element) {
    const selected = element.classList.contains("selected") // Does the card have the Selected Class?
    const finished = element.classList.contains("finished") // Does the card have the Finished Class?
    let back = element.childNodes[1]; // img element parrot
    let front = element.childNodes[3]; // img element team


    if (finished == false || selected == false) { // only executes if the card doesn't have selected, finished class
        element.classList.add("selected"); // add selected class into the card
        element.onclick = " " // remove the card button 
        back.classList.add("none") // parrot: display off
        front.classList.remove("none") // team: display on

        round.push(element); // add the card to an array
        display.push(element) // array to on/off display

        if(round.length === 2) { // are there two cards clicked? 
            if (round[0].childNodes[3].childNodes[1].src === round[1].childNodes[3].childNodes[1].src) { // if card 1 = card 2
                round[0].classList.add("finished"); // add finished class into the card 1
                round[1].classList.add("finished"); // add finished class into the card 2
                setTimeout(checkGame, 500); // function to check if the game has finished (time to the function be executed after the last card has been turned)
            } else { // if card 1 is not equal to card 2
                setTimeout(TurnCards, 750); // function to put the cards back into the game
            }
        }
    }

    numRound++; // index to count the total clicks
}

function checkGame() {
    const turnedCards = document.querySelectorAll(".finished").length; // how many cards does the finished class have?
    if (numCards === turnedCards) { //  number of the cards in the game is equal to the number of cards with finished class? 
        alert(`Você ganhou! Finalizou o jogo em ${numRound} jogadas.`) // final alert!
    }
    round = []; // vanish the round array (to put new two cards)
    display = []; // vanish the display array (to put new two cards)
}

function TurnCards() { // function to put the cards back into the game: only occurs if card 1 !== card 2
    round[0].classList.remove("selected"); // remove selected class of card 1
    round[1].classList.remove("selected"); // remove selected class of card 2
    for (let i = 0; i < 2; i++) { // loop for: display off in the team; display on in the parrot; back onclick attribute to the cards 
        display[i].childNodes[1].classList.remove("none")
        display[i].childNodes[3].classList.add("none")
        display[i].setAttribute('onclick', 'setCard(this)')
    }
    round = []; // vanish the round array (to put new two cards)
    display = []; // vanish the display array (to put new two cards)
}
