/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/*
Creo un array con 5 rnd da 1 a 100
Al click del bottone:
    faccio partire il timer di 30s
    stampo in pagina il countdown del timer
    stampo in pagina l'array con i rnd

    Finiti i 30s:
        ciclo for per prendere in input i 5 numeri
        ciclo for con if per memorizzare in altro array i numeri in comune tra l'input e l'arrayRnd
        stampo in pagina il result
*/

// Dati
let rndNumbers = [];
const startBtn = document.querySelector("button");
const numbersOutput = document.querySelector("h2");
let timer = 30;
let timerDisplay = document.getElementById("timer");

// Al click del bottone
startBtn.addEventListener("click", function() {
    // Pulisco i campi
    let rndNumbers = [];

    // Genero un array con 5 numeri rnd unici tra loro
    while (rndNumbers.length < 6) {

        let rndNum = getRndInteger(1,100);

        if (!rndNumbers.includes(rndNum)) {
            rndNumbers.push(rndNum);
            numbersOutput.innerHTML = ` ${rndNumbers} `;
        } 
            
    }

    // Faccio partire il timer
    startTimer();

});



/**
 * Funzione per generare un numero random
 * @param {num} min
 * @param {num} max
 * @returns {num} rndNum
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function startTimer () {
    if (timer > 0) {
    setInterval(function() {
        timerDisplay.innerHTML = timer;
        timer--;
    }, 1000)
    } else {
        clearInterval(startTimer);
    }
}


