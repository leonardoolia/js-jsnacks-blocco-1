/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

/*

STEP

1. Individuare quale array è più lungo e quale è più corto

2. Generare numeri casuali tanti quanti ne mancano al più corto


*/

const array1 = [5, 7];
const array2 = [3, 54, 6, 3, 23];


// STEP 1

const shorterArray = array1.length > array2.length ? array2 : array1;
const longerArray = array1.length > array2.length ? array1 : array2;

// STEP 2

while (shorterArray.length !== longerArray.length) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    shorterArray.push(randomNumber);
};

console.log(shorterArray, longerArray);