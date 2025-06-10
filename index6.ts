// ******

import { number } from "joi";

// 1. Nombre de chiffres
// Écris une fonction qui retourne le nombre de chiffres dans un entier donné.

// Exemple : 12345 → 5

// ******

function numberOfDigits(nb: number): number {
  if (!Number.isInteger(nb)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  if (nb === 0) {
    return 1;
  }

  nb = Math.abs(nb);

  let count: number = 0;

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

function reverseAString(str: string): string {
  if (typeof str !== "string") {
    throw new Error("La saisie doit être une chaîne de caractères");
  }

  let newString: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseAString("Ludovic"));

// 3. Table de multiplication complète
// Écris une fonction qui affiche toutes les tables de 1 à 10 (10 lignes par table).

// ******************

function multiplicationTable(): string {
  let multiplicationTableLine: string = "";

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      multiplicationTableLine += `${i} * ${j} = ${i * j} \n`;
    }
    multiplicationTableLine += `\n`;
  }
  return multiplicationTableLine;
}

console.log(multiplicationTable());

// 4. Somme des chiffres
// Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.

// Exemple : 123 → 1 + 2 + 3 = 6

// **************************

function sumOfDigits(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let sum: number = 0;
  let stringifiedNbr: string = Math.abs(nbr).toString();

  for (let i = 0; i < stringifiedNbr.length; i++) {
    sum += parseInt(stringifiedNbr[i]);
  }
  return sum;
}

console.log(sumOfDigits(1515));
console.log(sumOfDigits(-15));

// 5. Nombre premier
// Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).

// **************************

function isPrime(nbr: number): boolean {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  } else if (nbr < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(nbr); i++) {
      if (nbr % i === 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(16));

// 6. Compter les lettres
// Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).

// **************************

function countLetters(str: string): number {
  if (typeof str !== "string") {
    throw new Error(`La saisie doit être une chaîne de caractères`);
  }
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (/\p{L}/u.test(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countLetters("Ludovic à la plage"));
console.log(countLetters("654654565"));
console.log(countLetters("14565 1321 46565"));
console.log(countLetters("456456 ??..!!@@@"));
console.log(countLetters("éàéèù"));

// 7. Mot le plus long
// Écris une fonction qui retourne le mot le plus long dans une phrase.

// Exemple : "Bonjour tout le monde" → "Bonjour"

// *****************************

function longestWord(str: string): string {
  const words: string[] | null = str.match(/[a-zA-ZÀ-ÿ0-9]+/g);

  if (!words) {
    throw new Error(`La saisie doit être une chaîne de caractères`);
  }

  let largest: string = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > largest.length) {
      largest = words[i];
    }
  }
  return largest;
}

console.log(longestWord("Rome est une ville attractive"));

// 8. Filtrer les impairs
// Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.

// ************************************************

function filterOddNumbers(nbr: number[]): number[] {
  if (!Array.isArray(nbr) || nbr.length < 2) {
    throw new Error("La saisie doit comporter à minima deux chiffres");
  }

  const oddNumbers: number[] = [];
  for (let i = 0; i < nbr.length; i++) {
    if (nbr[i] % 2 !== 0) {
      oddNumbers.push(nbr[i]);
    }
  }
  return oddNumbers;
}

console.log(filterOddNumbers([25, 22, 16, 81, 80]));
