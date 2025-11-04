// *******************************

// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// *******************************

function sumOfDiggitsEvenNumbers(NB: number): number {
  if (!Number.isInteger(NB)) {
    throw new Error(`La saisie doît être un nombre entier`);
  }

  let sum: number = 0;
  let NBString: string = NB.toString();

  for (let i = 0; i < NBString.length; i++) {
    let digit: number = parseInt(NBString[i]);
    if (digit % 2 === 0) {
      sum += digit;
    }
  }
  return sum;
}

let NB = 10024;
let sumEvenNum: number = sumOfDiggitsEvenNumbers(NB);
console.log(sumEvenNum);

// *******************************

// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// *******************************

function sumOfDiggitsEvenNumbers2(num01: number): number {
  if (!Number.isInteger(num01)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let sum: number = 0;
  let numString: string = num01.toString();

  let i = 0;
  while (i < numString.length) {
    let digit: number = parseInt(numString[i]);
    if (digit % 2 === 0) {
      sum += digit;
    }
    i++;
  }
  return sum;
}

let num01: number = 1024;
let sumEvenNum1: number = sumOfDiggitsEvenNumbers2(num01);
console.log(sumEvenNum1);
