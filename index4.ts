// import { func, number } from "joi";

import { number } from "joi";

// function numberOfDigits(n: number): number {
//   if (!Number.isInteger(n)) {
//     throw new Error("La saisie doit être un nombre entier");
//   }
//   let count: number = 0;
//   for (let i = n; i > 0; i = Math.floor(i / 10)) {
//     count++;
//   }
//   return count;
// }

// console.log(numberOfDigits(12));
// console.log(numberOfDigits(1253));

// function reverseAString(str: string): string {
//   let newString: string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// console.log(reverseAString("Ludovic"));

// function reverseAString2(str: string): string {
//   let newString: string = "";
//   for (let i = 0; i < str.length; i++) {
//     newString = str[i] + newString;
//   }
//   return newString;
// }

// console.log(reverseAString2("Ludovic"));

// function multiplicationTable(): string {
//   let multiplicationLine: string = "";
//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       multiplicationLine += `${i}*${j} = ${i * j}\n  `;
//     }
//     multiplicationLine += "\n";
//   }
//   return multiplicationLine;
// }

// console.log(multiplicationTable());

// function sumOfNumbers(n: number): number {
//   if (!Number.isInteger(n) || n < 0) {
//     throw new Error("La saisie doit être un nombre entier et positif");
//   }
//   let sum: number = 0;
//   const str: string = n.toString();
//   for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
//   }
//   return sum;
// }

// console.log(sumOfNumbers(1515));

// function primeNumber(n: number): boolean {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(primeNumber(1));
// console.log(primeNumber(131356));

// function countLettersWithoutAccent(str: string): number {
//   let count: number = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char: string = str[i];
//     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLettersWithoutAccent("Ludovic and Ludovica"));

// function countLettersWithAccent(str: string): number {
//   let count: number = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char: string = str[i];
//     if (char.toLocaleLowerCase() !== char.toUpperCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLettersWithAccent("Ludo à la Plage 123"));

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

// function countLettersWithAccentAndRegex2(str: string): number {
//   const matches = str.match(/\p{L}/gu);
//   return matches ? matches.length : 0;
// }

// console.log(countLettersWithAccentAndRegex2("Ludovic à la Plage"));

function theLongestWord(str: string): string {
  const words = str.match(/[a-zA-ZÀ-ÿ0-9]+/gi);

  if (!words) {
    throw new Error("La saisie doit comporter à minima un mot");
  }

  let largest: string = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > largest.length) {
      largest = words[i];
    }
  }
  return largest;
}

console.log(theLongestWord("Ludovic à la plage"));

function oddNumbersArray(arrNumb: number[]): number[] {
  let oddNumbers: number[] = [];
  for (let i = 0; i < arrNumb.length; i++) {
    if (arrNumb[i] % 2 !== 0) {
      oddNumbers.push(arrNumb[i]);
    }
  }
  return oddNumbers;
}

console.log(oddNumbersArray([24, 26, 81, 33, 69, 22, 88]));

function mostCommonValue(arr: number[]): number {
  let maxcount: number = 0;
  let value: number = 0;

  for (let i = 0; i < arr.length; i++) {
    let count: number = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
      if (count > maxcount || (count === maxcount && arr[i] > value)) {
        maxcount = count;
        value = arr[i];
      }
    }
  }
  return value;
}

console.log(mostCommonValue([12, 33, 12, 12, 87, 125]));



function uniqueArray(arr1: number[], arr2: number[]): number[] {
  const mergedArray: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!mergedArray.includes(arr1[i])) {
      mergedArray.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!mergedArray.includes(arr2[i])) {
      mergedArray.push(arr2[i]);
    }
  }

  return mergedArray;
}

console.log(uniqueArray([1, 2, 3, 4], [4, 5, 6, 7, 7]));
