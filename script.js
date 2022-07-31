// global variables
let num1 = 0;
let num2 = 0;
let operator = '';

// arithmetic functions
function add(num1, num2) {
    let addValue = (num1 + num2);
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    return addValue;
};

function subtract(num1, num2) {
    let subtractValue = (num1 - num2);
    let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    return subtractValue;
};

function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    return multiplyValue;
};

function divide(num1, num2) {
    let divideValue = (num1 / num2);
    let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);

    if (divideValue == "Infinity") {
        return alert('Error! Can\'t divide by zero. You know the drill.');
    } else return divideValue;
};

// const power = function (num1, num2) {
//     return num1 ** num2;
// };

// const sum = function (array) {
//     return array.reduce((total, current) => total + current, 0);
// };

// operator function to determine which operator to call
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            alert('Error! No/incorrect operator chosen');
    }
}

operate(operator, num1, num2);