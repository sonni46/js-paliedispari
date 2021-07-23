// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let utente = prompt("pari o dispari ?");
let pc = rdmNunber(1,5);
do {
    var numeroUtente = parseInt(prompt("inserisci numero"));
    if((numeroUtente >= 6) || (numeroUtente < 1)){
        alert("errore")
    }
}while(isNaN(numeroUtente) || (numeroUtente >= 6) || (numeroUtente < 1));

// Sommiamo i due numeri

let somma = som(numeroUtente,pc);
console.log(numeroUtente);
console.log(pc);
console.log(somma);
console.log(pariDispari(somma));


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function rdmNunber (min, max) {
    return Math.floor(Math.random() * max) + min;
}

function som(n1,n2) {
    return n1 + n2;
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

function pariDispari (num) {
    if (num %2==0){
        return "ha vinto il pari"
    }
    else 
    {
        return "ha vinto il dispari"
    }
}


