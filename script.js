
//Variables for operands
let num1;
let num2;
let operator;

// Operation function
const operate = function(num1, num2, operator) {
    switch(operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        result = num1 * num2;
        return result | 0;
      case '/':
        result = num1 / num2;
        return result | 0;
      default:
        throw new Error('Invalid operator');
    }
}

num1 = 5.24
num2 = 10
operator = '*'
console.log(operate(num1, num2, operator))

//Get display element 
let display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".btn.number");
const clearButton = document.querySelector(".btn.clear");
const equalButton = document.querySelector(".btn.equal")
const operatorButtons = document.querySelectorAll(".btn.operator")

display.innerHTML = "";
let currentDisplay = display.textContent;

// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
      const value = button.textContent;
     
      // Prevent multiple dots
        if (value === '.' && currentDisplay.includes('.')) return;

        // Append digit or decimal
        currentDisplay += value;

        // Update the screen
        display.textContent = currentDisplay;
    });
});

// Add even listeners to clear and equal buttons
// Add event listeners operator buttons
