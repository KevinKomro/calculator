let firstNumber;
let secondNumber;
let operator = "";
let result;

let resultElement = document.querySelector(".output-text");
let buttons = document.querySelectorAll(".inputButton");
let clearButton = document.querySelector(".clearButton");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    result = resultElement.textContent = event.target.value;
  });
});

clearButton.addEventListener("click", () => {
  result = resultElement.textContent = 0;
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
