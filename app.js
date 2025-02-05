// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman

// chalk
// import chalk from "chalk";
// console.log(chalk.green('chalk è installato'));

// express
// import express from 'express';
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// aggiungiamo la rotta home
app.get('/',(req,res) => {
    res.send('home')
});

// aggiungiamo rotta del blog
app.get('/bacheca', (req, res)=> {
    // array dei posts
    const bacheca = [
        {
          "titolo": "Ciambellone soffice",
          "contenuto": "Un dolce semplice e genuino, perfetto per la colazione o la merenda. Soffice e profumato, con una leggera spolverata di zucchero a velo.",
          "immagine": "http://localhost:3000/img/ciambellone.jpeg", 
          "tags": ["dolce", "colazione", "merenda", "tradizione"]
        },
        {
          "titolo": "Cracker di barbabietola",
          "contenuto": "Sfiziosi cracker croccanti a base di barbabietola, arricchiti con semi misti. Perfetti come snack o da accompagnare con creme e formaggi.",
          "immagine": "http://localhost:3000/img/barbabietola.jpeg",
          "tags": ["salato", "snack", "barbabietola", "healthy"]
        },
        {
          "titolo": "Pasta alla barbabietola",
          "contenuto": "Un primo piatto colorato e dal sapore delicato. La crema di barbabietola si sposa perfettamente con la pasta e la croccantezza della granella di pistacchio.",
          "immagine": "http://localhost:3000/img/pasta_barbabietola.jpeg",
          "tags": ["primo", "barbabietola", "pasta", "vegetariano"]
        },
        {
          "titolo": "Torta paesana",
          "contenuto": "Un dolce della tradizione lombarda, preparato con pane raffermo, latte, cacao, pinoli e uvetta. Un dessert ricco e goloso.",
          "immagine": "http://localhost:3000/img/torta_paesana.jpeg",
          "tags": ["dolce", "tradizione", "cacao", "riciclo"]
        },
        {
            "titolo": "Pane fritto",
            "contenuto": "Alla fine è pane, pero è fritto.",
            "immagine": "http://localhost:3000/img/pane_fritto_dolce.jpeg",
            "tags": ["pane", "buono", "buonissimo",]
          }
      ]
    // ritorniamo l array in json
    res.json(bacheca);
})

app.listen(port, () => {
    console.log(`server in ascolto su ${port}`);
})



// console.log("Hello world !");
// app.listen(80);
// const port = 3000
// app.get('/',(req,res) => {
// res.send('ciao')
// })node app.js

// ReferenceError: require is not defined in ES module scope, you can use import instead
// This file is being treated as an ES module because it has a '.js' file extension and 
// '/Users/nicolamarino/esercizi/express-blog-intro/package.json' contains "type": "module". 
// To treat it as a CommonJS script, rename it to use the '.cjs' file extension.