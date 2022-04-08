let allCards = document.querySelector(".allcards");
const imgss = [
    { front: "/images/acg.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/acg.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/ana.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/ana.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/apa.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/apa.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/goi.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/goi.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/gre.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/gre.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/gyn.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/gyn.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/gyn.png", back: "/images/parrot.svg", position: "naoSelecionada" },
    { front: "/images/gyn.png", back: "/images/parrot.svg", position: "naoSelecionada" },
]

let a;
let cont = 0;

// function to get the number of cards for the game
function numberCards() {
    a = Number(prompt("Com quantas cartas quer jogar? (Entre 4 e 14)"));
    while (a < 4 || a === NaN || a % 2 !== 0 || a > 14) {
        a = Number(prompt("coloca um número par entre 4 e 14, por favor."))
    }
}

function inicilizate() {
    numberCards();
    imgss.length = a;
    imgss.sort(comparador).front4
    allCards.innerHTML = " "
    for (let i = 0; i < a; i++) {
        allCards.innerHTML += `
            <div class="card" onclick="turnCard(this)">
                <div class="backcard" >
                    <img src="${imgss[i].back}" class="back-img">
                </div>
                <div class="frontcard none">
                    <img src="${imgss[i].front}" class="front-img">
                </div>
           </div>
           `
    }
}

function turnCard(element) {
    let back = element.childNodes[1];
    let front = element.childNodes[3];
    cont++;
    back.classList.add("none")
    front.classList.remove("none")
    element.classList.add("virada")
    element.onclick = " "
    condition()
}

function condition() {
    let comp = document.querySelectorAll(".virada .front-img")
    let cardSel = document.querySelectorAll(".virada")
    let backchose = document.querySelectorAll(".virada .backcard");
    let frontchose = document.querySelectorAll(".virada .frontcard");

    if (cardSel.length > 1) {
        if (comp[0].src == comp[1].src) {
            cardSel[0].classList.add("par-encontrado");
            cardSel[1].classList.add("par-encontrado");
            backchose[0].classList.remove("backcard")
            frontchose[0].classList.remove("frontcard")
            cardSel[0].classList.remove("virada")
            cardSel[1].classList.remove("virada")
        } else {
            setTimeout(time, 1500)
        }
    }
    if (document.querySelectorAll(".par-encontrado").length == a) {
        alert("ganhaste")
    }
}



function time() {
    let back = document.querySelectorAll(".backcard");
    let front = document.querySelectorAll(".frontcard");
    let cardSel = document.querySelectorAll(".virada")

    for (let i = 0; i < a; i++) {
            back[i].classList.remove("none")
            front[i].classList.add("none")
            cardSel[i].onclick = "turnCard(this)"
    }
}

function comparador() {
    return Math.random() - 0.5;
}

inicilizate();