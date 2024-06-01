"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

class Difference {
  private elements: number[];
  public maximumDifference: number;

  constructor(elements: number[]) {
    this.elements = elements;
    this.maximumDifference = 0;
  }

  compute(): void {
    let max = Math.max(...this.elements);
    let min = Math.min(...this.elements);

    this.maximumDifference = Math.abs(max - min);
  }
}

function main() {
  // Enter your code here
  const n = parseInt(readLine().trim(), 10);
  const elements = readLine().trim().split(" ").map(Number);

  const difference = new Difference(elements);

  difference.compute();

  console.log(difference.maximumDifference);
}
