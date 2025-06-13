// ***********/

// 🔢 1. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// ***********/

function sumOddNumbers(nbr: number): number {
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

console.log(sumOddNumbers(1212));
console.log(sumOddNumbers(6531159));

// 🔢 1bis. Somme des chiffres pairs
// Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
// 📌 Exemple : 2489 → 2 + 4 + 8 = 14

// ***********/

// Declaration de la fonction pour trouver la somme des chiffres pairs
function sumOddNumbersWithComment(nbr: number): number {
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

console.log(sumOddNumbers(1212));
console.log(sumOddNumbers(6531159));
