// *******************************

// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// *******************************

function sumEvenDigit(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let sum: number = 0;
  let nbrStr: string = nbr.toString();

  for (let i = 0; i < nbrStr.length; i++) {
    let digit: number = parseInt(nbrStr[i]);
    if (digit % 2 === 0) {
      sum += digit;
    }
  }
  return sum;
}

let nbr: number = 11;
let sumEvenNumbers: number = sumEvenDigit(nbr);
console.log(sumEvenNumbers);

// *******************************

// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// *******************************

function sumEvenDigit2(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let sum: number = 0;
  let nbrStr: string = nbr.toString();

  let i = 0;

  while (i < nbrStr.length) {
    let digit: number = parseInt(nbrStr[i]);
    if (digit % 2 === 0) {
      sum += digit;
    }
    i++;
  }
  return sum;
}

let nb2: number = 1212;
let sumEvenNumbers2: number = sumEvenDigit2(nb2);
console.log(sumEvenNumbers2);

// *******************************

// 🔁 2. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)

// *******************************

function reverseNumber(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let absNbr: number = Math.abs(nbr);

  let reverseNumber: number = 0;

  while (absNbr > 0) {
    reverseNumber = (absNbr % 10) + reverseNumber * 10;
    absNbr = Math.floor(absNbr / 10);
  }
  return nbr < 0 ? -reverseNumber : reverseNumber;
}

let nbrToReverse: number = -1234;
let reversedNumber: number = reverseNumber(nbrToReverse);
console.log(reversedNumber);

// *******************************

// 🔁 2bis. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)

// *******************************

function reverseNumber2(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let absNbr: number = Math.abs(nbr);

  let reversedNumber: number = 0;

  for (; absNbr > 0; absNbr = Math.floor(absNbr / 10)) {
    reversedNumber = (absNbr % 10) + reversedNumber * 10;
  }
  return nbr < 0 ? -reverseNumber : reversedNumber;
}

let nbrToReversed: number = -4321;
let reversedNumber2: number = reverseNumber2(nbrToReversed);
console.log(reversedNumber);

// *******************************

// 🧮 3. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// *******************************
function GCD(nbr1: number, nbr2: number): number {
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
  }

  let smaller: number = Math.min(nbr1, nbr2);
  let gcd: number = 1;

  for (let i = 1; i <= smaller; i++) {
    if (nbr1 % i === 0 && nbr2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

let nbr1: number = 24;
let nbr2: number = 8;
let result: number = GCD(nbr1, nbr2);
console.log(result);

// *******************************

// 🧮 3bis. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// *******************************

function GCD2(nb1: number, nb2: number): number {
  if (!Number.isInteger(nb1) || !Number.isInteger(nb2)) {
    throw new Error(`La saisie doit comporter deux chiffres entiers`);
  }

  let smaller: number = Math.min(nb1, nb2);
  let gcd: number = 1;

  let i = 1;

  while (i <= smaller) {
    if (nb1 % i === 0 && nb2 % i === 0) {
      gcd = i;
    }
    i++;
  }
  return gcd;
}

let number1: number = 242;
let number2: number = 110;
let resultGCD2: number = GCD2(number1, number2);
console.log(resultGCD2);

// *******************************

// 🧮 3bis. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// *******************************

function GCD3(nb1: number, nb2: number): number {
  if (!Number.isInteger(nb1) || !Number.isInteger(nb2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
  }

  while (nb2 !== 0) {
    const temp: number = nb2;
    nb2 = nb1 % nb2;
    nb1 = temp;
  }
  return nb1;
}

let num1: number = 48;
let num2: number = 18;
let resultCGD3: number = GCD3(num1, num2);
console.log(resultCGD3);

// *******************************

// 🔤 4. Anagramme
// Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
// 📌 Exemple : "listen" et "silent" → ✅

// *******************************

function isAnagram(str1: string, str2: string): boolean {
  if (arguments.length !== 2) {
    throw new Error(`La saisie doit comporter exactement deux arguments`);
  }

  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error(`Chaque saisie doit être une chaîne de caractère`);
  }

  const normalize = (str: string) =>
    str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");

  if (normalize(str1).length !== normalize(str2).length) return false;

  return normalize(str1) === normalize(str2);
}

const str1: string = "Pablo Picasso";
const str2: string = "Pascal Obispo";
let anagrameOrNot = isAnagram(str1, str2);
console.log(anagrameOrNot);

// *******************************

// 🔠 5. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"

// *******************************

function capitalizeFirstLetter(sentence: string): string {
  if (typeof sentence !== "string") {
    throw new Error(`La saisie doit être une chaîne de caractères`);
  }

  let words: string[] = sentence.toLowerCase().split(" ");

  console.info(words);

  for (let i = 0; i < words.length; i++)
    if (words[i].length > 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

  console.info(words);

  return words.join(" ");
}

let sentence: string = "bonjour ludovic";
let capitalize: string = capitalizeFirstLetter(sentence);
console.log(capitalize);

// *******************************

// 🔠 5bis. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"

// *******************************

function capitalizeEachWord(sentence: string): string {
  if (typeof sentence !== "string") {
    throw new Error(`La saisie doit être une chaîne de caractère`);
  }

  return sentence
    .toLocaleLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
    .join(" ");
}

let sentence2: string = "hello everybody !";
let capitalize2: string = capitalizeEachWord(sentence2);
console.log(capitalize2);

// *********************************************

// 🧠 6. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.

// ************************************************

function improvedMultiplicationTable(n: number): string[][] {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  const arrayTable: string[][] = [];

  for (let i = 1; i <= n; i++) {
    const row: string[] = [];
    for (let j = 1; j <= 10; j++) {
      row.push(`${i} x ${j} = ${i * j}`);
    }
    arrayTable.push(row);
    console.log(row.join(" | "));
  }
  return arrayTable;
}

let number: number = 5;
improvedMultiplicationTable(number);

// *********************************************

// 🧠 6bis. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.

// ************************************************

function improvedMultiplicationTable2(number: number): string[][] {
  if (!Number.isInteger(number) || number < 1) {
    throw new Error(`La saisie doit être un nombre entier et positif`);
  }

  const arrayTable: string[][] = [];

  let i = 1;

  while (i <= number) {
    const row: string[] = [];
    let j = 1;
    while (j <= 10) {
      const row: string[] = [];
      row.push(`${i} x ${j} = ${i * j}`);
      j++;
    }
    arrayTable.push(row);
    console.log(row.join(" | "));
    i++;
  }
  return arrayTable;
}

let num: number = 9;
improvedMultiplicationTable2(num);

// *********************************************

// 📊 7. Calcul de la moyenne
// Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
// 📌 Bonus : Arrondir à 2 décimales.

// *********************************************

function average(tabNumber: number[]): number {
  if (!Array.isArray(tabNumber) || tabNumber.length < 2) {
    throw new Error(
      `La saisie doit être un tableau contenant à minima deux nombres`
    );
  }

  let sum: number = 0;

  for (let i = 0; i < tabNumber.length; i++) {
    sum = tabNumber[i] + sum;
  }
  return Math.round((sum / tabNumber.length) * 100) / 100;
}

let tabNumber: number[] = [58, 24.25645654, 180.954, 125, 198, 25];
let numbersAverage: number = average(tabNumber);
console.log(numbersAverage);

// *********************************************

// 📊 7bis. Calcul de la moyenne
// Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
// 📌 Bonus : Arrondir à 2 décimales.

// *********************************************

function average2(tabNumber: number[]): number {
  if (!Array.isArray(tabNumber) || tabNumber.length < 2) {
    throw new Error(
      `La saisie doit être un tableau comportant à minima deux nombres`
    );
  }

  let sum: number = 0;

  let i = 0;

  while (i < tabNumber.length) {
    sum += tabNumber[i];
    i++;
  }
  return Math.round((sum / tabNumber.length) * 100) / 100;
}

let tabNumber2: number[] = [58, 24.25645654, 180.954, 125, 198, 25];
let numbersAverage2: number = average2(tabNumber2);
console.log(numbersAverage2);

// ********************************************

// 📦 8. Compresser une chaîne (Run-length encoding)
// Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
// 📌 Exemple : "aaabbc" → "a3b2c1"

// ********************************************

function compressAString(str: string): string {
  if (typeof str !== "string") {
    throw new Error(`La saisie doît être une chaîne de caractères`);
  }

  let compressed: string = "";
  let count: number = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  return compressed;
}

let string: string = "aaabbc";
let compressed: string = compressAString(string);
console.log(compressed);

// ********************************************

// 📦 8bis. Compresser une chaîne (Run-length encoding)
// Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
// 📌 Exemple : "aaabbc" → "a3b2c1"

// ********************************************

function compressAString2(string: string): string {
  if (typeof string !== "string") {
    throw new Error(`La saisie doit être une chaîne de caractères`);
  }

  let compressed: string = "";
  let count: number = 1;

  let i = 0;

  while (i < string.length) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      compressed += string[i] + count;
      count = 1;
    }
    i++;
  }
  return compressed;
}

let string2: string = "aaabbcdd";
let compressString2: string = compressAString2(string2);
console.log(compressString2);
