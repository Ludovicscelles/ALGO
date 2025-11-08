// *******************************

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
  if (!Number.isInteger(number01) || !Number.isInteger(number02)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
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
  if (!Number.isInteger(number03) || !Number.isInteger(number04)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
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
  if (!Number.isInteger(num001) || !Number.isInteger(num002)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
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
