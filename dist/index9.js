"use strict";
// *******************************
// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// *******************************
function sumEvenDigit(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let sum = 0;
    let nbrStr = nbr.toString();
    for (let i = 0; i < nbrStr.length; i++) {
        let digit = parseInt(nbrStr[i]);
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    return sum;
}
let nbr = 11;
let sumEvenNumbers = sumEvenDigit(nbr);
console.log(sumEvenNumbers);
// *******************************
// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// *******************************
function sumEvenDigit2(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let sum = 0;
    let nbrStr = nbr.toString();
    let i = 0;
    while (i < nbrStr.length) {
        let digit = parseInt(nbrStr[i]);
        if (digit % 2 === 0) {
            sum += digit;
        }
        i++;
    }
    return sum;
}
let nbr2 = 1212;
let sumEvenNumbers2 = sumEvenDigit2(nbr2);
console.log(sumEvenNumbers2);
// *******************************
// 🔁 2. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)
// *******************************
function reverseNumber(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let absNbr = Math.abs(nbr);
    let reverseNumber = 0;
    while (absNbr > 0) {
        reverseNumber = (absNbr % 10) + reverseNumber * 10;
        absNbr = Math.floor(absNbr / 10);
    }
    return nbr < 0 ? -reverseNumber : reverseNumber;
}
let nbrToReverse = -1234;
let reversedNumber = reverseNumber(nbrToReverse);
console.log(reversedNumber);
// *******************************
// 🔁 2bis. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)
// *******************************
function reverseNumber2(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let absNbr = Math.abs(nbr);
    let reversedNumber = 0;
    for (; absNbr > 0; absNbr = Math.floor(absNbr / 10)) {
        reversedNumber = (absNbr % 10) + reversedNumber * 10;
    }
    return nbr < 0 ? -reversedNumber : reversedNumber;
}
let nbrToReversed = -4321;
let reversedNumber2 = reverseNumber2(nbrToReversed);
console.log(reversedNumber2);
