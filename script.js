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

//Funzione che mi permetta di generare le regole del gioco
function regolamento(){

  //Si crea una lista di 16 numeri generati random senza doppioni
  var lista_numeri=[];
  var numeri;
  var livello=parseInt(prompt("Scegli un livello di gioco: 0,1,2: "));
  var i=0;
    while(i<16){
      // Condizioni per i vari livelli
      switch (livello) {
        case 1:
          numeri=generateRandomNumber(1,80);
          break;
        case 2:
          numeri=generateRandomNumber(1,50);
          break;
        default:
          numeri=generateRandomNumber(1,100);
          break;
      }

      if(lista_numeri.includes(numeri)==false){
        lista_numeri.push(numeri);
        i++;
      }
    }
  document.getElementById('livello').innerHTML="Il livello che hai scelto è: " + livello;
  console.log(lista_numeri);

  // Chiedo all'utente di inserire numeri fino a che non inserisce un numero vietato per un max di 84 inserimenti
  var trovato, j, numero_utente, punteggio;
  trovato=false;
  j=punteggio=0;

  //Regolamento del livello 1
  if (livello==1) {
    while(j<64 && trovato==false){
      numero_utente=parseInt(prompt("Inserisci un numero da 1 a 80!"));
      if (lista_numeri.includes(numero_utente)) {
        trovato=true;
        console.log("Purtroppo hai Perso!")
      }
      else{
        punteggio++;
      }
      j++;
    }
  }

  //Regolamento del livello 2
  if (livello==2) {
    while(j<34 && trovato==false){
      numero_utente=parseInt(prompt("Inserisci un numero da 1 a 50!"));
      if (lista_numeri.includes(numero_utente)) {
        trovato=true;
        console.log("Purtroppo hai Perso!")
      }
      else{
        punteggio++;
      }
      j++;
    }
  }

  //Regolamento default:livello 0
  else {
    while(j<84 && trovato==false){
      numero_utente=parseInt(prompt("Inserisci un numero da 1 a 100!"));
      if (lista_numeri.includes(numero_utente)) {
        trovato=true;
        console.log("Purtroppo hai Perso!")
      }
      else{
        punteggio++;
      }
      j++;
    }
  }
  document.getElementById("numeriscelti").innerHTML="Peccato, il numero che hai appena inserito era un mina! " + numero_utente;
  return punteggio;
}

var punteggioutente=regolamento();
document.getElementById("punteggio").innerHTML="Il punteggio che hai totalizzato è: "+ punteggioutente;
console.log(punteggioutente);
