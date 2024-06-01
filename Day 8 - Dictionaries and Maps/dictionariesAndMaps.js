function processData(input) {
  //Enter your code here
  const splitInput = input.split("\n");
  const numberLength = splitInput.shift();
  const phonebook = new Map();

  const query = splitInput.reduce((target, item, index) => {
    index < numberLength
      ? phonebook.set(item.split(" ").at(0), item.split(" ").at(1))
      : target.push(item);
    return target;
  }, []);

  query.forEach((item) => {
    console.log(
      phonebook.get(item) ? `${item}=${phonebook.get(item)}` : "Not found"
    );
  });
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

/**
 * Sample Input
 * 3
 * sam 99912222
 * tom 11122222
 * harry 12299933
 * sam
 * edward
 * harry
 */
