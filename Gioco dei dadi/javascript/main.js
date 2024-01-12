// - Genero un numero casuale randomUserNum per l'utente
// - Genero un numero casuale randomUserPc per il computer
// - Se randomUserNum > randomUserPc
//   - l'utente vince e stampo l'avviso
// - Se randomUserNum < randomUserPc
//   - il computer vince e stampo l'avviso
// - Altrimenti
//   - Pareggio e stampo l'avviso

const randomUserNum = Math.round(Math.random() * 5) + 1;
alert("L'utente ha il numero " + randomUserNum);
const randomUserPc = Math.round(Math.random() * 5) + 1;
alert("Il computer ha il numero " + randomUserPc);

if (randomUserNum > randomUserPc) {
  alert("L'utente vince!");
} else if (randomUserNum < randomUserPc) {
  alert("Il computer vince!");
} else alert("Pareggio");
