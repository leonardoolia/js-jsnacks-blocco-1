//? 1. Creare array di frutta
const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(frutta);


//? 2. Creare variabile pesca e aggiungerla all'array frutta
// Creare variabile pesca
const pesca = 'pesca';

// Aggiungerla all'array
frutta.push(pesca);
console.log(frutta);

//? 3. Verificare se nell'array frutta è presente il cocomero

// Creare variabile d'appoggio
let drinkIngredient = "Oh no, devo uscire a comprare il cocomero!";

// Controllare nell'array se è presente la variabile "cocomero"
for (let i = 0; i < frutta.length; i++) {
    // Se è presente...
    if (frutta[i] === 'cocomero') {
        drinkIngredient = "Trovato! Devo solo preparare il cocktail.";
    };
}

// Stampare risultato
console.log(drinkIngredient);