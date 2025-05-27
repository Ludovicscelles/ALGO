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
Object.defineProperty(exports, "__esModule", { value: true });
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
// function isPalindrome(word: string): boolean {
//   word = word.toLowerCase();
//   let j: number = word.length - 1;
//   for (let i = 0; i < word.length / 2; i++) {
//     if (word[i] !== word[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }
// console.log(isPalindrome("niBin"));
// console.log(isPalindrome("baOab"));
// console.log(isPalindrome("baOab"));
// function sumUpTo(n: number): number {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumUpTo(5));
// console.log(sumUpTo(2));
// function countVowels(str: string): number {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("Ludovic"));
// console.log(countVowels("nmnmp"));
// function fizzBuzz(n: number): string[] {
//   const arr: string[] = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) arr.push("FizzBuzz");
//     else if (i % 3 === 0) arr.push("Fizz");
//     else if (i % 5 === 0) arr.push("Buzz");
//     else arr.push(i.toString());
//   }
//   return arr;
// }
// console.log(fizzBuzz(15));
// function reverseNumbers(n: number []): number[]{
//   for (let i = 0; i < Math.floor(n.length / 2); i++) {
//     let temp = n[i];
//     n[i] = n[n.length - 1 - i];
//     n[n.length - 1 - i] = temp;
//   }
//   return n
// }
// console.log(reverseNumbers([1,2,3]))
// function multiplicationTable(number: number): string {
//   let multiplicationLine : string = "";
//   for (let i = 1; i <= 10; ++i) {
//     multiplicationLine += number + "*" + i + " = " + number * i + "\n";
//   }
//   return multiplicationLine
// }
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(7));
// console.log(multiplicationTable(9));
// function duplicateNumber(array: number[]): number[] {
//   let dupli: number[] = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j] && !dupli.includes(array[i])) {
//         dupli.push(array[i]);
//       }
//     }
//   }
//   return dupli;
// }
// console.log(duplicateNumber([1, 2, 2, 3, 2, 7]));
// function sumOfAnArray(array: number[]): number {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }
// console.log(sumOfAnArray([1, 12, 25, 28]));
// console.log(sumOfAnArray([1, 0, 25, 28]));
// function peerOrNot(number: number): boolean {
//   return number % 2 === 0;
// }
// console.log(peerOrNot(2));
// console.log(peerOrNot(7));
// function isEven(number: unknown): boolean {
//   if (typeof number !== "number") {
//     throw new Error("Le paramètre doit être un nombre.");
//   }
//   return number % 2 === 0;
// }
// console.log(isEven(2));
// console.log(isEven(7));
// function biggestNumber(array: number[]): number {
//   if (array.length === 0) {
//     throw new Error("Le tableau ne peut pas être vide");
//   }
//   let max: number = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// console.log(biggestNumber([-24, -158, -2, -2.522]));
// function isPalindrome(str: string): boolean {
//   str = str.toLocaleLowerCase();
//   const len: number = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("kayak"));
// console.log(isPalindrome("nini"));
// console.log(isPalindrome("Kayak"));
// function sumOfNumbers(n: number): number {
//   if (n < 0) {
//     throw new Error("n doit être un nombre positif");
//   }
//   let sum: number = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumOfNumbers(4));
// function countVowels(string: string): number {
//   const vowels: string = "aeiouy";
//   let sumOfVowels: number = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i].toLowerCase())) {
//       sumOfVowels++;
//     }
//   }
//   return sumOfVowels;
// }
// console.log(countVowels("Ludovic"));
// console.log(countVowels("nnNNmm"));
// console.log(countVowels("nnNNOmm"));
// function fizzBuzz(n: number): string[] {
//   const array: string[] = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) array.push("FizzBuzz");
//     else if (i % 5 === 0) array.push("Buzz");
//     else if (i % 3 === 0) array.push("Fizz");
//     else array.push(i.toString());
//   }
//   return array;
// }
// console.log(fizzBuzz(100));
// function fizzBuzz(): string[] {
//   const array: string[] = [];
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) array.push("FizzBuzz");
//     else if (i % 5 === 0) array.push("Buzz");
//     else if (i % 3 === 0) array.push("Fizz");
//     else array.push(i.toString());
//   }
//   return array;
// }
// console.log(fizzBuzz());
// function reverseNumbers(n: number []): number[]{
//   for (let i = 0; i < Math.floor(n.length / 2); i++) {
//     let temp = n[i];
//     n[i] = n[n.length - 1 - i];
//     n[n.length - 1 - i] = temp;
//   }
//   return n
// }
// function reverseElements(array: string[]): string[] {
//   let reversedArray: string[] = [];
//   for (let i = 0; i < array.length; i++) {
//     reversedArray.unshift(array[i]);
//   }
//   return reversedArray;
// }
// console.log(reverseElements(["lala", "lili", "lolo", "dada"]));
// function reverseElements(array: string[]): string[] {
//   let reversedArray: string[] = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
//   }
//   return reversedArray;
// }
// console.log(reverseElements(["lolo", "lili", "titi"]));
// function reverseElements<T>(array: T[]): T[] {
//   let reversedArray: T[] = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
//   }
//   return reversedArray;
// }
// console.log(reverseElements(["lolo", "lili", "titi"]));
// console.log(reverseElements([12, 22, 33]));
// console.log(reverseElements(["didi", 22, 33, "dodo"]));
// function multiplicationTable(number: number): string {
//   let multiplicationTableLine: string = "";
//   for (let i = 1; i <= 10; i++) {
//     multiplicationTableLine += `${number} * ${i} = ${number * i}\n`;
//   }
//   return multiplicationTableLine
// }
// console.log(multiplicationTable(5));
// function duplicateNumber(numbers: number[]): number[] {
//   let duplicate: number[] = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[j] === numbers[i] && !duplicate.includes(numbers[i])) {
//         duplicate.push(numbers[i]);
//       }
//     }
//   }
//   return duplicate;
// }
// console.log(duplicateNumber([1, 12, 28, 29, 12, 27, 38]));
// function evenOrOdd(n: number): boolean {
//   if (!Number.isInteger(n)) {
//     throw new Error(`La saisie doit être un nombre entier`);
//   }
//   return n % 2 === 0;
// }
// console.log(evenOrOdd(12));
// console.log(evenOrOdd(3));
function factorial(n) {
    if (!Number.isInteger(n)) {
        throw new Error("La saisie doit être un nombre entier");
    }
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
