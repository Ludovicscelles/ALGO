// *********************

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
