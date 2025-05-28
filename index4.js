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
    for (var i = 0; i <= str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}
console.log(sumOfNumbers(1515));
