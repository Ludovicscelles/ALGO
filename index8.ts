// *********************

import { number } from "joi";
import { isWhiteSpaceLike } from "typescript";

// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// ****************************

function sumEvenNumbers2(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  const nbrStr: string = nbr.toString();
  let sum: number = 0;

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

function sumEvenDiggit(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  const nbrStr: string = nbr.toString();
  let sum: number = 0;

  for (const element of nbrStr) {
    let digit: number = parseInt(element);
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

function reverseANumber(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let absNbr: number = Math.abs(nbr);

  const isNegative: boolean = nbr < 0;

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

function reverseANumber2(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  const isNegative: boolean = nbr < 0;

  let absNbr: number = Math.abs(nbr);

  let revNumber: number = 0;

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

function hcf(nbr1: number, nbr2: number): number {
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
  }

  let absNbr1: number = Math.abs(nbr1);
  let absNbr2: number = Math.abs(nbr2);

  while (absNbr2 !== 0) {
    const temp: number = absNbr2;
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

function hcf2(nbr1: number, nbr2: number): number {
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
  }

  let absNbr1: number = Math.abs(nbr1);
  let absNbr2: number = Math.abs(nbr2);

  for (; absNbr2 !== 0; ) {
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

function hcf3(nbr1: number, nbr2: number): number {
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
  }

  let absNbr1: number = Math.abs(nbr1);
  let absNbr2: number = Math.abs(nbr2);

  let hcf: number = 1;
  const min: number = Math.min(absNbr1, absNbr2);

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

function isAnagram(str1: string, str2: string): boolean {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("La saisie doit comporter deux chaînes de caractères");
  }

  const clean = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f\s]/g, "");

  const S1: string = clean(str1);
  const S2: string = clean(str2);

  if (S1.length !== S2.length) return false;

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

function capitalizeEachWord(sentence: string): string {
  if (typeof sentence !== "string") {
    throw new Error(`La saisie doit être une chaîne de caractères`);
  }

  const words: string[] = sentence.split(" ");

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

function capitalizeEachWord2(sentence: string) {
  if (typeof sentence !== "string") {
    throw new Error(`La saisie doit être une chaîne de caractères`);
  }

  return sentence
    .split(" ")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : " "))
    .join(" ");
}

console.log(capitalizeEachWord2("black and white"));
