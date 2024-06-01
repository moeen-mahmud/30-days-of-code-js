function processData(input) {
  let message = input.split("\n");
  let processedNumber = parseInt(message[0]);

  for (let i = 0; i < processedNumber; i++) {
    let processedMessage = message[i + 1];
    let processedMessageLen = processedMessage.length;
    let messageArray = processedMessage.split("");
    let evenString = "";
    let oddString = "";
    for (let j = 0; j < processedMessageLen; j++) {
      if (j % 2 === 0) {
        evenString += messageArray[j];
      } else {
        oddString += messageArray[j];
      }
    }
    console.log(evenString + " " + oddString);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
