"use strict";
// ***********/
Object.defineProperty(exports, "__esModule", { value: true });
// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14
// ***********/
function sumEvenNumbers(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const strNbr = nbr.toString();
    let sum = 0;
    for (let i = 0; i < strNbr.length; i++) {
        const digit = parseInt(strNbr[i]);
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
function sumEvenNumbersWithComment(nbr) {
    // Vérification que l'entrée est un nombre entier
    // Si ce n'est pas le cas, une erreur est levée
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    // Conversion du nombre en chaîne de caractères pour itérer sur chaque chiffre
    const strNbr = nbr.toString();
    // Initialisation de la variable pour stocker la somme des chiffres pairs
    let sum = 0;
    // Boucle pour parcourir chaque caractère de la chaîne
    for (let i = 0; i < strNbr.length; i++) {
        // Conversion du caractère en nombre entier
        const digit = parseInt(strNbr[i]);
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
function sumEvenDiggit(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    const nbrStr = nbr.toString();
    let sum = 0;
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
function sumEvenDiggitWithComment(nbr) {
    // Vérification que l'entrée est un nombre entier
    // Si ce n'est pas le cas, une erreur est levée
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    // Conversion du nombre en chaîne de caractères pour itérer sur chaque chiffre
    const nbrStr = nbr.toString();
    // Initialisation de la variable pour stocker la somme des chiffres pairs
    let sum = 0;
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
function reverseANumber(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let number = Math.abs(nbr);
    const isNegative = nbr < 0;
    let revNumber = 0;
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
function reverseDigits(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let number = Math.abs(nbr);
    const isNegative = nbr < 0;
    let revNumber = 0;
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
function reverseANumberWithComments(nbr) {
    // Vérification que l'entrée est un nombre entier
    // Si ce n'est pas le cas, une erreur est levée
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    // Conversion du nombre en valeur absolue pour traiter les chiffres
    let number = Math.abs(nbr);
    // Initialisation d'une variable pour vérifier si le nombre est négatif
    // Si c'est le cas, le résultat final sera négatif
    const isNegative = nbr < 0;
    // Initialisation de la variable pour stocker le nombre inversé
    let revNumber = 0;
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
function reverseDigitsWithComments(nbr) {
    // Vérification que l'entrée est un nombre entier
    // Si ce n'est pas le cas, une erreur est levée
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    // Conversion du nombre en valeur absolue pour traiter les chiffres
    let number = Math.abs(nbr);
    // Initialisation d'une variable pour vérifier si le nombre est négatif
    // Si c'est le cas, le résultat final sera négatif
    const isNegative = nbr < 0;
    // Initialisation de la variable pour stocker le nombre inversé
    let revNumber = 0;
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
function GCD(nbr1, nbr2) {
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
function GCD2(nbr1, nbr2) {
    if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
        throw new Error(`La saisie doit comporter deux nombres entiers `);
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
console.log(GCD2(18, 48));
// ****************************
// 🧮 3ter. PGCD (Plus Grand Commun Diviseur)
// Écris une fonction qui retourne le PGCD de deux nombres entiers.
// 📌 Exemple : PGCD(48, 18) → 6
// ******************************
function GCD3(nbr1, nbr2) {
    if (!Number.isInteger(nbr1) || !Number.isInteger(nbr2)) {
        throw new Error(`La saisie doit comporter deux nombres entiers`);
    }
    let absNbr1 = Math.abs(nbr1);
    let absNbr2 = Math.abs(nbr2);
    let smaller = Math.min(absNbr1, absNbr2);
    let hcf = 1;
    for (let i = 1; i <= smaller; i++) {
        if (absNbr1 % i === 0 || absNbr2 % i === 0) {
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
function GCDWithComments(nbr1, nbr2) {
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
function GCD2WithComments(nbr1, nbr2) {
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
    for (; absNbr2 !== 0;) {
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
function GCD3WithComments(nbr1, nbr2) {
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
        if (absNbr1 % i === 0 || absNbr2 % i === 0) {
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
function isAnagram(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw new Error(`La saisie doit comporter deux chaînes de caractères`);
    }
    if (str1.length !== str2.length) {
        return false;
    }
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
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
function isAnagramWithComments(str1, str2) {
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
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
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
function capitalizeWords(sentence) {
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
function capitalizeWordsWithComments(sentence) {
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
// *******************************
// 🔠 5ter. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
// *******************************
function capitalizeWords2(sentence) {
    if (typeof sentence !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    return sentence
        .split(" ")
        .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : " "))
        .join(" ");
}
console.log(capitalizeWords2("where  does my heart beat now"));
// *******************************
// 🔠 5quater. Mettre en majuscules la première lettre de chaque mot
// 📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
// *******************************
// Declaration de la fonction pour mettre en majuscules la première lettre de chaque mot
// La fonction prend une chaîne de caractères en entrée
function capitalizeWords2WithComment(sentence) {
    // Vérification que l'entrée est une chaîne de caractères
    // Si ce n'est pas le cas, une erreur est levée
    if (typeof sentence !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    return (sentence
        // On divise la phrase en mots en utilisant l'espace comme séparateur
        // On utilise la méthode split pour créer un tableau de mots
        .split(" ")
        // On parcourt chaque mot du tableau et on met en majuscule la première lettre
        // On utilise la méthode map pour appliquer une fonction à chaque mot
        // La fonction prend un mot en entrée et retourne le mot avec la première lettre en majuscule
        .map((word) => 
    // Si le mot a une longueur supérieure à 0, on le modifie
    // On utilise charAt(0) pour obtenir la première lettre
    // On utilise toUpperCase() pour la mettre en majuscule
    // On concatène le reste du mot en utilisant slice(1)
    // On utilise slice(1) pour obtenir le reste du mot à partir du deuxième caractère
    // Si le mot est vide, on retourne un espace
    word ? word.charAt(0).toUpperCase() + word.slice(1) : " ")
        // On rejoint les mots modifiés en une seule chaîne de caractères
        // On utilise la méthode join pour créer une chaîne de caractères à partir du tableau de mots
        .join(" "));
}
// On teste la fonction avec une phrase
console.log(capitalizeWords2WithComment("where  does my heart beat now"));
// *******************************
// 🧠 6. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
// *******************************
function multiplicationTable(n) {
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`La saisie doit être un nombre entier positif`);
    }
    const table = [];
    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(`${i} x ${j} = ${i * j}`);
        }
        table.push(row);
    }
    return table;
}
console.log(multiplicationTable(5));
// *******************************
// 🧠 6bis. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
// *******************************
// Declaration de la fonction pour créer une table de multiplication
// La fonction prend un nombre entier n en entrée
// et retourne un tableau à deux dimensions contenant les résultats de la multiplication
function multiplicationTableWithComments(n) {
    // Vérification que l'entrée est un nombre entier positif
    // Si ce n'est pas le cas, une erreur est levée
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`La saisie doit être un nombre entier positif`);
    }
    // Initialisation d'un tableau à deux dimensions pour stocker la table de multiplication
    const table = [];
    // Boucle pour parcourir les entiers de 1 à n
    // On utilise une boucle for pour itérer de 1 à n
    for (let i = 1; i <= n; i++) {
        // Initialisation d'un tableau pour stocker les résultats de la multiplication pour l'entier i
        // On crée un tableau vide pour chaque ligne de la table de multiplication
        const row = [];
        // Deuxième boucle pour parcourir les entiers multiplicateurs de 1 à 10
        // On utilise une boucle for pour itérer de 1 à 10
        for (let j = 1; j <= 10; j++) {
            // On calcule le produit de i et j
            // On utilise l'opérateur de multiplication pour obtenir le résultat
            // On crée une chaîne de caractères au format "i x j = produit"
            // On utilise la méthode push pour ajouter le résultat à la ligne courante
            row.push(`${i} x ${j} = ${i * j}`);
        }
        // On ajoute la ligne courante à la table de multiplication
        // On utilise la méthode push pour ajouter le tableau de résultats à la table
        table.push(row);
    }
    // On retourne la table de multiplication complète
    // La table est un tableau à deux dimensions contenant les résultats de la multiplication
    return table;
}
// On teste la fonction avec un exemple
console.log(multiplicationTable(5));
// ******************************
// 🧠 6ter. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
// ******************************
function multiplicationTable2(n) {
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`La saisie doit être un nombre entier positif`);
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
console.log(multiplicationTable2(5));
// ******************************
// 🧠 6ter. Table de multiplication améliorée
// Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
// ******************************
// Declaration de la fonction pour créer une table de multiplication
// La fonction prend un nombre entier n en entrée
// et retourne un tableau à deux dimensions contenant les résultats de la multiplication
function multiplicationTable2WithComments(n) {
    // Vérification que l'entrée est un nombre entier positif
    // Si ce n'est pas le cas, une erreur est levée
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`La saisie doit être un nombre entier positif`);
    }
    // Initialisation d'un tableau à deux dimensions pour stocker la table de multiplication
    const arrayTable = [];
    // Boucle while pour parcourir les entiers de 1 à n
    // On utilise une variable i pour itérer de 1 à n
    // La boucle continue tant que i est inférieur ou égal à n
    let i = 1;
    while (i <= n) {
        // Initialisation d'un tableau pour stocker les résultats de la multiplication pour l'entier i
        // On crée un tableau vide pour chaque ligne de la table de multiplication
        // La ligne contiendra les résultats de la multiplication de i par les entiers de 1 à 10
        const row = [];
        // Deuxième boucle while pour parcourir les entiers multiplicateurs de 1 à 10
        // On utilise une variable j pour itérer de 1 à 10
        // La boucle continue tant que j est inférieur ou égal à 10
        let j = 1;
        while (j <= 10) {
            // On calcule le produit de i et j
            // On utilise l'opérateur de multiplication pour obtenir le résultat
            // On crée une chaîne de caractères au format "i x j = produit"
            // On utilise la méthode push pour ajouter le résultat à la ligne courante
            row.push(`${i} x ${j} = ${i * j}`);
            // On incrémente j pour passer au multiplicateur suivant
            j++;
        }
        // On ajoute la ligne courante à la table de multiplication
        // On utilise la méthode push pour ajouter le tableau de résultats à la table
        arrayTable.push(row);
        // On incrémente i pour passer à l'entier suivant
        i++;
    }
    // On retourne la table de multiplication complète
    return arrayTable;
}
// On teste la fonction avec un exemple
console.log(multiplicationTable2WithComments(5));
// ******************************
// 📊 7. Calcul de la moyenne
// Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
// 📌 Bonus : Arrondir à 2 décimales.
// ******************************
function average(nbr) {
    if (!Array.isArray(nbr) || nbr.length < 2) {
        throw new Error(`La saisie doit être un tableau comportant au moins deux nombres  `);
    }
    let sum = 0;
    for (let i = 0; i < nbr.length; i++) {
        sum = nbr[i] + sum;
    }
    return Math.round((sum / nbr.length) * 100) / 100;
}
console.log(average([28, 29, 132]));
// ******************************
// 📊 7bis. Calcul de la moyenne
// Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
// 📌 Bonus : Arrondir à 2 décimales.
// ******************************
// Declaration de la fonction pour calculer la moyenne
// La fonction prend un tableau de nombres en entrée
function averageWithComments(nbr) {
    // Vérification que l'entrée est un tableau et qu'il contient au moins deux nombres
    // Si ce n'est pas le cas, une erreur est levée
    if (!Array.isArray(nbr) || nbr.length < 2) {
        throw new Error(`La saisie doit être un tableau comportant au moins deux nombres  `);
    }
    // Initialisation de la variable pour stocker la somme des nombres
    let sum = 0;
    // Boucle pour parcourir chaque nombre du tableau
    // On utilise une boucle for pour itérer sur chaque élément du tableau
    for (let i = 0; i < nbr.length; i++) {
        // On ajoute le nombre courant à la somme
        // On utilise l'opérateur d'addition pour accumuler la somme
        sum = nbr[i] + sum;
    }
    // On calcule la moyenne en divisant la somme par le nombre d'éléments
    // On utilise la propriété length du tableau pour obtenir le nombre d'éléments
    // On arrondit le résultat à deux décimales en multipliant par 100, en arrondissant, puis en divisant par 100
    // On utilise Math.round pour arrondir le résultat
    return Math.round((sum / nbr.length) * 100) / 100;
}
// On teste la fonction avec un exemple
console.log(average([28, 29, 132]));
// ******************************
// 📊 7ter. Calcul de la moyenne
// Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
// 📌 Bonus : Arrondir à 2 décimales.
// ******************************
function average2(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        throw new Error(`La saisie doit être un tableau comportant à minima deux nombres`);
    }
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return Math.round((sum / arr.length) * 100) / 100;
}
console.log(average2([15, 15, 235, 25, 18, 27, 45, 51.15]));
// ******************************
// 📊 7quadri. Calcul de la moyenne
// Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
// 📌 Bonus : Arrondir à 2 décimales.
// ******************************
// Declaration de la fonction pour calculer la moyenne
// La fonction prend un tableau de nombres en entrée
function average2WithComments(arr) {
    // Vérification que l'entrée est un tableau et qu'il contient au moins deux nombres
    // Si ce n'est pas le cas, une erreur est levée
    if (!Array.isArray(arr) || arr.length < 2) {
        throw new Error(`La saisie doit être un tableau comportant à minima deux nombres`);
    }
    // Initialisation des variables pour l'itération et la somme
    let i = 0;
    let sum = 0;
    // Boucle while pour parcourir chaque élément du tableau
    // On utilise une boucle while pour itérer tant que i est inférieur à la longueur du tableau
    while (i < arr.length) {
        // On ajoute l'élément courant à la somme
        // On utilise l'opérateur d'addition pour accumuler la somme
        sum += arr[i];
        // On incrémente i pour passer à l'élément suivant
        i++;
    }
    // On calcule la moyenne en divisant la somme par le nombre d'éléments
    // On utilise la propriété length du tableau pour obtenir le nombre d'éléments
    // On utilise Math.round pour arrondir le résultat
    // On arrondit le résultat à deux décimales en multipliant par 100, en arrondissant, puis en divisant par 100
    return Math.round((sum / arr.length) * 100) / 100;
}
// On teste la fonction avec un exemple
console.log(average2WithComments([15, 15, 22, 25, 18, 27, 45, 51.15]));
// ******************************
// 📦 8. Compresser une chaîne (Run-length encoding)
// Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
// 📌 Exemple : "aaabbc" → "a3b2c1"
// ******************************
function compressString(str) {
    if (typeof str !== "string") {
        throw new Error(`La saisie doit être un chaîne de caractères`);
    }
    let compressed = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        }
        else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed;
}
console.log(compressString("aaabbc"));
// ******************************
// 📦 8bis. Compresser une chaîne (Run-length encoding)
// Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
// 📌 Exemple : "aaabbc" → "a3b2c1"
// ******************************
// Declaration de la fonction pour compresser une chaîne
function compressStringWithComments(str) {
    // Vérification que l'entrée est une chaîne de caractères
    // Si ce n'est pas le cas, une erreur est levée
    if (typeof str !== "string") {
        throw new Error(`La saisie doit être un chaîne de caractères`);
    }
    // Initialisation des variables pour stocker la chaîne compressée et le compteur
    // On initialise une chaîne vide pour stocker le résultat compressé
    // On initialise un compteur à 1 pour compter les occurrences consécutives des caractères
    let compressed = "";
    let count = 1;
    // Boucle pour parcourir chaque caractère de la chaîne
    for (let i = 0; i < str.length; i++) {
        // On vérifie si le caractère courant est égal au caractère suivant
        // Si c'est le cas, on incrémente le compteur
        if (str[i] === str[i + 1]) {
            count++;
            // Si le caractère courant est différent du suivant, on ajoute le caractère et le compteur à la chaîne compressée
            // On utilise l'opérateur de concaténation pour ajouter le caractère et le nombre d'occurrences
            // On réinitialise le compteur à 1 pour le prochain caractère
        }
        else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    // On retourne la chaîne compressée
    // La chaîne compressée contient chaque caractère suivi du nombre d'occurrences consécutives
    return compressed;
}
// On teste la fonction avec un exemple
console.log(compressStringWithComments("aaabbc"));
// ******************************
// 📦 8ter. Compresser une chaîne (Run-length encoding)
// Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
// 📌 Exemple : "aaabbc" → "a3b2c1"
// ******************************
function compressAString(str) {
    if (typeof str !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    let compress = "";
    let count = 1;
    let i = 0;
    while (i < str.length) {
        if (str[i] === str[i + 1]) {
            count++;
        }
        else {
            compress += str[i] + count;
            count = 1;
        }
        i++;
    }
    return compress;
}
console.log(compressAString("pomme"));
console.log(compressAString("allée"));
console.log(compressAString("balle"));
// ******************************
// 📦 8quater. Compresser une chaîne (Run-length encoding)
// Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
// 📌 Exemple : "aaabbc" → "a3b2c1"
// ******************************
// Declaration de la fonction pour compresser une chaîne
function compressAStringWithComments(str) {
    // Vérification que l'entrée est une chaîne de caractères
    // Si ce n'est pas le cas, une erreur est levée
    if (typeof str !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    // Initialisation des variables pour stocker la chaîne compressée et le compteur
    let compress = "";
    let count = 1;
    // Initialisation de l'index pour parcourir la chaîne
    let i = 0;
    // Boucle while pour parcourir chaque caractère de la chaîne
    // La boucle continue tant que i est inférieur à la longueur de la chaîne
    while (i < str.length) {
        // On vérifie si le caractère courant est égal au caractère suivant
        // Si c'est le cas, on incrémente le compteur
        if (str[i] === str[i + 1]) {
            count++;
            // Si le caractère courant est différent du suivant, on ajoute le caractère et le compteur à la chaîne compressée
            // On utilise l'opérateur de concaténation pour ajouter le caractère et le nombre d'occurrences
            // On réinitialise le compteur à 1 pour le prochain caractère
        }
        else {
            compress += str[i] + count;
            count = 1;
        }
        // On incrémente l'index pour passer au caractère suivant
        // Cela permet de parcourir toute la chaîne jusqu'à la fin
        i++;
    }
    // On retourne la chaîne compressée
    // La chaîne compressée contient chaque caractère suivi du nombre d'occurrences consécutives
    return compress;
}
// On teste la fonction avec des exemples
console.log(compressAStringWithComments("pomme"));
console.log(compressAStringWithComments("allée"));
console.log(compressAStringWithComments("balle"));
// *************************************************
// 🎯 9. Trouver le deuxième plus grand nombre
// Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
// 📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
// *************************************************
function findSecondBiggestNumber(array) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error(`La saisie doit être un tableau comportant un minum de deux nombres`);
    }
    let largest = array[0];
    let secondLargest = -Infinity;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        }
        else if (array[i] < largest || array[i] > secondLargest) {
            secondLargest = array[i];
        }
    }
    return secondLargest;
}
const array = [5, 18, 19, 29, 22, 23, 34, 15];
const secondLargest = findSecondBiggestNumber(array);
console.log(`Le deuxième plus grand nombre est ${secondLargest}`);
// *************************************************
// 🎯 9bis. Trouver le deuxième plus grand nombre
// Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
// 📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
// *************************************************
// Declaration de la fonction pour trouver le deuxième plus grand nombre
// La fonction prend un tableau de nombres en entrée
function findSecondBiggestNumberWithComments(arr) {
    // Vérification que l'entrée est un tableau et qu'il contient au moins deux nombres
    // Si ce n'est pas le cas, une erreur est levée
    // On utilise Array.isArray pour vérifier si arr est un tableau
    // On utilise la propriété length pour vérifier que le tableau a au moins deux éléments
    if (!Array.isArray(arr) || arr.length < 2) {
        throw new Error(`La saisie doit être un tableau comportant un minum de deux nombres`);
    }
    // Initialisation des variables pour stocker le plus grand et le deuxième plus grand nombre
    // On initialise largest avec le premier élément du tableau
    // On initialise secondLargest avec -Infinity pour s'assurer qu'il sera remplacé par un nombre plus grand
    // On utilise -Infinity pour s'assurer que secondLargest sera remplacé par un nombre du tableau
    // Cela permet de gérer les cas où tous les nombres du tableau sont négatifs
    let largest = arr[0];
    let secondLargest = -Infinity;
    // Boucle pour parcourir les éléments du tableau à partir du deuxième élément
    // On utilise une boucle for pour itérer à partir de l'index 1 jusqu'à la fin du tableau
    // On commence à i = 1 car on a déjà initialisé largest avec le premier élément
    // Cela permet de comparer les éléments suivants avec le premier élément
    for (let i = 1; i < arr.length; i++) {
        // On vérifie si l'élément courant est plus grand que le plus grand nombre trouvé jusqu'à présent
        // Si c'est le cas, on met à jour secondLargest avec la valeur de largest
        // et on met à jour largest avec l'élément courant
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = array[i];
            // Si l'élément courant n'est pas plus grand que largest mais est plus grand que secondLargest
            // On met à jour secondLargest avec l'élément courant
            // On utilise l'opérateur de comparaison pour vérifier si l'élément courant est inférieur
            // à largest mais supérieur à secondLargest
        }
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    // Une fois la boucle terminée, on retourne le deuxième plus grand nombre
    // Le deuxième plus grand nombre est stocké dans la variable secondLargest
    return secondLargest;
}
// On teste la fonction avec un exemple
// On crée un tableau de nombres pour tester la fonction
// On utilise un tableau avec des nombres variés pour vérifier le bon fonctionnement de la fonction
const arr = [105, 122, 124, 200, 198, 101, 107];
const secondLargestNumber = findSecondBiggestNumberWithComments(arr);
console.log(`Le deuxième plus grand nombre est ${secondLargestNumber}`);
// *************************************************
// 🎯 9ter. Trouver le deuxième plus grand nombre
// Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
// 📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
// *************************************************
function secondBiggestNumber(nbrArr) {
    if (!Array.isArray(nbrArr) || nbrArr.length < 2) {
        throw new Error(`La saisie doit être un tableau comportant au minimum deux chiffres`);
    }
    let biggestNumber = nbrArr[0];
    let secondBiggestNumber = -Infinity;
    let i = 1;
    while (i < nbrArr.length) {
        if (nbrArr[i] > biggestNumber) {
            secondBiggestNumber = biggestNumber;
            biggestNumber = nbrArr[i];
        }
        else if (nbrArr[i] < biggestNumber && nbrArr[i] > secondBiggestNumber) {
            secondBiggestNumber = nbrArr[i];
        }
        i++;
    }
    if (secondBiggestNumber === -Infinity) {
        throw new Error(`Il n'existe pas de deuxième plus grand nombre distinct`);
    }
    return secondBiggestNumber;
}
let nbrArr = [255, 252, 125, 158, 254, 169, 111];
let secondBiggest = secondBiggestNumber(nbrArr);
console.log(`Le deuxième plus grand nombre est ${secondBiggest}`);
// *************************************************
// 🎯 9quater. Trouver le deuxième plus grand nombre
// Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
// 📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
// *************************************************
// Declaration de la fonction pour trouver le deuxième plus grand nombre
// La fonction prend un tableau de nombres en entrée
function secondBiggestNumberWithComments(nbrArr) {
    // Vérification que l'entrée est un tableau et qu'il contient au moins deux nombres
    // Si ce n'est pas le cas, une erreur est levée
    if (!Array.isArray(nbrArr) || nbrArr.length < 2) {
        throw new Error(`La saisie doit être un tableau comportant au minimum deux chiffres`);
    }
    // Initialisation des variables pour stocker le plus grand et le deuxième plus grand nombre
    // On initialise biggestNumber avec le premier élément du tableau
    // On initialise secondBiggestNumber avec -Infinity pour s'assurer qu'il sera remplacé
    let biggestNumber = nbrArr[0];
    let secondBiggestNumber = -Infinity;
    // Initialisation de l'index pour parcourir le tableau
    let i = 1;
    // Boucle while pour parcourir les éléments du tableau à partir du deuxième élément
    // On utilise une boucle while pour itérer tant que i est inférieur à la longueur du tableau
    // On commence à i = 1 car on a déjà initialisé biggestNumber avec le premier élément
    // Cela permet de comparer les éléments suivants avec le premier élément
    // On utilise nbrArr.length pour obtenir la longueur du tableau
    while (i < nbrArr.length) {
        // On vérifie si l'élément courant est plus grand que le plus grand nombre trouvé jusqu'à présent
        // Si c'est le cas, on met à jour secondBiggestNumber avec la valeur de biggestNumber
        // et on met à jour biggestNumber avec l'élément courant
        if (nbrArr[i] > biggestNumber) {
            secondBiggestNumber = biggestNumber;
            biggestNumber = nbrArr[i];
            // Si l'élément courant n'est pas plus grand que biggestNumber mais est plus grand que secondBiggestNumber
            // On met à jour secondBiggestNumber avec l'élément courant
        }
        else if (nbrArr[i] < biggestNumber && nbrArr[i] > secondBiggestNumber) {
            secondBiggestNumber = nbrArr[i];
        }
        // On incrémente l'index pour passer à l'élément suivant
        // Cela permet de parcourir toute la chaîne jusqu'à la fin
        i++;
    }
    // Une fois la boucle terminée, on vérifie si secondBiggestNumber a été mis à jour
    // Si secondBiggestNumber est toujours -Infinity, cela signifie qu'il n'y a pas de deuxième plus grand nombre distinct
    // Dans ce cas, on lève une erreur
    // On utilise une condition pour vérifier si secondBiggestNumber est égal à -Infinity
    // Si c'est le cas, on lève une erreur avec un message approprié
    if (secondBiggestNumber === -Infinity) {
        throw new Error(`Il n'existe pas de deuxième plus grand nombre distinct`);
    }
    // On retourne le deuxième plus grand nombre
    // Le deuxième plus grand nombre est stocké dans la variable secondBiggestNumber
    return secondBiggestNumber;
}
// On teste la fonction avec un exemple
// On crée un tableau de nombres pour tester la fonction
// On utilise un tableau avec des nombres variés pour vérifier le bon fonctionnement de la fonction
// On utilise nbrArr2 pour tester la fonction avec un autre ensemble de nombres
// On utilise un tableau avec des nombres variés pour vérifier le bon fonctionnement de la fonction
let nbrArr2 = [123, 252, 178, 472, 314, 222, 104];
let secondBiggest2 = secondBiggestNumberWithComments(nbrArr2);
console.log(`Le deuxième plus grand nombre est ${secondBiggest2}`);
