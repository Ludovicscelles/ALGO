"use strict";
// ***********/
Object.defineProperty(exports, "__esModule", { value: true });
// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// ***********/
function sumEvenNumbers(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const strNbr = nbr.toString();
    let sum = 0;
    for (let i = 0; i < strNbr.length; i++) {
        const digit = parseInt(strNbr[i]);
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    return sum;
}
console.log(sumEvenNumbers(1212));
console.log(sumEvenNumbers(6531159));
// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// ***********/
// Declaration de la fonction pour trouver la somme des chiffres pairs
function sumEvenNumbersWithComment(nbr) {
    // Vérification que l'entrée est un nombre entier
    // Si ce n'est pas le cas, une erreur est levée
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    // Conversion du nombre en chaîne de caractères pour itérer sur chaque chiffre
    const strNbr = nbr.toString();
    // Initialisation de la variable pour stocker la somme des chiffres pairs
    let sum = 0;
    // Boucle pour parcourir chaque caractère de la chaîne
    for (let i = 0; i < strNbr.length; i++) {
        // Conversion du caractère en nombre entier
        const digit = parseInt(strNbr[i]);
        // Vérification si le chiffre est pair
        // Si c'est le cas, il est ajouté à la somme
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    // Retourne la somme des chiffres pairs
    return sum;
}
console.log(sumEvenNumbers(1212));
console.log(sumEvenNumbers(6531159));
// 🔢 1ter. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// ***********/
function sumEvenDiggit(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const nbrStr = nbr.toString();
    let sum = 0;
    for (const element of nbrStr) {
        const digit = parseInt(element);
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    return sum;
}
console.log(sumEvenDiggit(1212));
// 🔢 1quater. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// ***********/
// Declaration de la fonction pour trouver la somme des chiffres pairs
function sumEvenDiggitWithComment(nbr) {
    // Vérification que l'entrée est un nombre entier
    // Si ce n'est pas le cas, une erreur est levée
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    // Conversion du nombre en chaîne de caractères pour itérer sur chaque chiffre
    const nbrStr = nbr.toString();
    // Initialisation de la variable pour stocker la somme des chiffres pairs
    let sum = 0;
    // Boucle for...of pour parcourir chaque caractère de la chaîne
    for (const element of nbrStr) {
        // Conversion du caractère en nombre entier
        const digit = parseInt(element);
        // Vérification si le chiffre est pair
        // Si c'est le cas, il est ajouté à la somme
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    // Retourne la somme des chiffres pairs
    return sum;
}
console.log(sumEvenDiggitWithComment(1212));
// ****************************
// 🔁 2. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)
// *************
function reverseANumber(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let number = Math.abs(nbr);
    const isNegative = nbr < 0;
    let revNumber = 0;
    while (number > 0) {
        revNumber = revNumber * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return isNegative ? -revNumber : revNumber;
}
console.log(reverseANumber(1981));
console.log(reverseANumber(-1981));
// 🔁 2bis. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)
// *************
function reverseDigits(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let number = Math.abs(nbr);
    const isNegative = nbr < 0;
    let revNumber = 0;
    for (; number > 0; number = Math.floor(number / 10)) {
        revNumber = revNumber * 10 + (number % 10);
    }
    return isNegative ? -revNumber : revNumber;
}
console.log(reverseDigits(1234));
console.log(reverseDigits(-1234));
