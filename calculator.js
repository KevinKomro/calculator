let firstNumber = "";
let secondNumber = "";
let operator = "";
let numberValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let outputElement = document.querySelector(".output-text");
let buttons = document.querySelectorAll(".inputButton");
let clearButton = document.querySelector(".clearButton");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (outputElement.textContent === "0") {
      outputElement.textContent = "";
    }

    if (event.target.value === "=") {
      if (operator && firstNumber && secondNumber) {
        outputElement.textContent = operate(
          operator,
          Number(firstNumber),
          Number(secondNumber)
        );
        return;
      } else {
        return;
      }
    }

    if (numberValues.includes(event.target.value)) {
      if (operator === "") {
        firstNumber += event.target.value;
        outputElement.textContent += event.target.value;
      } else {
        secondNumber += event.target.value;
        outputElement.textContent += event.target.value;
      }
    } else {
      if (operator === "") {
        operator = event.target.value;
        outputElement.textContent += event.target.value;
      } else {
        outputElement.textContent = outputElement.textContent.replace(
          operator,
          event.target.value
        );
        operator = event.target.value;
      }
    }
  });
});

clearButton.addEventListener("click", () => {
  outputElement.textContent = 0;
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

// Testing ************************

// // Add
// console.log("add: " + add(2, 3));
// // Subtract
// console.log("subtract: " + subtract(5, 3));
// // Multiply
// console.log("multiply: " + multiply(6, 8));
// // Divide
// console.log("divide: " + divide(120, 10));
// console.log("\n");

// // Add - using operate
// console.log("operate add: " + operate("+", 2, 3));
// // Subtract - using operate
// console.log("operate subtract: " + operate("-", 5, 3));
// // Multiply - using operate
// console.log("operate multiply: " + operate("*", 6, 8));
// // Divide - using operate
// console.log("operate divide: " + operate("/", 120, 10));
