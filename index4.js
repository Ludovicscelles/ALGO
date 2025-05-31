"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numberOfDigits(n) {
    if (!Number.isInteger(n)) {
        throw new Error("La saisie doit être un nombre entier");
    }
    var count = 0;
    for (var i = n; i > 0; i = Math.floor(i / 10)) {
        count++;
    }
    return count;
}
console.log(numberOfDigits(12));
console.log(numberOfDigits(1253));
function reverseAString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseAString("Ludovic"));
function reverseAString2(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        newString = str[i] + newString;
    }
    return newString;
}
console.log(reverseAString2("Ludovic"));
function multiplicationTable() {
    var multiplicationLine = "";
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            multiplicationLine += "".concat(i, "*").concat(j, " = ").concat(i * j, "\n  ");
        }
        multiplicationLine += "\n";
    }
    return multiplicationLine;
}
console.log(multiplicationTable());
function sumOfNumbers(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("La saisie doit être un nombre entier et positif");
    }
    var sum = 0;
    var str = n.toString();
    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}
console.log(sumOfNumbers(1515));
function primeNumber(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(primeNumber(1));
console.log(primeNumber(131356));
function countLettersWithoutAccent(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
            count++;
        }
    }
    return count;
}
console.log(countLettersWithoutAccent("Ludovic and Ludovica"));
function countLettersWithAccent(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char.toLocaleLowerCase() !== char.toUpperCase()) {
            count++;
        }
    }
    return count;
}
console.log(countLettersWithAccent("Ludo à la Plage 123"));
// function countLettersWithAccentAndRegex(str: string): number {
//   let count: number = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (/\p{L}/u.test(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLettersWithAccentAndRegex("Ludovic à la Plage"));
function countLettersWithAccentAndRegex2(str) {
    var matches = str.match(/\p{L}/gu);
    return matches ? matches.length : 0;
}
console.log(countLettersWithAccentAndRegex2("Ludovic à la Plage"));
