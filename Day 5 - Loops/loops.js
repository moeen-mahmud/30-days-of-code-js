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

function multiplicationTable(input) {
  let result = 1;
  for (let i = 1; i <= 10; i++) {
    result = input * i;
    console.log(`${input} x ${i} = ${result}`);
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  multiplicationTable(n);
}
