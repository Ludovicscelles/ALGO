"use strict";
// function evenOrOdd(number) {
//   if (typeof number !== "number" || isNaN(number)) {
//     return `L'entrée doit être un nombre`;
//   }
//   if (!Number.isInteger(number)) {
//     return `L'entrée doit être un nombre entier`
//   }
//   return number % 2 === 0 ? `Ce nombre est pair`: `Ce nombre est impair`;
// }
// console.log(evenOrOdd(24));
// console.log(evenOrOdd(25));
// console.log(evenOrOdd(25.25));
// function factorial(number) {
//   if (typeof number !== "number" || isNaN(number)) {
//     return `L'entrée doit être un nombre`;
//   }
//   if (!Number.isInteger(number) || number < 0) {
//     return `L'entrée doit être un nombre entier`
//   }
//   let res = 1
//   for (let i =1; i <= number; i++) {
//     res *= i;
//   }
//   return res
// }
// console.log(factorial(5));
// console.log(factorial(20));
// let a = [39, 133, 28, 5, 175];
// let i;
// let max = a[0];
// for (i = 1; i < a.length; i++) {
//   if (a[i] > max)
//     max = a[i];
// }
// console.log (max);
// function isPalindrome(word) {
//   let j = word.length - 1
//   for (let i = 0; i < word.length / 2; i++) {
//     if (word[i] != word[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }
// console.log(isPalindrome("niBin"));
// console.log(isPalindrome("baOab"));
// console.log(isPalindrome("niin"));
function isPalindrome(word) {
    word = word.toLowerCase();
    let j = word.length - 1;
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[j]) {
            return false;
        }
        j--;
    }
    return true;
}
console.log(isPalindrome("niBin"));
console.log(isPalindrome("baOab"));
console.log(isPalindrome("baOab"));
