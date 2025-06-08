
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
            return num1 * num2;
        case '/':
            if (num2 === 0) return 'Error';
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}

//Get display element 
let display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".btn.number");
const clearButton = document.querySelector(".btn.clear");
const equalButton = document.querySelector(".btn.equal");
const operatorButtons = document.querySelectorAll(".btn.operator");

let currentDisplay = "";
display.textContent = "0";

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

// Add event listeners operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentDisplay === '') return;

        if (num1 === null) {
            num1 = parseFloat(currentDisplay);
        } else if (operator !== null) {
            num2 = parseFloat(currentDisplay);
            const result = operate(num1, num2, operator);
            display.textContent = result;
            num1 = result;
        }

        operator = button.textContent;
        currentDisplay = '';
    });
});

// Add even listeners to clear and equal buttons
clearButton.addEventListener('click', () => {
  
    currentDisplay = "";
    num1 = null;
    num2 = null;
    operator = null;
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
    }
});