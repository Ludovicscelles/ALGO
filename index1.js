// function cashback(solde, retrait) {
//   if (solde >= retrait) {
//     const newSolde = solde - retrait;
//     return `Retrait possible, votre nouveau solde est de ${newSolde} Euros`;
//   } else {
//     return "retrait impossible";
//   }
// }

// console.log(cashback(1500, 2000));

// function Sum(firstNumber, secondNumber) {
//   if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     return "Erreur : Les deux entrées doivent être des nombres.";
//   }

//   const total = firstNumber + secondNumber;
//   return `Le résultat de cette opération est de ${total}.`;
// }

// console.log(Sum(-8, 15));

// function theBiggestNumber(firstNumber, secondNumber, thirdNumber) {
//   if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
//     return "Erreur : Les trois entrées doivent être des nombres"
//   }
//   const biggestNumber = Math.max(firstNumber, secondNumber, thirdNumber);
//   return (`Le nombre le plus grand est ${biggestNumber}.`);
// }

// console.log(theBiggestNumber(17, 28, 5));

// function evenOrOdd(number) {
//   if (isNaN(number)) {
//     return "Erreur : Cette entrée doit être nombre";
//   }
//   return (number % 2 === 0 ? "Ce nombre est pair" : "Ce nombre est impair");
// }

// console.log(evenOrOdd(22));

// function factorialOfANumber(number) {
//   if (isNaN(number)|| number < 0 || !Number.isInteger(number)) {
//     return "Erreur : Cette entrée doit être nombre";
//   }
//   let factorialize = 1;
//   for (i = 1; i <= number; i++) {
//     factorialize = factorialize * i;
//   }
//   return factorialize;
// }

// console.log(factorialOfANumber(125));

// function numberOfVowels(phrase) {
//   let count = 0;
//   let vowels = "aeiouAEIOU";
//   for (let i = 0; i < phrase.length; i++) {
//     if (vowels.includes(phrase[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// const phraseInput = "Il faut beau aujourd'hui"

// console.log(`Le nombre de voyelles dans la phrase est : ${numberOfVowels(phraseInput)}.`);

// function sum(firstNumber, secondNumber) {
//   if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     return "Les deux entrées doivent être des nombres"
//   }
//     return firstNumber + secondNumber;
// }

// console.log(sum(15, "dfq"));
// console.log(sum(15, 48));

// function theBiggestNumber(firstNumber, secondNumber, thirdNumber) {
//   if (
//     firstNumber === undefined ||
//     firstNumber === null ||
//     isNaN(firstNumber) ||
//     secondNumber === undefined ||
//     secondNumber === null ||
//     isNaN(secondNumber) ||
//     thirdNumber === undefined ||
//     thirdNumber === null ||
//     isNaN(thirdNumber)
//   ) {
//     return "Les trois entrées doivent être des nombres";
//   }
//   return Math.max(firstNumber, secondNumber, thirdNumber);
// }

// console.log(theBiggestNumber(15, "fqjsmlfjd", "fqmlsdjfml"));
// console.log(theBiggestNumber(18, 22, 142));
// console.log(theBiggestNumber(18, 0, 142));

// function even (number) {
//   if (number === null || number === undefined || isNaN(number)) {
//     return `L'entrée doit être un nombre`
//   }
//   return number % 2 === 0 ? `Ce nombre est pair` : `Ce nombre est impair`
// }

// console.log(even(28));

// function factorial(number) {
//   if (
//     number < 1 ||
//     !Number.isInteger(number) ||
//     isNaN(number) ||
//     number === undefined ||
//     number === null
//   ) {
//     return `L'entrée doit être un nombre entier et positif`;
//   }
//   let factorialize = 1;
//   for (i = 1; i <= number ; i++ ) {
//     factorialize = factorialize * i;
//   }
//   return factorialize
// }

// console.log(factorial(20));

// function vowelSum(expression) {
//   if (typeof expression !== "string") {
//     return "Erreur : L'entrée doit être un chaîne de caractères";
//   }
//   const vowels = "aeéiouAEIOU";
//   let count = 0;
//   for (let letter of expression) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(vowelSum("Il était une fois"));

// function sumFirstNNumbers(number) {
//   let sum = 0;

//   if (isNaN(number)) {
//     return `L'entrée doit être un nombre`;
//   }
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumFirstNNumbers(4));
// console.log(sumFirstNNumbers(4));
// console.log(sumFirstNNumbers(4));
// console.log(sumFirstNNumbers("sfqlkùlkq"));
// console.log(sumFirstNNumbers(0));

// function reverse(word) {
//   if (typeof word !== "string") {
//     return "L'entrée doit être une chaîne de caractères";
//   }
//   return word.split("").reverse().join("");
// }

// console.log(reverse("bonjour")); // "ruojnob"
// console.log(reverse("hello"));    // "olleh"
// console.log(reverse("world"));    // "dlrow"
// console.log(reverse("JavaScript")); // "tpircSavaJ"
// console.log(reverse(""));         // ""
// console.log(reverse("a"));        // "a"
// console.log(reverse(null));       // "L'entrée doit être une chaîne de caractères"
// console.log(reverse(12345));      // "L'entrée doit être une chaîne de caractères"
// console.log(reverse(undefined));  // "L'entrée doit être une chaîne de caractères"

// function even(number) {
//   if (isNaN(number) || !Number.isInteger(number)) {
//     return `L'entrée doit être un nombre entier`;
//   }
//   if (number % 2 === 0) {
//     return `Ce nombre est pair`;
//   } else {
//     return `Ce nombre est impair`;
//   }
// }

// console.log(even(4));
// console.log(even(32));
// console.log(even(7));
// console.log(even(321));
// console.log(even(2.2548));
// console.log(even("fmqjlqfjm"));

// function factorial(number) {
//   const num = Number(number);
//   if (isNaN(num) || !Number.isInteger(num)) {
//     return `L'entrée doit être un nombre entier`;
//   }
//   let factorialResult = 1;
//   for (let i = 1; i <= num; i++) {
//     factorialResult *= i;
//   }
//   return factorialResult;
// }

// console.log(factorial(5));
// console.log(factorial(20));
// console.log(factorial(5.251));
// console.log(factorial("qfsjmlklm"));

// function squaresOfANumber(number) {
//   const num = Number(number);
//   if (isNaN(num) || !Number.isInteger(num)) {
//     return `L'entrée doit être un nombre entier`;
//   }
//   let squaresResult = [];
//   for (let i = 1; i <= number; i++) {
//     squaresResult.push(i*i);
//   }
//   return squaresResult;
// }

// console.log(squaresOfANumber(4));
// console.log(squaresOfANumber(8));
// console.log(squaresOfANumber(2.258));
// console.log(squaresOfANumber("qfsjdklf"));

// function sumOfNumbers(integer) {
//   if (typeof integer !== "number" || isNaN(integer)) {
//     return "L'entrée doit être un nombre";
//   }
//  if (!Number.isInteger(integer) || integer < 1) {
//   return "L'entrée doit être un nombre entier positif"
//  }
//   let sum = 0;
//   for (i = 1; i <= integer; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOfNumbers(65.38
// ));

// function theBiggestNumber(numberOne, numberTwo, numberThree) {
//   if (
//     typeof numberOne !== "number" ||
//     typeof numberTwo !== "number" ||
//     typeof numberThree !== "number" ||
//     isNaN(numberOne) ||
//     isNaN(numberTwo) ||
//     isNaN(numberThree) ||
//     !Number.isInteger(numberOne) ||
//     !Number.isInteger(numberTwo) ||
//     !Number.isInteger(numberThree)
//   ) {
//     return "Les entrées doivent être des nombres entiers positifs";
//   }
//   return Math.max(numberOne, numberTwo, numberThree);
// }

// console.log(theBiggestNumber(-132, `sqg`, 24));

// function oddNumber(number) {
//   if (
//     typeof number !== "number" ||
//     isNaN(number) ||
//     !Number.isInteger(number)
//   ) {
//     return `L'entrée doit être un nombre entier`;
//   }
//   if (number % 2 === 0) {
//     return `Ce nombre est pair`;
//   }
//   return `Ce nombre est impair`;
// }

// console.log(oddNumber(28));
// console.log(oddNumber(57));
// console.log(oddNumber("28"));
// console.log(oddNumber("dgsfds"));

// function factorial(number) {
//   if (
//     typeof number !== "number" ||
//     isNaN(number) ||
//     !Number.isInteger(number) ||
//     number < 0
//   ) {
//     return `L'entrée doit être un nombre entier`;
//   }
//   let factorialResult = 1;
//   for ( let i = 1; i <= number; i++) {
//     factorialResult *= i;
//   }
//   return factorialResult;
// }

// console.log(factorial(15));
// console.log(factorial(25));
// console.log(factorial("fqjslkdflkq"));
// console.log(factorial(25.123));

// function stringInvert(string) {
//   if (typeof string !== "string") {
//     return `L'entrée doit être une chaîne de charactères`;
//   }
//   if (string === "") {
//     return "La chaîne est vide"
//   }
//   return string.split("").reverse().join("");
// }

// console.log(stringInvert("Bonjour"));
// console.log(stringInvert(1586));
// console.log(stringInvert(""));
// console.log(stringInvert(" "));

// function vowelSum(string) {
//   if (typeof string !== "string") {
//     return `L'entrée doit être une chaîne de charactères`;
//   }
//   if (string === "") {
//     return "La chaîne est vide";
//   }
//   let vowels = "aeiouyàâäéèêëîïôöùûüÿ";
//   let counter = 0;
//   for (let character of string.toLowerCase()) {
//     if (vowels.includes(character)) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(vowelSum("Bonjour"));
// console.log(vowelSum("élève"));
// console.log(vowelSum(""));
// console.log(vowelSum(3122));

// function vowelSum(string) {
//   if (typeof string !== "string") {
//     return `L'entrée doit être une chaîne de charactères`;
//   }
//   if (string === "") {
//     return "La chaîne est vide";
//   }
//   let vowels = "aeiouyàâäéèêëîïôöùûüÿ";
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     let vowelsFound = string[i].toLowerCase();
//     if (vowels.includes(vowelsFound)) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(vowelSum("Bonjour"));
// console.log(vowelSum("élève"));
// console.log(vowelSum(""));
// console.log(vowelSum(3122));

// function multiplicationTable(number) {
//   if (typeof number !== "number" || isNaN(number)) {
//     return `L'entrée doit être un nombre`;
//   }
//   if (!Number.isInteger(number) || number < 0) {
//     return `L'entrée doit être un nombre entier et positif`;
//   }
//   let result = "";
//   for (let i = 1; i <= 10; i++) {
//     result += `${number} * ${i} = ${number * i}\n`;
//   }
//   return result;
// }

// console.log(multiplicationTable(5));
// console.log(multiplicationTable("sqdmfjsqkj"));
// console.log(multiplicationTable(-5));
// console.log(multiplicationTable(5.125));

// function isPalindrome(number) {
//   if (
//     typeof number !== "number" ||
//     isNaN(number) ||
//     !Number.isInteger(number) ||
//     number < 0
//   ) {
//     return `L'entrée doit être un nombre entier et positif`;
//   }
//   let numberStr = number.toString();
//   let result = numberStr.split("").reverse().join("");
//   return numberStr === result;
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(123));
// console.log(isPalindrome("fdsjqlfj"));
// console.log(isPalindrome(-155));
// console.log(isPalindrome(121.121));

// function average(numbers) {
//   if (numbers.length < 2 || !Array.isArray(numbers)) {
//     return `Vous devez entrer un minimum de deux nombres.`;
//   }
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] !== "number" || isNaN(numbers[i])) {
//       return `Tous les éléments doivent être des nombres valides`
//     }
//     sum += numbers[i];
//   }
//   return sum / numbers.length
// }

// console.log(average([2,5,8,190]))
// console.log(average([25.128,22.158,8.12,190.08]))
// console.log(average([2]))
// console.log(average("fsdkjqmdjqklfdsq, fsqdmqsldk"))
// console.log(average(["fsdkjqmdjqklfdsq","fsqdmqsldk"]))

// function numberOfWords(string) {
//   if (typeof string !== "string") {
//     return `L'entrée doit être une chaîne de caractères`;
//   }
//   let totalOfWords = 0;
//   for (let i = 0; i < string.length; i++)
//     if (string[i] === " ") {
//       totalOfWords += 1;
//     }
//   return totalOfWords + 1;
// }

// console.log(numberOfWords("Bonjour Ludo"));
// console.log(numberOfWords(12553));

// function numberOfSentences(string) {
//   if (typeof string !== "string") {
//     return `L'entrée doit être une chaîne de caractères`;
//   }
//   let totalOfSentences = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "." || string[i] === "?" || string[i] === "!") {
//       totalOfSentences += 1;
//     }
//   }
//   return totalOfSentences;
// }

// console.log(numberOfSentences("Bonjour. Comment ça va ? Tout va bien !"));
// console.log(numberOfSentences(21331));

// function numberOfSentencesAlt(string) {
//   if (typeof string !== "string") {
//     return `L'entrée doit être une chaîne de caractères`;
//   }
//   const matches = string.match(/[.!?]/g);
//   return matches ? matches.length : 0;
// }

// console.log(numberOfSentencesAlt("Bonjour. Comment ça va ? Tout va bien !"));
// console.log(numberOfSentencesAlt("Bonjour. Comment ça va ?"));
// console.log(numberOfSentencesAlt("Bonjour"));
// console.log(numberOfSentencesAlt(21331));

// function theBiggestNumber(numbers) {
//   if (!Array.isArray(numbers) || numbers.length < 2) {
//     return `Vous devez entrer un minimum de deux nombres`;
//   }
//   return Math.max(...numbers);
// }

// console.log(theBiggestNumber([1, 25, 45]));
// console.log(theBiggestNumber([25.81, 258.36]));
// console.log(theBiggestNumber([-62, -52, -3, -25]));
// console.log(theBiggestNumber(12, 25, 23, 85));
// console.log(theBiggestNumber([5]));
// console.log(theBiggestNumber("qkjdsfmlsdf"));

// function invertedLetters(string) {
//   if (typeof string !== "string") {
//     return `L'entrée doit être une chaîne de caractères`;
//   }
//   let reversed = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   return reversed;
// }

// console.log(invertedLetters(3213));
// console.log(invertedLetters("hello"));

// function invertedLettersAlt(letters) {
//   if (typeof letters !== "string") {
//     return `L'entrée doit être une chaîne de caractères`;
//   }
//   let reversedLetters = [...letters].reverse().join("");
//   return reversedLetters;
// }

// console.log(invertedLettersAlt(16516));
// console.log(invertedLettersAlt("hello"));

// function isPrimeNumber(number) {
//   if (
//     typeof number !== "number" ||
//     isNaN(number) ||
//     !Number.isInteger(number)
//   ) {
//     return `L'entrée doit être un nombre entier et positif`;
//   }
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrimeNumber(7));
// console.log(isPrimeNumber(10));
// console.log(isPrimeNumber(1));
// console.log(isPrimeNumber(0));
// console.log(isPrimeNumber(-5));
// console.log(isPrimeNumber("fqsdlksqdfk"));

// function findPrimeNumber(num) {
//   if (
//     typeof num !== "number" ||
//     isNaN(num) ||
//     !Number.isInteger(num) ||
//     num < 2
//   ) {
//     return `L'entrée doit être un nombre entier et positif`;
//   }
//   let primeNumbers = [];
//   for (let i = 2; i <= num; i++) {
//     if (isPrimeNumber(i)) {
//       primeNumbers.push(i);
//     }
//   }
//   return primeNumbers;
// }

// console.log(findPrimeNumber(100));
// console.log(findPrimeNumber(-10));
// console.log(findPrimeNumber(2.78));
// console.log(findPrimeNumber("fdlqdjql"));

// function commonElements(firstArray, secondArray) {
//   if (
//     !Array.isArray(firstArray) ||
//     firstArray.length < 2 ||
//     !Array.isArray(secondArray) ||
//     secondArray.length < 2
//   ) {
//     return `Vous devez insérer au moins deux nombres dans chaque tableau`;
//   }
//   let communNumbers = [];
//   for (let i = 0; i < firstArray.length; i++) {
//     for (let j = 0; j < secondArray.length; j++) {
//       if (
//         firstArray[i] === secondArray[j] &&
//         !communNumbers.includes(firstArray[i])
//       ) {
//         communNumbers.push(firstArray[i]);
//       }
//     }
//   }
//   return communNumbers;
// }

// console.log(commonElements([1, 5, 12, 9], [1, 5, 65, 89]));
// console.log(commonElements([1, 5, 5, 12, 9], [1, 5, 5, 65, 89]));
// console.log(commonElements("fsqjkdfqdmfj", "fsqdijfdqsiouf"));
// console.log(commonElements([9], []));

// function uniqueElements(firstArray, secondArray) {
//   if (
//     !Array.isArray(firstArray) ||
//     firstArray.length < 2 ||
//     !Array.isArray(secondArray) ||
//     secondArray.length < 2
//   ) {
//     return `Vous devez insérer au moins deux nombres dans chaque tableau`;
//   }
//   let uniqueNumbers = [];
//   for (let i = 0; i < firstArray.length; i++) {
//     if (!secondArray.includes(firstArray[i])) {
//       uniqueNumbers.push(firstArray[i]);
//     }

//     for (let j = 0; j < secondArray.length; j++) {
//       if (!firstArray.includes(secondArray[j])) {
//         uniqueNumbers.push(secondArray[j]);
//       }
//     }
//   }
//   return uniqueNumbers;
// }

// console.log(uniqueElements([1, 12, 24], [52, 12, 9]));
// console.log(uniqueElements("sdfqjkq", "qsjdlfmqk"));
// console.log(uniqueElements([1.125, 12.256, 24.125], [52.135, 12.256, 9.75]));
// console.log(uniqueElements([258], []));

// function duplicate(array) {
//   if (!Array.isArray(array) || array.length < 2) {
//     return `Vous devez renseigner au moins deux nombres dans ce tableau`;
//   }
//   let occurences = {};
//   let duplicates = [];

//   for (let i = 0; i < array.length; i++) {
//     if (occurences[array[i]]) {
//       if (occurences[array[i]] === 1) {
//         duplicates.push(array[i]);
//       }
//       occurences[array[i]]++;
//     } else {
//       occurences[array[i]] = 1;
//     }
//   }
//   return duplicates;
// }

// console.log(duplicate([1, 25, 25, 25, 7, 7, 16, 29, 33])); // Résultat attendu : [25, 7]
// console.log(duplicate([25])); // Résultat attendu : []
// console.log(duplicate([])); // Résultat attendu : message d'erreur
// console.log(duplicate("sdqjmfglskf")); // Résultat attendu : message d'erreur
// console.log(duplicate([25, 72, 94])); // Résultat attendu : []

// function addition() {
//   let firstNumber = 7;
//   let secondNumber = 5;

//   let userFirstNumber = prompt(
//     `Entrez un premier nombre entier ou laisser à vide`
//   );
//   let userSecondNumber = prompt(
//     `Entrez un deuxième nombre entier ou laisser à vide`
//   );
//   if (userFirstNumber !== "") {
//     firstNumber = parseInt(userFirstNumber);
//   }
//   if (userSecondNumber !== "") {
//     secondNumber = parseInt(userSecondNumber);
//   }
//   if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     return `Vous devez renseigner un nombre entier`;
//   }
//   let total = firstNumber + secondNumber;
//   return `La somme des deux nombres est : ${total}`;
// }

// console.log(addition());

// function theBiggestNumber() {
//   let firstNumber = 7;
//   let secondNumber = 5;

//   let userFirstNumber = prompt(`Entrez un premier nombre ou laisser à vide`);
//   let userSecondNumber = prompt(`Entrez un deuxième nombre ou laisser à vide`);
//   if (userFirstNumber !== "") {
//     firstNumber = parseInt(userFirstNumber);
//   }
//   if (userSecondNumber !== "") {
//     secondNumber = parseInt(userSecondNumber);
//   }
//   if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     return `Vous devez renseigner un nombre `;
//   }
//   if (firstNumber === secondNumber) {
//     return `Les deux nombre sont égaux`;
//   }
//   let biggestNumber = Math.max(firstNumber, secondNumber);
//   return `La plus grand des deux nombres est : ${biggestNumber}`;
// }

// console.log(theBiggestNumber());

// function mergeSortedNumbers(firstArray, secondArray) {
//   if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
//     return `L'entrée doit être un tableau de nombres`;
//   }

//   if (!firstArray.every(Number.isInteger) || !secondArray.every(Number.isInteger)) {
//     return `Tous les élément des tableaux doivent être des nombres entiers`
//   }
//   let merged = [];
//   let i = 0,
//     j = 0;

//   while (i < firstArray.length && j < secondArray.length) {
//     if (firstArray[i] < secondArray[j]) {
//       merged.push(firstArray[i++]);
//     } else {
//       merged.push(secondArray[j++]);
//     }
//   }
//   return [...merged, ...firstArray.slice(i), ...secondArray.slice(j)];
// }

// console.log(mergeSortedNumbers([1, 3, 5, 7], [2, 4, 6, 8]));
// console.log(mergeSortedNumbers([1, 3, 5], [2]));
// console.log(mergeSortedNumbers([], [2, 4, 6]));

// function intersectTwoTables(firstArray, secondArray) {
//   if (
//     !Array.isArray(firstArray) ||
//     !Array.isArray(secondArray) ||
//     !firstArray.every(Number.isInteger) ||
//     !secondArray.every(Number.isInteger)
//   ) {
//     return `Les deux entrées doivent être des tableaux de nombres entiers`;
//   }
//   firstArray.sort((a, b) => a - b);
//   secondArray.sort((a, b) => a - b);
//   let merged = [];
//   let i = 0;
//   let j = 0;
//   while (i < firstArray.length && j < secondArray.length) {
//     if (firstArray[i] === secondArray[j]) {
//       if (merged.length === 0 || merged[merged.length - 1] !== firstArray[i]) {
//         merged.push(firstArray[i]);
//       }
//       i++;
//       j++;
//     } else if (firstArray[i] < secondArray[j]) {
//       i++;
//     } else {
//       j++;
//     }
//   }
//   return merged;
// }

// console.log(intersectTwoTables([1,2,2,3,4],[2,3,5,2]));

// function decode(message) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let reversedAlphabet = alphabet.split("").reverse().join("");

//   let decodedMessage = "";
//   for (let i = 0; i < message.length; i++) {
//     let letter = message[i];
//     if (alphabet.includes(letter)) {
//       let index = alphabet.indexOf(letter);
//       decodedMessage += reversedAlphabet[index];
//     } else {
//       decodedMessage += letter;
//     }
//   }
//   return decodedMessage;
// }

// console.log(decode("bonjour"));

// function toDecode(message) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let reversedAlphabet = alphabet.split("").reverse().join("");

//   return message
//     .split("")
//     .map((letter) => {
//       if (alphabet.includes(letter)) {
//         let index = alphabet.indexOf(letter);
//         return reversedAlphabet[index];
//       }
//       return letter;
//     })
//     .join("");
// }

// function camelCase(string) {
//   if (typeof string !== "string") {
//     return `L'entrée doit être une chaîne de caractères`;
//   }
//   return string
//     .split(" ")
//     .map((word, index) => {
//       if (index === 0) {
//         return word.toLowerCase();
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join("");
// }

// function toCamelCase(str) {
//   return str
//     .replace(/[-_]+/g, " ")
//     .split(" ")
//     .map((word, index) => {
//       return index === 0
//         ? word.toLowerCase()
//         : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join("");
// }

// console.log(toCamelCase("The-Stealth-Warrior"));


function evenOrOdd(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return `L'entrée doit être un nombre`;
  }
  if (!Number.isInteger(number)) {
    return `L'entrée doit être un nombre entier`;
  }
  return number % 2 === 0 ? `Ce nombre est pair` : `Ce nombre est impair`;
}
console.log(evenOrOdd(28));
console.log(evenOrOdd(57));
console.log(evenOrOdd("28"));
console.log(evenOrOdd("dgsfds"));
console.log(evenOrOdd(2.258));

