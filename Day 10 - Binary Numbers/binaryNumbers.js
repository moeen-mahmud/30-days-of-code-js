"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function findConsecutiveOnes(input) {
  const binary = input.toString(2); // Convert the input number to binary

  let largestCounter = 0;
  let currentCounter = 0;

  for (let i = 0; i < binary.length; i++) {
    // resetting the current counter variable if the loop finds any 0
    if (binary[i] == 0) {
      currentCounter = 0;
    } else {
      currentCounter++; // if the loop isn't able to find 0 then it will increase the count by 1
    }

    // the next condition is to check if the current counter variable is larger than
    // the largest counter variable then we're setting them into the largest counter, otherwise not.
    if (currentCounter > largestCounter) {
      largestCounter = currentCounter;
    }
  }
  console.log(largestCounter);
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  findConsecutiveOnes(n);
}
