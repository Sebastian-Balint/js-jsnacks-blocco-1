// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
//   Il programma stampa la somma di tutti i numeri inseriti.

// quantita' di numeri che voglio
const howManyNumbers = 5;
// creo un'array vuota
const numbers = [];

// dichiaro la variabile somma
let sum = 0;
// uso il ciclo for per chiedre 5 numeri all'utente
for (let i = 0; i < howManyNumbers; i++) {
  const userNumber = parseInt(prompt("Inserisci un numero"));
  // sommo i numeri che mi sono stati dati
  sum += userNumber;
}
// risultato
alert("La somma dei numeri forniti è " + sum);
