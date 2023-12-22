//? 1. Chiedere all'utente quanti elementi deve contenere l'array
const userNumbers = parseInt(prompt("Quanti elementi dovrà contenere l'array?"));

// !Validazione
if (userNumbers < 6) {
    alert("L'array deve contenere almeno 6 elementi");
};
console.log(userNumbers);


//? 2. Creare un array che contiene il numero di elementi scelto dall'utente
const arrayElements = [];
console.log(arrayElements);

for (let i = 1; i <= userNumbers; i++) {
    //? 3. Generare numeri casuali da 1 a 100
    const randomNumbers = Math.floor(Math.random() * 100) + 1;
    //? 4. Inserire i numeri casuali all'interno dell'array
    arrayElements.push(randomNumbers);
};












