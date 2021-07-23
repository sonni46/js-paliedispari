// Palidroma
// Chiedere all’utente di inserire una parola
let utente = prompt("scrivi un parola");

console.log(palindromo(utente))

// Creare una funzione per capire se la parola inserita è palindroma

function palindromo(parola) {
    parolaRevers = parola.split("").reverse().join("");
    if (parolaRevers == parola) {
        return " e palindromo";
    }
    return " non e palindromo";
}



