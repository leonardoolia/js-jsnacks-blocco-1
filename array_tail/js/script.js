//? 1. Chiedere all'utente quanti elementi deve contenere l'array
const userNumbers = parseInt(prompt("Quanti elementi dovrà contenere l'array?"));
const minLength = parseInt(prompt("Quanti elementi vuoi stampare?"));

// !Validazione
if (isNaN(userNumbers) || isNaN(minLength) || userNumbers > 100 || minLength < 0 || userNumbers < minLength || minLength >= userNumbers) {
    alert("L'array deve contenere almeno 6 elementi");
} else {
    //? 2. Creare un array che contiene il numero di elementi scelto dall'utente
    const arrayElements = [];

    for (let i = 1; i <= userNumbers; i++) {
        //? 3. Generare numeri casuali da 1 a 100
        const randomNumbers = Math.floor(Math.random() * 100) + 1;
        //? 4. Inserire i numeri casuali all'interno dell'array
        arrayElements.push(randomNumbers);
    };

    //? 5. Stampare gli ultimi 5 elementi dell'array

    const last5 = arrayElements.slice(-5);
    console.log(last5);

};






