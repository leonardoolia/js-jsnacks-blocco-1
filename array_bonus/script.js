/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */


const array1 = [5, 7];
const array2 = [3, 54, 6, 3, 23];

while (array1.length < array2.length) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    shorterArray.push(randomNumber);
};

console.log(shorterArray, longerArray);