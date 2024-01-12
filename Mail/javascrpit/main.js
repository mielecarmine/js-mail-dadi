// - Creo una lista di mail mailArray
// - Chiedo all'utente la sua mail
// - L'utente la inserisce e la conservo in userEmail
// - Creo un ciclo for con cui accedere alla lista di mail
//   - Se userEmail == mailArray[i]
//     - allora l'utente può accedere
//   - Altrimenti
//     - l'utente non può accedere
// - Stampo l'esito del controllo a schermo

const mailArray = [
  "pippobaudo@gmail.com",
  "mariorossi@gmail.com",
  "carminemiele@gmail.com",
  "supascoopa@gmail.com",
  "mariarossi@gmail.com",
  "kentucky@gmail.com",
];

let userEmail = prompt("Inserisci la tua email: ");
let found = false;
userEmail = userEmail.toLowerCase();

for (let i = mailArray.length - 1; i >= 0; i--) {
  console.log(i);
  if (userEmail == mailArray[i]) {
    console.log(i);
    found = true;
  }
}

if (found) {
  alert("Puoi entrare nel servizio");
} else alert("Non puoi entrare nel servizio");
