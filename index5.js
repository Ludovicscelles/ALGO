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
function reverseAString(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        newString = str[i] + newString;
    }
    return newString;
}
console.log(reverseAString("Ludovic"));
