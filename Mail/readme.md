# Gioco dei dadi

### Traccia

Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

### Svolgimento

- Creo una lista di mail mailArray
- Chiedo all'utente la sua mail
- L'utente la inserisce e la conservo in userEmail
- Creo un ciclo for con cui accedere alla lista di mail
  - Se userEmail == mailArray[i]
    - allora l'utente può accedere
  - Altrimenti
    - l'utente non può accedere
- Stampo l'esito del controllo a schermo
