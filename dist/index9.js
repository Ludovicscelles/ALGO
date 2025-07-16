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
