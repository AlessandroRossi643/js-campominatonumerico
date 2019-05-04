// REPO: js-campominatonumerico
// DESCRIZIONE:
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50

//Funzione che mi permetta dato un minimo ed un massimo, di ottenere un numero random compreso
function generateRandomNumber(min,max){
  return Math.floor(Math.random()*max)+min;
}

//Si crea una lista di 16 numeri generati random senza doppioni
var lista_numeri=[];
var numero;
while (lista_numeri.lenght<16){
  var numero=generateRandomNumber(1,100); //Qui si poteva anche inizializzare la i a 0 fuori dal while e aumentarla all'interno del ciclo stesso, mettendo nella condizone del while i<16
  if (lista_numeri.includes(numero)==false) {
    lista_numeri.push(numero);
  }
}
console.log(lista_numeri);

// Chiedo all'utente di inserire numeri fino a che non inserisce un numero vietato per un max di 84 inserimenti
var trovato=false;
var j=0;
var numero_utente;
while(j<84){
  numero_utente=parseInt(prompt("Inserisci un numero da 1 a 100!"));
  if (lista_numeri.includes(numero_utente)) {
    trovato=true;
  }
  j++;
}

// Inserisco i numeri dell'utente in un array

// Confronto i numeri random del computer con quelli dell'utente
