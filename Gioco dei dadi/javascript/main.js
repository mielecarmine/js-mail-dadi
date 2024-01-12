// - Genero un numero casuale randomUserNum per l'utente
// - Genero un numero casuale randomUserPc per il computer
// - Se randomUserNum > randomUserPc
//   - l'utente vince e stampo l'avviso
// - Se randomUserNum < randomUserPc
//   - il computer vince e stampo l'avviso
// - Altrimenti
//   - Pareggio e stampo l'avviso

const randomUserNum = Math.round(Math.random() * 5) + 1;
const randomUserPc = Math.round(Math.random() * 5) + 1;

if (randomUserNum > randomUserPc) {
  alert("L'utente vince!");
} else if (randomUserNum < randomUserPc) {
  alert("Il computer vince!");
}
