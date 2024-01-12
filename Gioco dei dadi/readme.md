# Gioco dei dadi

### Traccia

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

### Svolgimento

- Genero un numero casuale randomUserNum per l'utente
- Genero un numero casuale randomUserPc per il computer
- Se randomUserNum > randomUserPc
  - l'utente vince e stampo l'avviso
- Se randomUserNum < randomUserPc
  - il computer vince e stampo l'avviso
- Altrimenti
  - Pareggio e stampo l'avviso
