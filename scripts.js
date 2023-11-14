/**
 * The current value displayed on the calculator.
 * @type {string}
 */
let displayValue = '';

/**
 * Appends a number to the displayValue and updates the display.
 * @param {string} number - The number to be appended.
 */
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

/**
 * Appends an operator to the displayValue and updates the display.
 * @param {string} operator - The operator to be appended.
 */
function appendOperator(operator) {
    displayValue += ` ${operator} `;
    updateDisplay();
}

/**
 * Appends a decimal point to the displayValue if not already present and updates the display.
 */
function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

/**
 * Clears the displayValue and updates the display.
 */
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

/**
 * Evaluates the displayValue, sets the result as the new displayValue, and updates the display.
 * If an error occurs during evaluation, sets the displayValue to 'Error'.
 */
function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

/**
 * Updates the HTML display element with the current displayValue.
 */
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
