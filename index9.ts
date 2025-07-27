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
