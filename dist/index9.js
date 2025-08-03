"use strict";
// *******************************
Object.defineProperty(exports, "__esModule", { value: true });
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
let nb2 = 1212;
let sumEvenNumbers2 = sumEvenDigit2(nb2);
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
    return nbr < 0 ? -reverseNumber : reversedNumber;
}
let nbrToReversed = -4321;
let reversedNumber2 = reverseNumber2(nbrToReversed);
console.log(reversedNumber);
// *******************************
// 🧮 3. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6
// *******************************
function GCD(nbr1, nbr2) {
    if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
        throw new Error(`La saisie doit comporter deux nombres entiers`);
    }
    let smaller = Math.min(nbr1, nbr2);
    let gcd = 1;
    for (let i = 1; i <= smaller; i++) {
        if (nbr1 % i === 0 && nbr2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}
let nbr1 = 24;
let nbr2 = 8;
let result = GCD(nbr1, nbr2);
console.log(result);
// *******************************
// 🧮 3bis. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6
// *******************************
function GCD2(nb1, nb2) {
    if (!Number.isInteger(nb1) || !Number.isInteger(nb2)) {
        throw new Error(`La saisie doit comporter deux chiffres entiers`);
    }
    let smaller = Math.min(nb1, nb2);
    let gcd = 1;
    let i = 1;
    while (i <= smaller) {
        if (nb1 % i === 0 && nb2 % i === 0) {
            gcd = i;
        }
        i++;
    }
    return gcd;
}
let number1 = 242;
let number2 = 110;
let resultGCD2 = GCD2(number1, number2);
console.log(resultGCD2);
// *******************************
// 🧮 3bis. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6
// *******************************
function GCD3(nb1, nb2) {
    if (!Number.isInteger(nb1) || !Number.isInteger(nb2)) {
        throw new Error(`La saisie doit comporter deux nombres entiers`);
    }
    while (nb2 !== 0) {
        const temp = nb2;
        nb2 = nb1 % nb2;
        nb1 = temp;
    }
    return nb1;
}
let num1 = 48;
let num2 = 18;
let resultCGD3 = GCD3(num1, num2);
console.log(resultCGD3);
// *******************************
// 🔤 4. Anagramme
// Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
// 📌 Exemple : "listen" et "silent" → ✅
// *******************************
function isAnagram(str1, str2) {
    if (arguments.length !== 2) {
        throw new Error(`La saisie doit comporter exactement deux arguments`);
    }
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw new Error(`Chaque saisie doit être une chaîne de caractère`);
    }
    const normalize = (str) => str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    if (normalize(str1).length !== normalize(str2).length)
        return false;
    return normalize(str1) === normalize(str2);
}
const str1 = "Pablo Picasso";
const str2 = "Pascal Obispo";
let anagrameOrNot = isAnagram(str1, str2);
console.log(anagrameOrNot);
// *******************************
// 🔠 5. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
// *******************************
function capitalizeFirstLetter(sentence) {
    if (typeof sentence !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    let words = sentence.toLowerCase().split(" ");
    console.info(words);
    for (let i = 0; i < words.length; i++)
        if (words[i].length > 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
        }
    console.info(words);
    return words.join(" ");
}
let sentence = "bonjour ludovic";
let capitalize = capitalizeFirstLetter(sentence);
console.log(capitalize);
// *******************************
// 🔠 5bis. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
// *******************************
function capitalizeEachWord(sentence) {
    if (typeof sentence !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractère`);
    }
    return sentence
        .toLocaleLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
        .join(" ");
}
let sentence2 = "hello everybody !";
let capitalize2 = capitalizeEachWord(sentence2);
console.log(capitalize2);
// *********************************************
// 🧠 6. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
// ************************************************
function improvedMultiplicationTable(n) {
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const arrayTable = [];
    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(`${i} x ${j} = ${i * j}`);
        }
        arrayTable.push(row);
        console.log(row.join(" | "));
    }
    return arrayTable;
}
let number = 5;
improvedMultiplicationTable(number);
// *********************************************
// 🧠 6bis. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
// ************************************************
function improvedMultiplicationTable2(number) {
    if (!Number.isInteger(number) || number < 1) {
        throw new Error(`La saisie doit être un nombre entier et positif`);
    }
    const arrayTable = [];
    let i = 1;
    while (i <= number) {
        const row = [];
        let j = 1;
        while (j <= 10) {
            row.push(`${i} x ${j} = ${i * j}`);
            j++;
        }
        arrayTable.push(row);
        console.log(row.join(" | "));
        i++;
    }
    return arrayTable;
}
let num = 9;
improvedMultiplicationTable2(num);
