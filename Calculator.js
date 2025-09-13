"Use strict";

// assigning variable names to DOM elements
const container = document.querySelector(".container");
const screen = document.querySelector(".screen");
const clr = document.querySelector(".clear-btn");

// function to clear screen
clr.addEventListener("click", () => {
  location.reload();
});

// created functions for basic math operations
const addFunc = (firstNum, secondNum) => {
  firstNum += secondNum;
  let result = firstNum;
  return (screen.textContent = result);
};
const subFunc = (firstNum, secondNum) => {
  firstNum -= secondNum;
  let result = firstNum;
  return (screen.textContent = result);
};
const multFunc = (firstNum, secondNum) => {
  firstNum *= secondNum;
  let result = firstNum;
  return (screen.textContent = result);
};
const divFunc = (firstNum, secondNum) => {
  firstNum /= secondNum;
  let result = firstNum.toFixed(2);
  return (screen.textContent = result);
};

const operate = function (arr) {
  if (arr.includes("+")) {
    return addFunc(Number(arr[0]), Number(arr[2]));
  } else if (arr.includes("-")) {
    return subFunc(Number(arr[0]), Number(arr[2]));
  } else if (arr.includes("/")) {
    return divFunc(Number(arr[0]), Number(arr[2]));
  } else if (arr.includes("*")) {
    return multFunc(Number(arr[0]), Number(arr[2]));
  } else {
    return;
  }
};

let calculation;
let calculate;
let calcString;

// using event delegation to handle all clicks in the container
container.addEventListener("click", (e) => {
  calculation = e.target.closest(".number, .operator, .operator-equal"); // if the event target finds the closes ancestor (.number,  .operator) if yes return this element if no move up to its parent and repeat
  if (!calculation || !container.contains(calculation)) return; // guard clause, if its not a .number or .operator element or if the clicked element does not contain a .number or .operator, then immediately return and end the function
  screen.textContent += calculation.textContent.trim(); // building a calculation string in the screen element, using trim() to trim any white space
  calcString = screen.textContent;
  let splitCalc = calcString.split(/([+-/*=])/g); // creating a regex (regular expression) inside a capture group () to include operators in the output
  console.log(splitCalc);
  calculate = e.target.closest(".operator-equal"); // handling the event for the equals operator
  if (calculate) return operate(splitCalc);
});
