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
