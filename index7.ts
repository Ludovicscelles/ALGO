// ***********/

import { number, string } from "joi";

// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// ***********/

function sumEvenNumbers(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  const strNbr = nbr.toString();
  let sum: number = 0;

  for (let i = 0; i < strNbr.length; i++) {
    const digit: number = parseInt(strNbr[i]);
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
function sumEvenNumbersWithComment(nbr: number): number {
  // Vérification que l'entrée est un nombre entier
  // Si ce n'est pas le cas, une erreur est levée
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  // Conversion du nombre en chaîne de caractères pour itérer sur chaque chiffre
  const strNbr = nbr.toString();

  // Initialisation de la variable pour stocker la somme des chiffres pairs
  let sum: number = 0;

  // Boucle pour parcourir chaque caractère de la chaîne
  for (let i = 0; i < strNbr.length; i++) {
    // Conversion du caractère en nombre entier
    const digit: number = parseInt(strNbr[i]);

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

function sumEvenDiggit(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  const nbrStr: string = nbr.toString();
  let sum: number = 0;

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
function sumEvenDiggitWithComment(nbr: number): number {
  // Vérification que l'entrée est un nombre entier
  // Si ce n'est pas le cas, une erreur est levée
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  // Conversion du nombre en chaîne de caractères pour itérer sur chaque chiffre
  const nbrStr: string = nbr.toString();
  // Initialisation de la variable pour stocker la somme des chiffres pairs
  let sum: number = 0;

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

function reverseANumber(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }
  let number = Math.abs(nbr);
  const isNegative: boolean = nbr < 0;
  let revNumber: number = 0;
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

function reverseDigits(nbr: number): number {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let number: number = Math.abs(nbr);
  const isNegative: boolean = nbr < 0;
  let revNumber: number = 0;

  for (; number > 0; number = Math.floor(number / 10)) {
    revNumber = revNumber * 10 + (number % 10);
  }

  return isNegative ? -revNumber : revNumber;
}

console.log(reverseDigits(1234));
console.log(reverseDigits(-1234));

// 🔁 2ter. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)

// *************

// Declaration de la fonction pour inverser un nombre
function reverseANumberWithComments(nbr: number): number {
  // Vérification que l'entrée est un nombre entier
  // Si ce n'est pas le cas, une erreur est levée
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }
  // Conversion du nombre en valeur absolue pour traiter les chiffres
  let number = Math.abs(nbr);

  // Initialisation d'une variable pour vérifier si le nombre est négatif
  // Si c'est le cas, le résultat final sera négatif
  const isNegative: boolean = nbr < 0;
  // Initialisation de la variable pour stocker le nombre inversé
  let revNumber: number = 0;

  // Boucle pour inverser les chiffres du nombre
  // Tant que le nombre est supérieur à 0, on continue à inverser les chiffres
  while (number > 0) {
    // On multiplie le nombre inversé par 10 et on ajoute le dernier chiffre du nombre
    // Le dernier chiffre est obtenu en utilisant l'opérateur modulo
    revNumber = revNumber * 10 + (number % 10);
    // On divise le nombre par 10 pour supprimer le dernier chiffre
    number = Math.floor(number / 10);
  }

  // Si le nombre initial était négatif, on retourne le nombre inversé en négati
  return isNegative ? -revNumber : revNumber;
}

console.log(reverseANumberWithComments(1981));
console.log(reverseANumberWithComments(-1981));

// 🔁 2quater. Inverser un nombre
// Écris une fonction qui prend un entier et retourne son inverse.
// 📌 Exemple : 1234 → 4321
// (sans convertir en string si tu veux un vrai défi)

// *************

// Declaration de la fonction pour inverser un nombre
function reverseDigitsWithComments(nbr: number): number {
  // Vérification que l'entrée est un nombre entier
  // Si ce n'est pas le cas, une erreur est levée
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  // Conversion du nombre en valeur absolue pour traiter les chiffres
  let number: number = Math.abs(nbr);
  // Initialisation d'une variable pour vérifier si le nombre est négatif
  // Si c'est le cas, le résultat final sera négatif
  const isNegative: boolean = nbr < 0;
  // Initialisation de la variable pour stocker le nombre inversé
  let revNumber: number = 0;

  // Boucle pour inverser les chiffres du nombre
  // Tant que le nombre est supérieur à 0, on continue à inverser les chiffres
  for (; number > 0; number = Math.floor(number / 10)) {
    // On multiplie le nombre inversé par 10 et on ajoute le dernier chiffre du nombre
    // Le dernier chiffre est obtenu en utilisant l'opérateur modulo
    revNumber = revNumber * 10 + (number % 10);
  }

  // Si le nombre initial était négatif, on retourne le nombre inversé en négatif
  // Sinon, on retourne le nombre inversé tel quel
  // On utilise l'opérateur ternaire pour retourner le résultat final
  // Si le nombre initial était négatif, on retourne le nombre inversé en négatif
  // Sinon, on retourne le nombre inversé tel quel
  return isNegative ? -revNumber : revNumber;
}

console.log(reverseDigitsWithComments(1234));
console.log(reverseDigitsWithComments(-1234));

// ****************************

// 🧮 3. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// ******************************

function GCD(nbr1: number, nbr2: number): number {
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers `);
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

console.log(GCD(18, 48));

// ****************************

// 🧮 3bis. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// ******************************

function GCD2(nbr1: number, nbr2: number): number {
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers `);
  }

  let absNbr1 = Math.abs(nbr1);
  let absNbr2 = Math.abs(nbr2);

  for (; absNbr2 !== 0; ) {
    const temp = absNbr2;
    absNbr2 = absNbr1 % absNbr2;
    absNbr1 = temp;
  }
  return absNbr1;
}

console.log(GCD2(18, 48));

// ****************************

// 🧮 3ter. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// ******************************

function GCD3(nbr1: number, nbr2: number): number {
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
  }
  let absNbr1 = Math.abs(nbr1);
  let absNbr2 = Math.abs(nbr2);

  let smaller = Math.min(absNbr1, absNbr2);
  let hcf = 1;

  for (let i = 1; i <= smaller; i++) {
    if (absNbr1 % i === 0 && absNbr2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

console.log(GCD3(21, 49));

// ****************************

// 🧮 3quater. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// ******************************

// Declaration de la fonction pour trouver le PGCD
function GCDWithComments(nbr1: number, nbr2: number): number {
  // Vérification que les deux entrées sont des nombres entiers
  // Si ce n'est pas le cas, une erreur est levée
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers `);
  }

  // Conversion des nombres en valeurs absolues pour éviter les problèmes avec les négatifs
  let absNbr1 = Math.abs(nbr1);
  let absNbr2 = Math.abs(nbr2);

  // Boucle pour trouver le PGCD en utilisant l'algorithme d'Euclide
  // Tant que le second nombre n'est pas égal à zéro, on continue à calculer
  while (absNbr2 !== 0) {
    // On stocke le second nombre dans une variable temporaire
    // pour pouvoir l'utiliser après avoir modifié absNbr2
    // Cette étape est nécessaire pour éviter de perdre la valeur de absNbr2
    const temp = absNbr2;

    // On calcule le reste de la division de absNbr1 par absNbr2
    // et on l'assigne à absNbr2
    // Cela permet de réduire le problème à une taille plus petite
    // jusqu'à ce que absNbr2 devienne zéro
    // Le PGCD est alors le dernier absNbr1 non nul
    // On utilise l'opérateur modulo pour obtenir le reste de la division
    // entre absNbr1 et absNbr2
    // Le reste est assigné à absNbr2 pour la prochaine itération
    absNbr2 = absNbr1 % absNbr2;

    // On met à jour absNbr1 avec la valeur temporaire de absNbr2
    // Cela permet de continuer le processus de réduction
    // jusqu'à ce que absNbr2 devienne zéro
    // Le PGCD est alors le dernier absNbr1 non nul
    absNbr1 = temp;
  }
  // Une fois que absNbr2 est égal à zéro, on retourne absNbr1
  // qui est le PGCD des deux nombres initiaux
  return absNbr1;
}

console.log(GCDWithComments(18, 48));

// ****************************

// 🧮 3quinquies. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// ******************************

// Declaration de la fonction pour trouver le PGCD
function GCD2WithComments(nbr1: number, nbr2: number): number {
  // Vérification que les deux entrées sont des nombres entiers
  // Si ce n'est pas le cas, une erreur est levée
  // Si l'un des nombres n'est pas un entier, une erreur est levée
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers `);
  }

  // Conversion des nombres en valeurs absolues pour éviter les problèmes avec les négatifs
  // On utilise Math.abs pour obtenir la valeur absolue de chaque nombre
  let absNbr1 = Math.abs(nbr1);
  let absNbr2 = Math.abs(nbr2);

  // Boucle pour trouver le PGCD en utilisant l'algorithme d'Euclide
  // Tant que le second nombre n'est pas égal à zéro, on continue à calculer
  // On utilise une boucle for pour itérer jusqu'à ce que absNbr2 devienne zéro
  for (; absNbr2 !== 0; ) {
    // On stocke le second nombre dans une variable temporaire
    // pour pouvoir l'utiliser après avoir modifié absNbr2
    // Cette étape est nécessaire pour éviter de perdre la valeur de absNbr2
    const temp = absNbr2;

    // On calcule le reste de la division de absNbr1 par absNbr2
    // et on l'assigne à absNbr2
    // Cela permet de réduire le problème à une taille plus petite
    // jusqu'à ce que absNbr2 devienne zéro
    absNbr2 = absNbr1 % absNbr2;

    // On met à jour absNbr1 avec la valeur temporaire de absNbr2
    // Cela permet de continuer le processus de réduction
    // jusqu'à ce que absNbr2 devienne zéro
    absNbr1 = temp;
  }

  // Une fois que absNbr2 est égal à zéro, on retourne absNbr1
  // qui est le PGCD des deux nombres initiaux
  // Le PGCD est le dernier absNbr1 non nul
  return absNbr1;
}

console.log(GCD2WithComments(18, 48));

// ****************************

// 🧮 3sexies. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6

// ******************************

// Declaration de la fonction pour trouver le PGCD
function GCD3WithComments(nbr1: number, nbr2: number): number {
  // Vérification que les deux entrées sont des nombres entiers
  // Si ce n'est pas le cas, une erreur est levée
  if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit comporter deux nombres entiers`);
  }

  // Conversion des nombres en valeurs absolues pour éviter les problèmes avec les négatifs
  let absNbr1 = Math.abs(nbr1);
  let absNbr2 = Math.abs(nbr2);

  // On trouve le plus petit des deux nombres pour limiter la boucle
  let smaller = Math.min(absNbr1, absNbr2);

  // Initialisation de la variable pour stocker le PGCD
  let hcf = 1;

  // Boucle pour trouver le PGCD en itérant jusqu'au plus petit des deux nombres
  for (let i = 1; i <= smaller; i++) {
    if (absNbr1 % i === 0 && absNbr2 % i === 0) {
      hcf = i;
    }
  }

  // Retourne le PGCD trouvé
  return hcf;
}

console.log(GCD3WithComments(21, 49));

// ****************************

// 🔤 4. Anagramme
// Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
// 📌 Exemple : "listen" et "silent" → ✅

// ****************************

function isAnagram(str1: string, str2: string): boolean {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error(`La saisie doit comporter deux chaînes de caractères`);
  }
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1: string = str1.split("").sort().join("");
  const sortedStr2: string = str2.split("").sort().join("");

  if (sortedStr1 !== sortedStr2) {
    return false;
  }
  return true;
}

console.log(isAnagram("cien", "niche"));
console.log(isAnagram("chien", "niche"));

// ****************************

// 🔤 4. Anagramme
// Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
// 📌 Exemple : "listen" et "silent" → ✅

// ****************************

// Declaration de la fonction pour vérifier si deux chaînes sont des anagrammes
// La fonction prend deux chaînes de caractères en entrée
// et retourne un booléen indiquant si elles sont des anagrammes
function isAnagramWithComments(str1: string, str2: string): boolean {
  // Vérification que les deux entrées sont des chaînes de caractères
  // Si ce n'est pas le cas, une erreur est levée
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error(`La saisie doit comporter deux chaînes de caractères`);
  }

  // Vérification que les deux chaînes ont la même longueur
  // Si elles n'ont pas la même longueur, elles ne peuvent pas être des anagrammes
  // On utilise la propriété length pour comparer les longueurs des deux chaînes
  if (str1.length !== str2.length) {
    return false;
  }

  // On trie les caractères de chaque chaîne
  // On utilise la méthode split pour convertir la chaîne en tableau de caractères
  // Ensuite, on utilise la méthode sort pour trier les caractères dans l'ordre alphabétique
  // Enfin, on utilise la méthode join pour reconvertir le tableau en chaîne de caractères
  // On stocke les chaînes triées dans des variables pour les comparer
  const sortedStr1: string = str1.split("").sort().join("");
  const sortedStr2: string = str2.split("").sort().join("");

  // On compare les deux chaînes triées
  // Si elles ne sont pas égales, elles ne sont pas des anagrammes
  if (sortedStr1 !== sortedStr2) {
    return false;
  }

  // Si les chaînes triées sont égales, elles sont des anagrammes
  // On retourne true pour indiquer que les chaînes sont des anagrammes
  return true;
}

console.log(isAnagramWithComments("cien", "niche"));
console.log(isAnagramWithComments("chien", "niche"));

// *******************************

// console.log(mergeArrays([1, 2, 3, 4, 4], [4, 5, 6, 7, 8, 8, 9]));

// 🔠 5. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"

// *******************************

function capitalizeWords(sentence: string): string {
  if (typeof sentence !== "string") {
    throw new Error(`La saisie doit être un chaîne de caractères`);
  }

  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0)
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(capitalizeWords("the power of a dream"));

// 🔠 5bis. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"

// *******************************

// Declaration de la fonction pour mettre en majuscules la première lettre de chaque mot
function capitalizeWordsWithComments(sentence: string): string {

  // Vérification que l'entrée est une chaîne de caractères
  // Si ce n'est pas le cas, une erreur est levée
  if (typeof sentence !== "string") {
    throw new Error(`La saisie doit être un chaîne de caractères`);
  }

  // On divise la phrase en mots en utilisant l'espace comme séparateur
  // On utilise la méthode split pour créer un tableau de mots
  const words = sentence.split(" ");

  // On parcourt chaque mot du tableau
  // On utilise une boucle for pour itérer sur chaque mot
  for (let i = 0; i < words.length; i++) {

    // On vérifie si le mot n'est pas vide
    // Si le mot a une longueur supérieure à 0, on le modifie
    if (words[i].length > 0)

      // On met en majuscule la première lettre du mot
      // On utilise charAt(0) pour obtenir la première lettre
      // On utilise toUpperCase() pour la mettre en majuscule
      // On concatène le reste du mot en utilisant slice(1)
      // On utilise slice(1) pour obtenir le reste du mot à partir du deuxième caractère
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // On rejoint les mots modifiés en une seule chaîne de caractères
  // On utilise la méthode join pour créer une chaîne de caractères à partir du tableau de mots
  return words.join(" ");
}

console.log(capitalizeWordsWithComments("the power of a dream"));
