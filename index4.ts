import { func, number } from "joi";

function numberOfDigits(n: number): number {
  if (!Number.isInteger(n)) {
    throw new Error("La saisie doit être un nombre entier");
  }
  let count: number = 0;
  for (let i = n; i > 0; i = Math.floor(i / 10)) {
    count++;
  }
  return count;
}

console.log(numberOfDigits(12));
console.log(numberOfDigits(1253));

function reverseAString(str: string): string {
  let newString: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseAString("Ludovic"));

function reverseAString2(str: string): string {
  let newString: string = "";
  for (let i = 0; i < str.length; i++) {
    newString = str[i] + newString;
  }
  return newString;
}

console.log(reverseAString2("Ludovic"));

function multiplicationTable(): string {
  let multiplicationLine: string = "";
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      multiplicationLine += `${i}*${j} = ${i * j}\n  `;
    }
    multiplicationLine += "\n";
  }
  return multiplicationLine;
}

console.log(multiplicationTable());

function sumOfNumbers(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("La saisie doit être un nombre entier et positif");
  }
  let sum: number = 0;
  const str: string = n.toString();
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}

console.log(sumOfNumbers(1515));

function primeNumber(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(1));
console.log(primeNumber(131356));
