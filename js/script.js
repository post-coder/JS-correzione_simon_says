/*

Visualizzare in pagina 5 numeri casuali. 

Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono 

e l'utente deve inserire,
uno alla volta, i numeri che ha visto precedentemente

Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare
sono stati individuati.

*/



const secretNumbersElement = document.getElementById("secretNumbers");
const outputTextElement = document.getElementById("outputText");


// campi di input dell'utente
// const number1Element = document.getElementById("number1");
// const number2Element = document.getElementById("number2");
// const number3Element = document.getElementById("number3");
// const number4Element = document.getElementById("number4");
// const number5Element = document.getElementById("number5");

// array di campi di input
const numberElements = [
  document.getElementById("number1"),
  document.getElementById("number2"),
  document.getElementById("number3"),
  document.getElementById("number4"),
  document.getElementById("number5")
];

console.log(numberElements);

const checkButton = document.getElementById("check");



// Visualizzare in pagina 5 numeri casuali. 

const randomNumbersArray = createRandomNumbers(5);

// stampo in pagina
secretNumbersElement.innerText = randomNumbersArray;

// Da lì parte un timer di 10 secondi.
// Dopo 10 secondi i numeri scompaiono 
setTimeout(function() {
  
  disappearNumbers(secretNumbersElement);

  document.getElementById('inputElementsContainer').style.display = "block";

}, 3000);



// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare
// sono stati individuati.

checkButton.addEventListener("click", function() {

  let rightNumbersArray = checkNumbers(randomNumbersArray, numberElements);

  endGame(rightNumbersArray, outputTextElement);

});









// FUNCTIONS
// _____________________________________________________________


function endGame(rightNumbers, outputElement) {

  // stampare quanti numeri ha indovinato l'utente
  outputElement.innerHTML = `
  Hai indovinato ${rightNumbers.length} numeri.<br>
  I numeri che hai indovinato sono: ${rightNumbers}
  `;


}



/**
 * Restituisce un array dei numeri che l'utente ha indovinato in base ai
 * parametri passati alla funzione
 * @param {Number[]} secretNumbers
 * @param {HTMLElement[]} userNumbers
 * @returns {Number[]}
 */
function checkNumbers(secretNumbers, userNumbers) {
  
  const rightNumbers = [];

  // primo approccio: cascata di if

  for(let i = 0; i < userNumbers.length; i++) {

    if(secretNumbers[i] == userNumbers[i].value) {
      
      rightNumbers.push(secretNumbers[i]);

      userNumbers[i].style.backgroundColor = "green";

      console.log("trovato");

    }
    
  }

  return rightNumbers;

}



function disappearNumbers(numbersContainer) {
  numbersContainer.innerText = "?????";
}



function createRandomNumbers(quantity) {
  let randomNumbers = [];

  for(let i = 0; i < quantity; i++) {
    randomNumbers.push(randomNumberBetween(1, 10));
  }

  return randomNumbers;

}




/**
 * Questa funzione restituisce un numero intero random
 * dal minimo indicato come parametro (min) al massimo indicato come parametro (max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNumberBetween(min, max) {

  // genero un numero random
  let random = Math.floor(Math.random() * (max - min + 1) + min)

  // una volta che la nostra funzione viene eseguita, restituisci al suo posto questo valore
  return random;

}