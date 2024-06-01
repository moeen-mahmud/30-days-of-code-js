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

function main() {
  const N = parseInt(readLine().trim(), 10);
  stub(N);
}

function stub(n) {
  if (n >= 2 && n <= 5) {
    if (n % 2 === 0) {
      process.stdout.write("Not Weird");
    } else {
      process.stdout.write("Weird");
    }
  } else if (n >= 6 && n <= 20) {
    process.stdout.write("Weird");
  } else if (n > 20) {
    if (n % 2 === 0) {
      process.stdout.write("Not Weird");
    } else {
      process.stdout.write("Weird");
    }
  }
}
