const buttons = document.querySelector(".calculator-buttons");
const display = document.querySelector(".display");

let firstNumber = null;
let operator;
let secondNumber = null;
let result;
let lastKeyOperator = false;
let lastKeyEqual = false;
let isThereOperation = false;

const reset = () => {
  display.value = "0";
  firstNumber = null;
  secondNumber = null;
  operator = null;
  result = null;
  lastKeyOperator = false;
  lastKeyEqual = false;
  isThereOperation = false;
};

const operation = (num1, num2) => {
  if (operator === "+") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "−") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "×") {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "÷") {
    result = parseFloat(num1) / parseFloat(num2);
  }

  result = Math.round(result * 10000000) / 10000000;
  result = result.toString().slice(0, 9);
  // para impedir que después del truncado quede un punto decimal como último caracter
  if (result[result.length - 1] === ".") {
    result = result.slice(0, -1);
  }

  isThereOperation = true;
};

// cambiar colores de los botones cuando se operan por teclado
const plusSingStyle = document.querySelector(".plus").style;
const minusSingStyle = document.querySelector(".minus").style;
const timesSingStyle = document.querySelector(".times").style;
const divideSingStyle = document.querySelector(".divide").style;

const colorActive = (operatorKeyStyle) => {
  operatorKeyStyle.backgroundColor = "white";
  operatorKeyStyle.color = "#FE9F0A";
};

const colorInactive = (operatorKeyStyle) => {
  operatorKeyStyle.backgroundColor = "#FE9F0A";
  operatorKeyStyle.color = "white";
};

buttons.addEventListener("click", (event) => {
  colorInactive(plusSingStyle);
  colorInactive(minusSingStyle);
  colorInactive(divideSingStyle);
  colorInactive(timesSingStyle);

  if (!event.target.closest("button")) {
    return;
  }

  const button = event.target;
  const buttonContent = button.textContent;
  const displayValue = display.value;

  if (button.classList.contains("decimal")) {
    if (
      displayValue === "0" ||
      lastKeyOperator === true ||
      lastKeyEqual === true
    ) {
      display.value = `0${buttonContent}`;
    } else if (displayValue.includes(".")) {
      return;
    } else {
      display.value = displayValue + buttonContent;
    }
    lastKeyOperator = false;
    lastKeyEqual = false;
  }

  if (button.classList.contains("number")) {
    if (
      displayValue === "0" ||
      lastKeyOperator === true ||
      lastKeyEqual === true
    ) {
      display.value = buttonContent;
    } else if (displayValue.length >= 9) {
      return;
    } else if (displayValue !== "0") {
      display.value = displayValue + buttonContent;
    }
    lastKeyOperator = false;
    lastKeyEqual = false;
  }

  if (button.classList.contains("ac")) {
    reset();
  }

  if (button.classList.contains("erase")) {
    display.value = display.value.slice(0, -1);
    if (displayValue[displayValue.length - 2] === ".") {
      display.value = display.value.slice(0, -1);
    }
  }

  if (button.classList.contains("operation")) {
    if (isThereOperation === false) {
      firstNumber = displayValue;
    } else if (lastKeyOperator === false) {
      secondNumber = displayValue;
      operation(firstNumber, secondNumber);
      firstNumber = result;
      display.value = result;
    }
    operator = buttonContent;
    lastKeyOperator = true;
    isThereOperation = true;
  }

  if (button.classList.contains("equal")) {
    if (firstNumber === null) {
      return;
    }
    if (lastKeyEqual === true && lastKeyOperator === true) {
      secondNumber = displayValue;
      operation(result, secondNumber);
      display.value = result;
      isThereOperation = false;
    } else if (lastKeyEqual === true) {
      operation(result, secondNumber);
      display.value = result;
      isThereOperation = false;
    } else if (lastKeyEqual === false) {
      secondNumber = displayValue;
      operation(firstNumber, secondNumber);
      display.value = result;
      lastKeyEqual = true;
      lastKeyOperator = false;
      isThereOperation = false;
    }
  }

  if (display.value.length >= 9) {
    display.style.fontSize = "33px";
  } else if (display.value.length === 8) {
    display.style.fontSize = "37px";
  } else {
    display.style.fontSize = "40px";
  }
  document.activeElement.blur();
});

// teclado
window.addEventListener("keydown", (event) => {
  colorInactive(plusSingStyle);
  colorInactive(minusSingStyle);
  colorInactive(divideSingStyle);
  colorInactive(timesSingStyle);

  const { key } = event;
  const displayValue = display.value;

  if (key === "." || key === ",") {
    if (
      displayValue === "0" ||
      lastKeyOperator === true ||
      lastKeyEqual === true
    ) {
      display.value = "0.";
    } else if (displayValue.includes(".")) {
      return;
    } else {
      display.value = `${displayValue}.`;
    }
    lastKeyOperator = false;
    lastKeyEqual = false;
  }

  if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9" ||
    key === "0"
  ) {
    if (
      displayValue === "0" ||
      lastKeyOperator === true ||
      lastKeyEqual === true
    ) {
      display.value = key;
    } else if (displayValue.length >= 9) {
      return;
    } else if (displayValue !== "0") {
      display.value = displayValue + key;
    }
    lastKeyOperator = false;
    lastKeyEqual = false;
  }

  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
    if (displayValue[displayValue.length - 2] === ".") {
      display.value = display.value.slice(0, -1);
    }
  }

  if (key === "+" || key === "-" || key === "x" || key === "*" || key === "/") {
    if (isThereOperation === false) {
      firstNumber = displayValue;
    } else if (lastKeyOperator === false) {
      secondNumber = displayValue;
      operation(firstNumber, secondNumber);
      firstNumber = result;
      display.value = result;
    }

    if (key === "+") {
      operator = "+";
      colorActive(plusSingStyle);
    } else if (key === "-") {
      operator = "−";
      colorActive(minusSingStyle);
    } else if (key === "x") {
      operator = "×";
      colorActive(timesSingStyle);
    } else if (key === "*") {
      operator = "×";
      colorActive(timesSingStyle);
    } else if (key === "/") {
      operator = "÷";
      colorActive(divideSingStyle);
    }

    lastKeyOperator = true;
    isThereOperation = true;
  }

  if (key === "Enter") {
    if (firstNumber === null) {
      return;
    }
    if (lastKeyEqual === true && lastKeyOperator === true) {
      secondNumber = displayValue;
      operation(result, secondNumber);
      display.value = result;
      isThereOperation = false;
    } else if (lastKeyEqual === true) {
      operation(result, secondNumber);
      display.value = result;
      isThereOperation = false;
    } else if (lastKeyEqual === false) {
      secondNumber = displayValue;
      operation(firstNumber, secondNumber);
      display.value = result;
      lastKeyEqual = true;
      lastKeyOperator = false;
      isThereOperation = false;
    }
  }

  if (display.value.length >= 9) {
    display.style.fontSize = "33px";
  } else if (display.value.length === 8) {
    display.style.fontSize = "37px";
  } else {
    display.style.fontSize = "40px";
  }
});
