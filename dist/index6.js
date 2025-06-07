"use strict";
// ******
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Nombre de chiffres
// Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
// Exemple : 12345 → 5
// ******
function numberOfDigits(nb) {
    if (!Number.isInteger(nb)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    if (nb === 0) {
        return 1;
    }
    nb = Math.abs(nb);
    let count = 0;
    for (let i = nb; i > 0; i = Math.floor(i / 10)) {
        count++;
    }
    return count;
}
console.log(numberOfDigits(14546513));
console.log(numberOfDigits(0));
console.log(numberOfDigits(-61));
// ***********
// 2. Inverser une chaîne
// Écris une fonction qui retourne une chaîne inversée.
// Exemple : "bonjour" → "ruojnob"
// ************
function reverseAString(str) {
    if (typeof str !== "string") {
        throw new Error("La saisie doit être une chaîne de caractères");
    }
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseAString("Ludovic"));
