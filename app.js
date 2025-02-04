// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman

// chalk
import chalk from "chalk";
console.log(chalk.green('chalk è installato'));

// express
import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('express installed')
});
app.listen(4000,() => {
    console.log('listening');
    
});




// const express = require('express');
// console.log("Hello world !");
// app.listen(80);
// const port = 3000
// app.get('/',(req,res) => {
//     res.send('ciao')
// })node app.js
