// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// --------------------------------------------------------------
// FUNZIONI

// NOTE: GENERA NUMERO CASUALE
function numeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// NOTE: CONTROLLA SE NUMERO E' PRESENTE IN ARRAY
function eInArray(array, elemento) {
  var trovato = false;

  for (var i = 0; i < array.length; i++) {
    if (elemento == array[i]) {
      trovato = true;
      return trovato;
    }
  }
  return trovato;
}

// NOTE: /FUNZIONI
// ----------------------------------------------------------------

var arrayBombe = [];
var tentativiUtente = [];
var punteggio = 0;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
while (arrayBombe.length < 16) {
  var numCasuale = numeroCasuale(1, 100);
  var controllo = eInArray(arrayBombe, numCasuale);

  if (controllo == false) {
    arrayBombe.push(numCasuale);
  }
}

console.log(arrayBombe);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.


var perso = false;
while ((tentativiUtente.length < 3) && (perso == false)) {

  var numUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
  var controlloUtente = eInArray(tentativiUtente, numUtente);

  var controlloGioco = eInArray(arrayBombe, tentativiUtente);
  console.log(controlloGioco);

  if (controlloGioco == true) {
    alert('HAI PERSO');
    perso = true;
  } else if (controlloUtente == false) {
    tentativiUtente.push(numUtente);
    punteggio++;
    console.log(punteggio);

  }
}

console.log(tentativiUtente);

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
