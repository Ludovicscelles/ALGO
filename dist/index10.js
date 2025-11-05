"use strict";
// *******************************
// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// *******************************
function sumOfDiggitsEvenNumbers(NB) {
    if (!Number.isInteger(NB)) {
        throw new Error(`La saisie doît être un nombre entier`);
    }
    let sum = 0;
    let NBString = NB.toString();
    for (let i = 0; i < NBString.length; i++) {
        let digit = parseInt(NBString[i]);
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    return sum;
}
let NB = 10024;
let sumEvenNum = sumOfDiggitsEvenNumbers(NB);
console.log(sumEvenNum);
// *******************************
// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// *******************************
function sumOfDiggitsEvenNumbers2(num01) {
    if (!Number.isInteger(num01)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let sum = 0;
    let numString = num01.toString();
    let i = 0;
    while (i < numString.length) {
        let digit = parseInt(numString[i]);
        if (digit % 2 === 0) {
            sum += digit;
        }
        i++;
    }
    return sum;
}
let num01 = 1024;
let sumEvenNum1 = sumOfDiggitsEvenNumbers2(num01);
console.log(sumEvenNum1);
{
    /*
  🔁 2. Inverser un nombre
  Écris une fonction qui prend un entier et retourne son inverse.
  📌 Exemple : 1234 → 4321
  (sans convertir en string si tu veux un vrai défi)
  */
}
function reverseANumber(nToReverse) {
    if (!Number.isInteger(nToReverse)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let absNToReverse = Math.abs(nToReverse);
    let reversedNumber = 0;
    while (absNToReverse > 0) {
        reversedNumber = reversedNumber * 10 + (absNToReverse % 10);
        absNToReverse = Math.floor(absNToReverse / 10);
    }
    return nToReverse < 0 ? -reversedNumber : reversedNumber;
}
console.log(reverseANumber(123));
console.log(reverseANumber(-923));
