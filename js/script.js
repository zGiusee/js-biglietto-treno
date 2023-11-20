// PROMPT COMMANDS

let eta = prompt("Inserisci la tua età.")

let km = prompt("inserisci la quantità di km che vuoi percorrere.")
km = km * 0.21;

let sconto;
let ticketPrice = km;

if(eta > "65"){
    sconto = ticketPrice * 40 / 100;
    ticketPrice = km - sconto;
}
else{
    ticketPrice = ticketPrice;
}


if(eta < "18"){
    sconto = ticketPrice * 20 / 100;
    ticketPrice = km - sconto;
}
else{
    ticketPrice = ticketPrice;
}



console.log(km)
console.log(eta)
console.log(ticketPrice)
console.log(Sconto)