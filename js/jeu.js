const cardsArray = [{
    "name": "pomme",
    "img": "assets/memory-legume/1.svg"
},
{
    "name": "banane",
    "img": "assets/memory-legume/2.svg"
},
{
    "name": "chou",
    "img": "assets/memory-legume/3.svg"
},
{
    "name": "cerise",
    "img": "assets/memory-legume/4.svg"
},
{
    "name": "piment",
    "img": "assets/memory-legume/5.svg"
},
{
    "name": "fraise",
    "img": "assets/memory-legume/6.svg"
}];

let nbPaires = cardsArray.length;

let gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
});

let nbPairesTrouvees = 0;
let nbCoups = 0;
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1500;

let game = document.getElementById('game');
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
    let name = item.name,
        img = item.img;


    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    let front = document.createElement('div');
    front.classList.add('front');

    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

let match = function match() {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.add('match');
    });
    nbPairesTrouvees++;
    if (nbPaires === nbPairesTrouvees) {
        alert('Bravo !');
    }
};

let resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.remove('selected');
    });
};

grid.addEventListener('click', function (event) {

    let clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked.classList.contains('card') || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
            }
            setTimeout(resetGuesses, delay);
            nbCoups++;
        }
        previousTarget = clicked;
        document.getElementById("nbCoups").innerText = nbCoups;
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === ' ' && nbPaires === nbPairesTrouvees) {
        this.location.reload();
    }
})