// *********************

import { string } from "joi";

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
