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

{
  /*
🔠 5. Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
*/
}

function capitalizeEachWord(string: string): string {
  if (typeof string !== "string") {
    throw new Error(`La saisie d'entrée doit être une chaîne de caractères`);
  }

  let splitString: string[] = string.toLowerCase().split(" ");

  for (let i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
  }
  return splitString.join(" ");
}

let string = "we are the world";
let titleCase = capitalizeEachWord(string);
console.log(titleCase);

{
  /*
🔠 5bis Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
*/
}

function capitalizeEachWord2(string2: string): string {
  if (typeof string2 !== "string") {
    throw new Error(`La saisie d'entrée doit être un chaîne de caractères`);
  }

  let splitString2: string[] = string2.toLowerCase().split(" ");

  let i = 0;

  while (i < splitString2.length) {
    splitString2[i] =
      splitString2[i].charAt(0).toUpperCase() + splitString2[i].substring(1);
    i++;
  }

  return splitString2.join(" ");
}

let string2 = "we are the world";
let titleCase2 = capitalizeEachWord2(string2);
console.log(titleCase2);

{
  /*
🔠 5ter Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
*/
}

function capitalizeEachWord3(sentence: string): string {
  if (typeof sentence !== "string") {
    throw new Error(`La saisie d'entrée doit être une chaîne de caractères`);
  }

  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}

let sentence = "we are the world";
let titleCase3: string = capitalizeEachWord3(sentence);
console.log(titleCase3);

{
  /*
  6. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
  */
}

function improvedMultiplicationTable(numInt: number): string[][] {
  if (!Number.isInteger(numInt)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  const tables: string[][] = [];

  for (let i = 1; i <= numInt; i++) {
    const row: string[] = [];
    for (let j = 1; j <= 10; j++) {
      row.push(`${i} x ${j} = ${i * j}`);
    }
    tables.push(row);
  }
  return tables;
}

let numInt = 5;
let twoArrayMultiplicationTable: string[][] =
  improvedMultiplicationTable(numInt);
console.log(twoArrayMultiplicationTable);

{
  /*
  6bis. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
  */
}

function improvedMultiplicationTable2(numInteger: number): string[][] {
  if (!Number.isInteger(numInteger)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  const tables: string[][] = [];

  let i = 1;
  while (i <= numInteger) {
    const row: string[] = [];
    let j = 1;
    while (j <= 10) {
      row.push(`${i} x ${j} = ${i * j}`);
      j++;
    }

    tables.push(row);
    i++;
  }
  return tables;
}

let numInteger = 7;
let twoArrayMultiplicationTable2: string[][] =
  improvedMultiplicationTable2(numInteger);
console.log(twoArrayMultiplicationTable2);

{
  /*
📊 7. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.

*/
}

function averageArray(arrayNumbers: number[]): number {
  if (!Array.isArray(arrayNumbers)) {
    throw new Error(`La saisie doit être un tableau`);
  }

  if (arrayNumbers.length < 2) {
    throw new Error(`La saisie doit comporter à minima deux éléments`);
  }

  const arrayElementsType = arrayNumbers.every((element) =>
    typeof element === "number" ? true : false
  );

  if (!arrayElementsType) {
    throw new Error(`Chaque élément du tableau doit être un nombre`);
  }

  let sum: number = 0;

  for (let i = 0; i < arrayNumbers.length; i++) {
    sum = sum + arrayNumbers[i];
  }
  const average = sum / arrayNumbers.length;
  return Math.round(average * 100) / 100;
}

let arrayNumbers = [58.228, 53.12321313, 55.22569, 75.12582];
let averageNumbers: number = averageArray(arrayNumbers);
console.log(averageNumbers);

{
  /*
📊 7bis. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.

*/
}

function averageArray2(arrayNumbers2: number[]): number {
  if (!Array.isArray(arrayNumbers2) || arrayNumbers2.length < 2) {
    throw new Error(
      `La saisie d'entrée doit être un tableau comportant à minima deux éléments`
    );
  }

  const arrayElementsType = arrayNumbers2.every((element) =>
    typeof element === "number" ? true : false
  );

  if (!arrayElementsType) {
    throw new Error(`Chaque élément du tableau doit être un nombre `);
  }

  let sum: number = 0;

  let i = 0;

  while (i < arrayNumbers2.length) {
    sum += arrayNumbers2[i];
    i++;
  }
  const average = sum / arrayNumbers2.length;
  return Math.round(average * 100) / 100;
}

let arrayNumbers2 = [102.24, 105.12355, 109.45654];
let averageNumbers2: number = averageArray2(arrayNumbers2);
console.log(averageNumbers2);

{
  /*
📦 8. Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"

*/
}

function stringCompression(string: string): string {
  if (typeof string !== "string") {
    throw new Error(`La saisie d'entrée doit être une chaîne de caractères`);
  }

  let output: string = "";
  let count: number = 0;

  for (let i = 0; i < string.length; i++) {
    count++;
    if (string[i] !== string[i + 1]) {
      output += string[i] + count;
      count = 0;
    }
  }
  return output;
}

let characters: string = "aaabbc";
let compressAString: string = stringCompression(characters);
console.log(compressAString);

{
  /*
📦 8bis. Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"

*/
}

function stringCompression2(characters: string): string {
  if (typeof characters !== "string") {
    throw new Error(`La saisie d'entrée doit être un chaîne de caractères`);
  }

  let output: string = "";
  let count: number = 0;

  let i = 0;

  while (i < characters.length) {
    count++;
    if (characters[i] !== characters[i + 1]) {
      output += characters[i] + count;
      count = 0;
    }
    i++;
  }
  return output;
}

let characters01 = "bbbbccdd";
let compressAString2 = stringCompression2(characters01);
console.log(compressAString2);

{
  /*

🎯 9. Trouver le deuxième plus grand nombre
Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
📌 Exemple : [4, 8, 15, 16, 23, 42] → 23

*/
}

function secondBiggestNumber(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length < 2) {
    throw new Error(
      `La saisie d'entrée doit être un tableau comportant à minima deux éléments`
    );
  }

  const arrayElementsType = nums.every((num) =>
    typeof num === "number" ? true : false
  );

  if (!arrayElementsType) {
    throw new Error(`Chaque élément du tableau doit être un nombre`);
  }

  let sortedNums: number[] = nums.sort((a, b) => a - b);
  let max: number = sortedNums[sortedNums.length - 1];
  let secondNumber: number | null = null;

  for (let i = sortedNums.length - 2; i >= 0; i--) {
    if (sortedNums[i] < max) {
      secondNumber = sortedNums[i];
      break;
    }
  }

  if (secondNumber === null) {
    throw new Error(`Il n'y a pas de seconde valeur distincte`);
  }

  return secondNumber;
}

let nums = [122, 159, 159, 162, 112, 150, 105];
let secondTallestNumber: number = secondBiggestNumber(nums);
console.log(secondTallestNumber);

{
  /*

🎯 9bis. Trouver le deuxième plus grand nombre
Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
📌 Exemple : [4, 8, 15, 16, 23, 42] → 23

*/
}

function secondBiggestNumber2(nums2: number[]): number {
  if (!Array.isArray(nums2) || nums2.length < 2) {
    throw new Error(
      `La saisie d'entrée doit être un tableau comportant à minima deux éléments`
    );
  }

  const nums2ElementsType = nums2.every((num) =>
    typeof num === "number" ? true : false
  );

  if (!nums2ElementsType) {
    throw new Error(`Chaque élément du tableau doit être un nombre`);
  }

  let sortedNums2: number[] = nums2.sort((a, b) => a - b);
  let max: number = sortedNums2[sortedNums2.length - 1];
  let secondNumber: number | null = null;

  let i = sortedNums2.length - 2;

  while (i >= 0) {
    if (sortedNums2[i] < max) {
      secondNumber = sortedNums2[i];
      break;
    }
    i--;
  }

  if (secondNumber === null) {
    throw new Error(`Il n'y a pas de deuxième plus grande valeur distincte`);
  }

  return secondNumber;
}

let num2 = [12, 26, 28, 69, 80, 92, 59];
let secondTallestNumber2: number = secondBiggestNumber2(num2);
console.log(secondTallestNumber2);
