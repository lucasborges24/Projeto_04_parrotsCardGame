let img = document.querySelectorAll(".cardimg")
let arrayCard = [];
let a;

// function to get the number of cards for the game
function numberCards() {
    a = Number(prompt("Com quantas cartas quer jogar? (Entre 4 e 14)"));
    while ( a < 4 || a === NaN || a % 2 !== 0 || a > 14) {
        a = Number(prompt("coloca um número par entre 4 e 14, por favor."))
    }
}

function test() {
    numberCards();

    const imgs = ["/images/acg.png", "/images/acg.png", "/images/ana.png", "/images/ana.png", "/images/apa.png", "/images/apa.png", "/images/goi.png", "/images/goi.png", "/images/gre.png", "/images/gre.png", "/images/gyn.png", "/images/gyn.png", "/images/vil.png", "/images/vil.png"]

    imgs.length = a;
    imgs.sort(comparador)
    console.log(imgs)
    let allCards = document.querySelector(".allcards");
    allCards.innerHTML = " "
    for(let i = 0; i < imgs.length; i++) {
        allCards.innerHTML += `
        <div class="card">
           <img src="${imgs[i]}">
       </div>
        `
    }
}

function comparador() {
    return Math.random() - 0.5;
}