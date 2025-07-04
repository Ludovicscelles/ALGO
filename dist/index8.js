"use strict";
// *********************
Object.defineProperty(exports, "__esModule", { value: true });
// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// ****************************
function sumEvenNumbers2(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const nbrStr = nbr.toString();
    let sum = 0;
    for (let i = 0; i < nbrStr.length; i++) {
        const digit = parseInt(nbrStr[i]);
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    return sum;
}
console.log(sumEvenNumbers2(1212));
// *********************
// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// ****************************
function sumEvenDiggit(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const nbrStr = nbr.toString();
    let sum = 0;
    for (const element of nbrStr) {
        let digit = parseInt(element);
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    return sum;
}
console.log(sumEvenDiggit(2489));
// *********************
// 🔁 2. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)
// *******************************
function reverseANumber(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let absNbr = Math.abs(nbr);
    const isNegative = nbr < 0;
    let revNumber = 0;
    for (; absNbr > 0; absNbr = Math.floor(absNbr / 10)) {
        revNumber = revNumber * 10 + (absNbr % 10);
    }
    return isNegative ? -revNumber : revNumber;
}
console.log(reverseANumber(19));
// *********************
// 🔁 2. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)
// *******************************
function reverseANumber2(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const isNegative = nbr < 0;
    let absNbr = Math.abs(nbr);
    let revNumber = 0;
    while (absNbr > 0) {
        revNumber = revNumber * 10 + (absNbr % 10);
        absNbr = Math.floor(absNbr / 10);
    }
    return isNegative ? -revNumber : revNumber;
}
console.log(reverseANumber2(19));
console.log(reverseANumber2(-19));
// ****************************
// 🧮 3. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6
// ******************************
function hcf(nbr1, nbr2) {
    if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
        throw new Error(`La saisie doit comporter deux nombres entiers`);
    }
    let absNbr1 = Math.abs(nbr1);
    let absNbr2 = Math.abs(nbr2);
    while (absNbr2 !== 0) {
        const temp = absNbr2;
        absNbr2 = absNbr1 % absNbr2;
        absNbr1 = temp;
    }
    return absNbr1;
}
console.log(hcf(300, 90));
// ****************************
// 🧮 3bis. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6
// ******************************
function hcf2(nbr1, nbr2) {
    if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
        throw new Error(`La saisie doit comporter deux nombres entiers`);
    }
    let absNbr1 = Math.abs(nbr1);
    let absNbr2 = Math.abs(nbr2);
    for (; absNbr2 !== 0;) {
        const temp = absNbr2;
        absNbr2 = absNbr1 % absNbr2;
        absNbr1 = temp;
    }
    return absNbr1;
}
console.log(hcf2(7, 28));
// ****************************
// 🧮 3ter. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6
// ******************************
function hcf3(nbr1, nbr2) {
    if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
        throw new Error(`La saisie doit comporter deux nombres entiers`);
    }
    let absNbr1 = Math.abs(nbr1);
    let absNbr2 = Math.abs(nbr2);
    let hcf = 1;
    const min = Math.min(absNbr1, absNbr2);
    for (let i = 1; i <= min; i++) {
        if (absNbr1 % i === 0 && absNbr2 % i === 0) {
            hcf = i;
        }
    }
    return hcf;
}
console.log(hcf3(303, 27));
// ******************************
// 🔤 4. Anagramme
// Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
// 📌 Exemple : "listen" et "silent" → ✅
// ******************************
function isAnagram(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw new Error("La saisie doit comporter deux chaînes de caractères");
    }
    const clean = (str) => str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f\s]/g, "");
    const S1 = clean(str1);
    const S2 = clean(str2);
    if (S1.length !== S2.length)
        return false;
    return S1.split("").sort().join("") === S2.split("").sort().join("");
}
console.log(isAnagram("Chien", "niche"));
console.log(isAnagram("Chién", "niche"));
console.log(isAnagram("cien", "niche"));
console.log(isAnagram("Pascal Obispo", "Pablo Picasso"));
// ******************************
// 🔠 5. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
// ******************************
function capitalizeEachWord(sentence) {
    if (typeof sentence !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(" ");
}
console.log(capitalizeEachWord("we are the world"));
// ******************************
// 🔠 5bis. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
// ******************************
function capitalizeEachWord2(sentence) {
    if (typeof sentence !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    return sentence
        .split(" ")
        .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : " "))
        .join(" ");
}
console.log(capitalizeEachWord2("black and white"));
// ******************************
// 🧠 6. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
// ******************************
function multiplicationTable(n) {
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`La saisie doit être un nombre entier positif`);
    }
    const arrayTable = [];
    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(`${i} x ${j} = ${i * j}`);
        }
        arrayTable.push(row);
    }
    return arrayTable;
}
console.log(multiplicationTable(4));
// ******************************
// 🧠 6bis. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
// ******************************
function multiplicationTable2(n) {
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`La saisie doit comporter un nombre entier et positif`);
    }
    const arrayTable = [];
    let i = 1;
    while (i <= n) {
        const row = [];
        let j = 1;
        while (j <= 10) {
            row.push(`${i} x ${j} = ${i * j}`);
            j++;
        }
        arrayTable.push(row);
        i++;
    }
    return arrayTable;
}
console.log(multiplicationTable2(4));
