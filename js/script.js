// RICHIEDO LE INFORMAZINI NEL PROMPT
let eta = prompt("Inserisci la tua età.")

let km = prompt("inserisci la quantità di km che vuoi percorrere.")
km = km * 0.21;

// DEFINISCO LE VARIABILI
let sconto;
let ticketFullPrice = km;
let message;

// ESEGUO I CALCOLI
if(eta >= 65){
    sconto = ticketFullPrice * 40 / 100;
    ticketFullPrice = km - sconto;
    // ARROTONDO IL PREZZO FINALE
    ticketFullPrice = ticketFullPrice.toFixed(0);
    // AGGIUNGO UN MESSAGGIO DI AVVISO
    message = "Complimenti rientri nella categoria degli Over.65 e questo ti garantisce uno sconto del 40%! Il tuo prezzo finale sarà:"
}
else if(eta < 18){
    sconto = ticketFullPrice * 20 / 100;
    ticketFullPrice = km - sconto;
    // ARROTONDO IL PREZZO FINALE
    ticketFullPrice = ticketFullPrice.toFixed(0);
    // AGGIUNGO UN MESSAGGIO DI AVVISO
    message = "Complimenti rientri nella categoria Under.18 e questo ti garantisce uno sconto del 20%! Il tuo prezzo finale sarà:"

}
else{
    // ARROTONDO IL PREZZO FINALE
    ticketFullPrice = ticketFullPrice.toFixed(0);
    // AGGIUNGO UN MESSAGGIO DI AVVISO
    message = "Ecco il tuo prezzo finale."
}

// INDICO IL RISULTATO NEL FILE HTML

document.getElementById(`ticketprice`).innerHTML= ticketFullPrice;
document.getElementById(`avvisosconto`).innerHTML= message;

