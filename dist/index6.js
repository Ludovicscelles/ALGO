"use strict";
// ******
// 1. Nombre de chiffres
// Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
// Exemple : 12345 → 5
// ******
function numberOfDigits(nb) {
    if (!Number.isInteger(nb)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    if (nb === 0) {
        return 1;
    }
    nb = Math.abs(nb);
    let count = 0;
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
function reverseAString(str) {
    if (typeof str !== "string") {
        throw new Error("La saisie doit être une chaîne de caractères");
    }
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseAString("Ludovic"));
// 3. Table de multiplication complète
// Écris une fonction qui affiche toutes les tables de 1 à 10 (10 lignes par table).
// ******************
function multiplicationTable() {
    let multiplicationTableLine = "";
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
function sumOfDigits(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    let sum = 0;
    let stringifiedNbr = Math.abs(nbr).toString();
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
function isPrime(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    else if (nbr < 2) {
        return false;
    }
    else {
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
function countLetters(str) {
    if (typeof str !== "string") {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    let count = 0;
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
function longestWord(str) {
    const words = str.match(/[a-zA-ZÀ-ÿ0-9]+/g);
    if (!words) {
        throw new Error(`La saisie doit être une chaîne de caractères`);
    }
    let largest = "";
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
function filterOddNumbers(nbr) {
    if (!Array.isArray(nbr) || nbr.length < 2) {
        throw new Error("La saisie doit comporter à minima deux chiffres");
    }
    const oddNumbers = [];
    for (let i = 0; i < nbr.length; i++) {
        if (nbr[i] % 2 !== 0) {
            oddNumbers.push(nbr[i]);
        }
    }
    return oddNumbers;
}
console.log(filterOddNumbers([25, 22, 16, 81, 80]));
// 9. Valeur la plus fréquente
// Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
// Exemple : [1, 2, 2, 3, 1, 2] → 2
// **********************
// Declaration de la fonction pour trouver la valeur la plus fréquente dans un tableau de nombres
function mostCommonValue(arr) {
    // Vérification que l'entrée est un tableau et qu'il contient au moins trois éléments
    if (!Array.isArray(arr) || arr.length < 3) {
        throw new Error(`La saisie doit comporter au moins trois chiffres`);
    }
    // Initialisation des variables pour stocker la valeur la plus fréquente et son nombre d'occurrences
    let value = 0;
    let maxCount = 0;
    // Boucle pour parcourir chaque élément du tableau
    for (let i = 0; i < arr.length; i++) {
        // Initialisation du compteur pour l'élément courant
        let count = 0;
        // Boucle interne : on compare arr[i] avec tous les autres éléments du tableau
        for (let j = 0; j < arr.length; j++) {
            // Si l'élément courant est égal à l'élément j, on incrémente le compteur
            if (arr[i] === arr[j]) {
                count++;
            }
            // Si le compteur dépasse le maximum actuel ou si le compteur est égal au maximum mais que l'élément courant est plus grand,
            // on met à jour la valeur et le compteur maximum
            if (count > maxCount || (count === maxCount && arr[i] > value)) {
                maxCount = count;
                value = arr[i];
            }
        }
    }
    // Retourne la valeur la plus fréquente trouvée dans le tableau
    return value;
}
console.log(mostCommonValue([12, 25, 14, 12, 59, 14, 12, 87, 14, 96]));
// 9bis. Valeur la plus fréquente
// Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
// Exemple : [1, 2, 2, 3, 1, 2] → 2
// **********************
function mostCommonNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 3) {
        throw new Error(`La saisie doit comporter au moins trois chiffres`);
    }
    let value = 0;
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
            if (count > maxCount || (count === maxCount && arr[i] > value)) {
                maxCount = count;
                value = arr[i];
            }
        }
    }
    return value;
}
console.log(mostCommonNumber([15, 78, 98, 56, 15, 15, 14, 16, 14, 87, 14, 51, 23]));
// 10. Fusion de tableaux
// Écris une fonction qui fusionne deux tableaux sans doublons.
// Exemple : [1, 2, 3] et [3, 4, 5] → [1, 2, 3, 4, 5]
// *******************************
// Déclaration de la fonction pour fusionner deux tableaux sans doublons
function merge2Arrays(arrNbr1, arrNbr2) {
    // Vérification que les deux paramètres sont des tableaux
    if (!Array.isArray(arrNbr1) || !Array.isArray(arrNbr2)) {
        throw new Error(`Les deux paramètres doivent être des tableaux`);
    }
    // Vérification que les deux tableaux contiennent au moins un chiffre
    if (!arrNbr1.length || !arrNbr2.length) {
        throw new Error(`Chaque tableau doit comporter au moins un chiffre`);
    }
    // Initialisation d'un tableau pour stocker les valeurs fusionnées sans doublons
    const fusionArray = [];
    // Boucle pour parcourir le premier tableau
    for (let i = 0; i < arrNbr1.length; i++) {
        // Si l'élément n'est pas déjà dans fusionArray, on l'ajoute
        if (!fusionArray.includes(arrNbr1[i])) {
            fusionArray.push(arrNbr1[i]);
        }
        // Boucle pour parcourir le deuxième tableau
        for (let i = 0; i < arrNbr2.length; i++) {
            // Si l'élément n'est pas déjà dans fusionArray, on l'ajoute
            if (!fusionArray.includes(arrNbr2[i])) {
                fusionArray.push(arrNbr2[i]);
            }
        }
    }
    // Retourne le tableau fusionné sans doublons
    return fusionArray;
}
console.log(merge2Arrays([1, 2, 3, 4, 4], [4, 5, 6, 7, 8, 8, 9]));
// *******************************
// 10bis. Fusion de tableaux
// Écris une fonction qui fusionne deux tableaux sans doublons.
// Exemple : [1, 2, 3] et [3, 4, 5] → [1, 2, 3, 4, 5]
// *******************************
function mergeArrays(arrNbr1, arrNbr2) {
    if (!Array.isArray(arrNbr1) || !Array.isArray(arrNbr2)) {
        throw new Error(`Les deux paramètres doivent être des tableaux`);
    }
    if (!arrNbr1.length || !arrNbr2.length) {
        throw new Error(`Chaque tableau doit comporter au moins un chiffre`);
    }
    const fusionArray = [];
    for (let i = 0; i < arrNbr1.length; i++) {
        if (!fusionArray.includes(arrNbr1[i])) {
            fusionArray.push(arrNbr1[i]);
        }
        for (let i = 0; i < arrNbr2.length; i++) {
            if (!fusionArray.includes(arrNbr2[i])) {
                fusionArray.push(arrNbr2[i]);
            }
        }
    }
    return fusionArray;
}
