const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
    return array.reduce((num1, num2) => num1 * num2);
};

const divide = function (array) {
    return array.reduce((num1, num2) => num1 / num2);
}

const power = function (num1, num2) {
    return num1 ** num2;
};