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
