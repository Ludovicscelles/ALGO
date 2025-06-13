"use strict";
// ***********/
// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// ***********/
function sumOddNumbers(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const strNbr = nbr.toString();
    let sum = 0;
    for (let i = 0; i <= strNbr.length; i++) {
        const digit = parseInt(strNbr[i]);
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    return sum;
}
console.log(sumOddNumbers(1212));
console.log(sumOddNumbers(6531159));
