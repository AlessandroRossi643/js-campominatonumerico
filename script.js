//Creazione array vuoto contenente i numeri casuali
var lista_numeri=[];

for (var i = 0; i < 16; i++) {
  numero=Math.floor(Math.random()*16)+1;
  lista_numeri.push(numero);
}
console.log(lista_numeri);
