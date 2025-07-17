// *******************************

// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// *******************************

function sumEvenDigit(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let sum: number = 0;
  let nbrStr: string = nbr.toString();

  for (let i = 0; i < nbrStr.length; i++) {
    let digit: number = parseInt(nbrStr[i]);
    if (digit % 2 === 0) {
      sum += digit;
    }
  }
  return sum;
}

let nbr: number = 11;
let sumEvenNumbers: number = sumEvenDigit(nbr);
console.log(sumEvenNumbers);

// *******************************

// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// *******************************

function sumEvenDigit2(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let sum: number = 0;
  let nbrStr: string = nbr.toString();

  let i = 0;

  while (i < nbrStr.length) {
    let digit: number = parseInt(nbrStr[i]);
    if (digit % 2 === 0) {
      sum += digit;
    }
    i++;
  }
  return sum;
}

let nbr2: number = 1212;
let sumEvenNumbers2: number = sumEvenDigit2(nbr2);
console.log(sumEvenNumbers2);

// *******************************

// 🔁 2. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)

// *******************************

function reverseNumber(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let absNbr: number = Math.abs(nbr);

  let reverseNumber: number = 0;

  while (absNbr > 0) {
    reverseNumber = (absNbr % 10) + reverseNumber * 10;
    absNbr = Math.floor(absNbr/10);
  }
  return nbr < 0 ? -reverseNumber : reverseNumber;
}

let nbrToReverse: number = -1234;
let reversedNumber: number = reverseNumber(nbrToReverse);
console.log(reversedNumber);
