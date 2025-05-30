import { number } from "joi";

function countDigits(n: number): number {
  if (!Number.isInteger(n)) {
    throw new Error("La saisie doit être un nombre entier");
  }
  let count: number = 0;
  for (let i = n; i > 0; i = Math.floor(i / 10)) {
    count++;
  }
  return count;
}

console.log(countDigits(15899));

function reverseAString3(str: string): string {
  let newString: string = "";
  for (let i = 0; i < str.length; i++) {
    newString = str[i] + newString;
  }
  return newString;
}

console.log(reverseAString3("Ludovic"));

function fullMultiplicationTables(): string {
  let multiplicationLine: string = "";
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      multiplicationLine += `${i} * ${j} = ${i * j} \n`;
    }
    multiplicationLine += `\n`;
  }
  return multiplicationLine;
}

console.log(fullMultiplicationTables());

function sumOfDigits(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("La saisie doit être un nombre entier");
  }
  let sum: number = 0;
  const strN = n.toString();
  for (let i = 0; i < strN.length; i++) {
    sum += parseInt(strN[i]);
  }
  return sum;
}

console.log(sumOfDigits(1515));

function primeNumber(n: number): boolean {
  if (!Number.isInteger(n) || n <= 1) {
    throw new Error("La saisie doit être un nombre entier et supèrieur à 1");
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(13));
console.log(primeNumber(7));
console.log(primeNumber(6));
