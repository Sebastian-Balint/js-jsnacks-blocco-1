// - Calcola la somma e la media dei primi 10 numeri.

// quantita' di numeri che voglio
const howManyNumbers = 10;

// creo un'array vuota
const numbers = [];

// variabili per la somma e la media
let sum = 0;
let div = 0;
// creo un ciclo per aver i primi 10 numeri nell'arrey
for (let i = 1; i <= howManyNumbers; i++) {
  numbers.push(i);
  // somma
  sum += i;
  // media
  div = sum / howManyNumbers;
}
// risultati
console.log(numbers);
console.log(sum);
console.log(div);
