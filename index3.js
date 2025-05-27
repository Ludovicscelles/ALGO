"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function evenOrOdd(n) {
    if (!Number.isInteger(n)) {
        throw new Error("La saisie doit \u00EAtre un nombre entier");
    }
    return n % 2 === 0;
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(7));
function factorial(n) {
    if (!Number.isInteger(n)) {
        throw new Error("La saisie doit \u00EAtre un nombre entier");
    }
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));
function duplicate(numbers) {
    var duplicateNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j] && !duplicateNumbers.includes(numbers[i])) {
                duplicateNumbers.push(numbers[i]);
            }
        }
    }
    return duplicateNumbers;
}
console.log(duplicate([22, 58, 33, 69, 58, 62, 22, 78]));
function biggestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("La tableau ne doit pas \u00EAtre vide");
    }
    var theBiggestNumber = -Infinity;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > theBiggestNumber) {
            theBiggestNumber = numbers[i];
        }
    }
    return theBiggestNumber;
}
console.log(biggestNumber([5, 15, 28, 24, 2, 8]));
function isPalindrome(str) {
    str = str.toLowerCase();
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("kayak"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("yoyo"));
console.log(isPalindrome("Ludovic"));
function sumOfNumbers(n) {
    if (n < 0) {
        throw new Error("La saisie doit être un nombre entier");
    }
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(10));
function countVowels(str) {
    str = str.toLowerCase();
    var vowels = "aeiou";
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("LUdovic"));
function fizzBuzz() {
    var arr = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0)
            arr.push("FizzBuzz");
        else if (i % 5 === 0)
            arr.push("Buzz");
        else if (i % 3 === 0)
            arr.push("Fizz");
        else
            arr.push(i.toString());
    }
    return arr;
}
console.log(fizzBuzz());
function fizzBuzz2() {
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0)
            console.log("FizzBuzz");
        else if (i % 5 === 0)
            console.log("Buzz");
        else if (i % 3 === 0)
            console.log("Fizz");
        else
            console.log(i.toString());
    }
}
fizzBuzz2();
function fizzBuzz3() {
    var res = "";
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0)
            res += "FizzBuzz\n";
        else if (i % 5 === 0)
            res += "Buzz\n";
        else if (i % 3 === 0)
            res += "Fizz\n";
        else
            res += i.toString() + "\n";
    }
    return res;
}
console.log(fizzBuzz3());
function reverseElements(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseElements([15, 25, "Yoyo", "Yaya"]));
function multiplicationTable(n) {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error("Merci de saisir un nombre entier et positif");
    }
    var multiplicationLine = "";
    for (var i = 1; i <= 10; i++) {
        multiplicationLine += "".concat(i, " * ").concat(n, " = ").concat(i * n, "\n");
    }
    return multiplicationLine;
}
console.log(multiplicationTable(8));
function duplicateNumbers(arr) {
    var duplicate = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicate.includes(arr[i])) {
                duplicate.push(arr[i]);
            }
        }
    }
    return duplicate;
}
console.log(duplicateNumbers([5, 5, 185, 22, 69, 5, 89, 65, 22, 85]));
