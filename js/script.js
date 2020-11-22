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
var maxTentativi
var tentativiUtente = [];
var punteggio = 0;

// NOTE: BONUS
var livello;
var numeroMassimo;



livello = parseInt(prompt('SELEZIONA LIVELLO TRA 0, 1, 2'))

switch (livello) {

  case 2:
  numeroMassimo = 50;
    break;

    case 1:
    numeroMassimo = 80;
      break;

  default:
  numeroMassimo = 100;

}

maxTentativi = numeroMassimo - 16;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.


while (arrayBombe.length < 16) {
  var numCasuale = numeroCasuale(1, numeroMassimo);
  var controllo = eInArray(arrayBombe, numCasuale);

  if (controllo == false) {
    arrayBombe.push(numCasuale);
  }
}

console.log(arrayBombe);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.


var perso = false;
while (tentativiUtente.length < maxTentativi && perso == false) {
  var numUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + numeroMassimo));
  console.log(numUtente);

  var controlloUtente = eInArray(tentativiUtente, numUtente);
  if (controlloUtente == true) {
    alert('Numero gia inserito');
  }
  console.log('numero duplicato ', controlloUtente);

  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

  var controlloGioco = eInArray(arrayBombe, numUtente);
  console.log('è una bomba ', controlloGioco);

  if(controlloGioco == true) {
    alert('HAI TROVATO UNA BOMBA, HAI PERSO');
    perso = true;
  } else if(controlloGioco == false) {
    tentativiUtente.push(numUtente);
    punteggio++;
    console.log('punteggio ', punteggio);
  }
console.log(controlloUtente);
}
punteggio = tentativiUtente.length;
alert('Hai totalizzato ' + punteggio + ' punti');
document.getElementById('punti').innerHTML = punteggio;
