let firstNumber = (secondNumber = operator = "");
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
        firstNumber = outputElement.textContent;
        secondNumber = operator = "";
        return;
      } else {
        return;
      }
    }

    if (numberValues.includes(event.target.value)) {
      if (operator === "") {
        if (firstNumber.includes(".") && event.target.value === ".") {
          return;
        }
        firstNumber += event.target.value;
        outputElement.textContent += event.target.value;
      } else {
        if (secondNumber.includes(".") && event.target.value === ".") {
          return;
        }
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
  firstNumber = secondNumber = operator = "";
});
