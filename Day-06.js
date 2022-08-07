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
				evenString += messageArray[j]
			} else {
				oddString += messageArray[j]
			}
		}
		console.log(evenString + " " + oddString);
	}
}


let string = "2 " +
	"Hacker" +
	"Rank";
// console.log(processSpace(2));

processData(string);
// console.log(string.slice(1));
