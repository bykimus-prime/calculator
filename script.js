

// arithmetic functions
function add(num1, num2) {
    let addValue = (num1 + num2);
    return addValue;
};

function subtract(num1, num2) {
    let subtractValue = (num1 - num2);
    return subtractValue;
};

function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    return multiplyValue;
};

function divide(num1, num2) {
    let divideValue = (num1 / num2);

    if (divideValue == "Infinity") {
        return alert('Error! Can\'t divide by zero. You know the drill.');
    } else return divideValue;
}

const power = function (num1, num2) {
    return num1 ** num2;
};

const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
};

function operate() {

}