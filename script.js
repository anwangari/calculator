
//Variables for operands
let num1 = null;
let num2 = null;
let operator = null;
let isResultDisplayed = false;

// Operation function
const operate = function(num1, num2, operator) {
    switch(operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) return 'Error';
        return num1 / num2;
      default:
        throw new Error('Invalid operator');
    }
}

//Get DOM element 
let display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".btn.number");
const clearButton = document.querySelector(".btn.clear");
const equalButton = document.querySelector(".btn.equal");
const operatorButtons = document.querySelectorAll(".btn.operator");

let currentDisplay = "";
display.textContent = "";

// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
      const value = button.textContent;
     
      // Prevent multiple dots
      if (value === '.' && currentDisplay.includes('.')) return;

      if (isResultDisplayed) {
        currentDisplay = "";
        num1 = null;
        num2 = null;
        operator = null;
        isResultDisplayed = false;
      }
      // Append digit or decimal
      currentDisplay += value;

      // Update the screen
      display.textContent = currentDisplay;
    });
});

// Add event listeners operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    // If no number has been entered yet, don't process the operator
    if (currentDisplay === '' && num1 === null) return;
    
    // If there's a current display, process it as a number
    if (currentDisplay !== '') {
      if (num1 === null) {
        num1 = parseFloat(currentDisplay);
      } else if (operator !== null) {
        num2 = parseFloat(currentDisplay);
        const result = operate(num1, num2, operator);
        display.textContent = result;
        num1 = result;
      }
      currentDisplay = '';
    }
    
    // Always set the operator to the last clicked one
    operator = button.textContent;
  });
});

// Add even listeners to clear and equal buttons
clearButton.addEventListener('click', () => {
  
  currentDisplay = "";
  num1 = null;
  num2 = null;
  operator = null;
  isResultDisplayed = false;
  display.textContent = ""
});

equalButton.addEventListener('click', () => {
  if (operator !== null && num1 !== null && currentDisplay !== '') {
    num2 = parseFloat(currentDisplay);
    console.log(`${num1} ${operator} ${num2}`);
    const result = operate(num1, num2, operator);
    display.textContent = result;

    // Prepare for possible next calculation
    currentDisplay = result.toString();
    num1 = result;
    num2 = null;
    operator = null;
    isResultDisplayed = true;
  }
});