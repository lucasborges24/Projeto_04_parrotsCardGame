// GLOBAL VARIABLES

const teams = [
    "acg", "ana", "apa", "goi", "gre", "gyn", "vil"
];



// function to get the number of cards for the game
function numberCards() {
    a = Number(prompt("Com quantas cartas quer jogar? (Entre 4 e 14)"));
    while (a < 4 || a === NaN || a % 2 !== 0 || a > 14) {
        a = Number(prompt("coloca um número par entre 4 e 14, por favor."))
    }
}



function comparador() {
    return Math.random() - 0.5;
}
