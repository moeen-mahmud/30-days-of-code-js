'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function(): void {
  inputLines = inputString.split('\n');
  inputString = '';
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  // Enter your code here
  let i = 4;
  let d = 4.0;
  let s = 'HackerRank';

  let firstValue = Number(readLine());
  let secondValue = Number(readLine());
  let thirdValue = String(readLine());

  console.log(firstValue + i);
  console.log(parseFloat(String(secondValue + d)).toFixed(1));
  console.log(s + ' ' + thirdValue);
}
