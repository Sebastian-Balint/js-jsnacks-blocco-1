// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare
// duplicati (inserire il numero nell'array solo se non è già presente).

// quantita' di numeri che voglio
const howManyNumbers = 5;
// creo un'array vuota
const numbers = [];

// uso il ciclo for per chiedre 5 numeri all'utente
for (let i = 0; i < howManyNumbers; i++) {
  const userNumber = parseInt(prompt("Inserisci un numero"));

  // controllo se non sono già stati inserirti
  if (!numbers.includes(userNumber)) {
    // inserisco all'interno dell'array
    numbers.push(userNumber);
  }
}
// risultato
console.log(numbers);
