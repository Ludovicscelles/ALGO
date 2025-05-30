"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countDigits(n) {
    if (!Number.isInteger(n)) {
        throw new Error("La saisie doit être un nombre entier");
    }
    var count = 0;
    for (var i = n; i > 0; i = Math.floor(i / 10)) {
        count++;
    }
    return count;
}
console.log(countDigits(15899));
function reverseAString3(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        newString = str[i] + newString;
    }
    return newString;
}
console.log(reverseAString3("Ludovic"));
function fullMultiplicationTables() {
    var multiplicationLine = "";
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            multiplicationLine += "".concat(i, " * ").concat(j, " = ").concat(i * j, " \n");
        }
        multiplicationLine += "\n";
    }
    return multiplicationLine;
}
console.log(fullMultiplicationTables());
function sumOfDigits(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("La saisie doit être un nombre entier");
    }
    var sum = 0;
    var strN = n.toString();
    for (var i = 0; i < strN.length; i++) {
        sum += parseInt(strN[i]);
    }
    return sum;
}
console.log(sumOfDigits(1515));
function primeNumber(n) {
    if (!Number.isInteger(n) || n <= 1) {
        throw new Error("La saisie doit être un nombre entier et supèrieur à 1");
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(primeNumber(13));
console.log(primeNumber(7));
console.log(primeNumber(6));
