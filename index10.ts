// *******************************

import { boolean } from "joi";
import { nextTick } from "process";

// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// *******************************

function sumOfDiggitsEvenNumbers(NB: number): number {
  if (!Number.isInteger(NB)) {
    throw new Error(`La saisie doît être un nombre entier`);
  }

  let sum: number = 0;
  let NBString: string = NB.toString();

  for (let i = 0; i < NBString.length; i++) {
    let digit: number = parseInt(NBString[i]);
    if (digit % 2 === 0) {
      sum += digit;
    }
  }
  return sum;
}

let NB = 10024;
let sumEvenNum: number = sumOfDiggitsEvenNumbers(NB);
console.log(sumEvenNum);

// *******************************

// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// *******************************

function sumOfDiggitsEvenNumbers2(num01: number): number {
  if (!Number.isInteger(num01)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let sum: number = 0;
  let numString: string = num01.toString();

  let i = 0;
  while (i < numString.length) {
    let digit: number = parseInt(numString[i]);
    if (digit % 2 === 0) {
      sum += digit;
    }
    i++;
  }
  return sum;
}

let num01: number = 1024;
let sumEvenNum1: number = sumOfDiggitsEvenNumbers2(num01);
console.log(sumEvenNum1);

{
  /* 
🔁 2. Inverser un nombre
Écris une fonction qui prend un entier et retourne son inverse.
📌 Exemple : 1234 → 4321
(sans convertir en string si tu veux un vrai défi)
*/
}

function reverseANumber(nToReverse: number): number {
  if (!Number.isInteger(nToReverse)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let absNToReverse: number = Math.abs(nToReverse);
  let reversedNumber: number = 0;

  while (absNToReverse > 0) {
    reversedNumber = reversedNumber * 10 + (absNToReverse % 10);
    absNToReverse = Math.floor(absNToReverse / 10);
  }
  return nToReverse < 0 ? -reversedNumber : reversedNumber;
}

console.log(reverseANumber(123));
console.log(reverseANumber(-923));

{
  /* 
🔁 2bis. Inverser un nombre
Écris une fonction qui prend un entier et retourne son inverse.
📌 Exemple : 1234 → 4321
(sans convertir en string si tu veux un vrai défi)
*/
}

function reverseANumberBis(nToReverse2: number): number {
  if (!Number.isInteger(nToReverse2)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let absNToReverse2: number = Math.abs(nToReverse2);
  let reversedNumber2: number = 0;

  for (; absNToReverse2 > 0; absNToReverse2 = Math.floor(absNToReverse2 / 10)) {
    reversedNumber2 = reversedNumber2 * 10 + (absNToReverse2 % 10);
  }
  return nToReverse2 < 0 ? -reversedNumber2 : reversedNumber2;
}
console.log(reverseANumberBis(123));
console.log(reverseANumberBis(-923));

{
  /*
  🧮 3. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
*/
}

function grandCommunDivisor(number01: number, number02: number): number {
  if (arguments.length !== 2) {
    throw new Error(
      `La saisie d'entrée doit comporter exactement deux arguments`
    );
  }
  if (!Number.isInteger(number01) || !Number.isInteger(number02)) {
    throw new Error(`Chaque saisie doit être un nombre entier`);
  }

  let smaller: number = Math.min(number01, number02);
  let gcd: number = 1;

  for (let i = 1; i <= smaller; i++) {
    if (number01 % i === 0 && number02 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

let number01 = 240;
let number02 = 68;
let BCD: number = grandCommunDivisor(number01, number02);
console.log(BCD);

{
  /*
  🧮 3bis. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
*/
}

function grandCommunDivisorBis(number03: number, number04: number): number {
  if (arguments.length !== 2) {
    throw new Error(
      `La saisie d'entrée doit comporter exactement deux arguments`
    );
  }

  if (!Number.isInteger(number03) || !Number.isInteger(number04)) {
    throw new Error(`Chaque saisie doit être un nombre entier`);
  }

  let smaller: number = Math.min(number03, number04);
  let gcd: number = 1;

  let i = 1;

  while (i <= smaller) {
    if (number03 % i === 0 && number04 % i === 0) {
      gcd = i;
    }
    i++;
  }
  return gcd;
}

let number04 = 266;
let number03 = 532;
let BCD2 = grandCommunDivisorBis(number03, number04);
console.log(BCD2);

{
  /*
  🧮 3ter. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
*/
}

function myFunctionGCD(num001: number, num002: number): number {
  if (arguments.length !== 2) {
    throw new Error(
      `La saisie d'entrée doit comporter exactement deux arguments`
    );
  }

  if (!Number.isInteger(num001) || !Number.isInteger(num002)) {
    throw new Error(`Chaque saisie doit être un nombre entier`);
  }

  if (num002 === 0) {
    return num001;
  }

  return myFunctionGCD(num002, num001 % num002);
}

let num001 = 9;
let num002 = 6;
let resultGCD: number = myFunctionGCD(num001, num002);
console.log(
  `Le plus grand diviseur commun de ${num001} et de ${num002} est ${resultGCD}`
);

{
  /*
  🧮 3quater. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
*/
}

function myEuclidFunctionGCD(num003: number, num004: number): number {
  if (arguments.length !== 2) {
    throw new Error(
      `La saisie d'entrée doit comporter exactement deux arguments`
    );
  }
  if (!Number.isInteger(num003) || !Number.isInteger(num004)) {
    throw new Error(`Chaque saisie doit être un nombre entier`);
  }

  while (num004 !== 0) {
    const temp: number = num003 % num004;
    num003 = num004;
    num004 = temp;
  }

  return num003;
}

let num003 = 248;
let num004 = 372;
let resultEuclidCGD: number = myEuclidFunctionGCD(num003, num004);
console.log(
  `Le plus grand diviseur commun de ${num003} et ${num004} est ${resultEuclidCGD}`
);

{
  /*
🔤 4. Anagramme
Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
📌 Exemple : "listen" et "silent" → ✅
*/
}

function areAnagram(str1: string, str2: string): boolean {
  if (arguments.length !== 2) {
    throw new Error(
      `La saisie d'entrée doit comporter exactement deux arguments `
    );
  }
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error(`Chaque saisie doit être une chaîne de caractères`);
  }

  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();

  let lengthStr1: number = str1.length;
  let lengthStr2: number = str2.length;

  if (lengthStr1 != lengthStr2) return false;

  let sortedStr1: string = str1.split("").sort().join("");
  let sortedStr2: string = str2.split("").sort().join("");

  for (let i = 0; i < lengthStr1; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }
  return true;
}

let str1 = "Pascal Obispo";
let str2 = "Pablo Picasso";

if (areAnagram(str1, str2)) {
  console.log("Les deux chaînes de caractères sont des anagrammes");
} else {
  console.log("Les deux chaînes de caractères ne sont pas des anagrammes");
}

{
  /*
🔤 4bis. Anagramme
Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
📌 Exemple : "listen" et "silent" → ✅
*/
}

function areAnagram2(str3: string, str4: string): boolean {
  if (arguments.length !== 2) {
    throw new Error(
      `La saisie d'entrée doit comporter exactement deux arguments`
    );
  }

  if (typeof str3 !== "string" || typeof str4 !== "string") {
    throw new Error(`Chaque saisie doit être une chaîne de caractères`);
  }

  str3 = str3.replace(/\s+/g, "").toLowerCase();
  str4 = str4.replace(/\s+/g, "").toLowerCase();

  let lengthStr3: number = str3.length;
  let lengthStr4: number = str4.length;

  if (lengthStr3 !== lengthStr4) {
    return false;
  }

  let sortedStr3: string = str3.split("").sort().join("");
  let sortedStr4: string = str4.split("").sort().join("");

  let i = 0;

  while (i < lengthStr3) {
    if (sortedStr3[i] !== sortedStr4[i]) {
      return false;
    }
    i++;
  }
  return true;
}

let str3 = "Pascal Obispo";
let str4 = "Pablo Picasso";

if (areAnagram2(str3, str4)) {
  console.log("Les deux chaînes de caractères sont des anagrammes");
} else {
  console.log("Les deux chaînes de caractères ne sont pas des anagrammes");
}
