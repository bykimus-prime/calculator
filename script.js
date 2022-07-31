// global variables
let num1 = 0;
let num2 = 0;
let tempNum1Array = [];
let tempNum2Array = [];
let savedFirstValue = 0;
let operator = '';

// arithmetic functions
function add(num1, num2) {
    let addValue = (num1 + num2);
    let roundedValue = Math.round((addValue + Number.EPSILON) * 100) / 100;
    roundedValue = roundedValue.toFixed(2);
    console.log('add', rounded);
    const calcDisp = document.getElementById('displayArea');
    calcDisp.textContent = rounded;
};

function subtract(num1, num2) {
    let subtractValue = (num1 - num2);
    let roundedValue = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    roundedValue = roundedValue.toFixed(2);
    console.log('subtract', rounded);
    const calcDisp = document.getElementById('displayArea');
    calcDisp.textContent = rounded;
};

function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    let roundedValue = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    roundedValue = roundedValue.toFixed(2);
    console.log('multiply', rounded);
    const calcDisp = document.getElementById('displayArea');
    calcDisp.textContent = rounded;
};

function divide(num1, num2) {
    let divideValue = (num1 / num2);

    if (divideValue == "Infinity") {
        return alert('Error! Can\'t divide by zero. You know the drill.');
    } else {
        let roundedValue = Math.round((divideValue + Number.EPSILON) * 100) / 100;
        roundedValue = roundedValue.toFixed(2);
        console.log('divide', rounded);
        const calcDisp = document.getElementById('displayArea');
        calcDisp.textContent = rounded;
    }
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
            console.log('passing through switch +')
            add(num1, num2);
            break;
        case '-':
            console.log('passing through switch -')
            subtract(num1, num2);
            break;
        case '*':
            console.log('passing through switch *')
            multiply(num1, num2);
            break;
        case '/':
            console.log('passing through switch /')
            divide(num1, num2);
            break;
        default:
            alert('Error! No/incorrect operator chosen');
    }
}

function calcFactory() {
    
    function getNumberInput() {
        const operandBtns = document.querySelectorAll('.operand');
        operandBtns.forEach((button) => {
            button.addEventListener('click', () => {
                console.log('click for first number');
                savedFirstValue = button.getAttribute('value');
                console.log(savedFirstValue);
                const calcDisp = document.getElementById('displayArea');

                // append to num1/num2 if multiple numbers pressed then display
                if (operator == '') {
                    tempNum1Array.push(savedFirstValue);
                    console.log('show the array1', tempNum1Array);
                    num1 = tempNum1Array.join('');
                    console.log('saved first value is: ', num1);
                    calcDisp.textContent = num1;
                } else {
                    tempNum2Array.push(savedFirstValue);
                    console.log('show the array2', tempNum2Array);
                    num2 = tempNum2Array.join('');
                    console.log('num2 is: ', num2);
                    calcDisp.textContent = num2;
                }
            })
        })
    }

    function getOperatorChoice() {
        const operatorBtns = document.querySelectorAll('.operator');
        operatorBtns.forEach((button) => {
            button.addEventListener('click', () => {
                console.log('get operator');
                operator = button.getAttribute('value');
                console.log(operator);
                tempOperatorArray.push(operator);
                console.log('store temp operator in array for multiple calcs: ', tempOperatorArray);

                if ((tempNum1Array != '') && (tempNum2Array != '')) {
                    const calcDisp = document.getElementById('displayArea');
                    num1 = tempNum1Array.join('');
                    num2 = tempNum2Array.join('');
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    let tempOperator = tempOperatorArray[tempOperatorArray.length - 2].toString();
                    console.log('running string calculation');
                    operate(tempOperator, num1, num2);
                    let tempStringValue = calcDisp.textContent;
                    console.log('temp string value: ', tempStringValue);
                    console.log('clearing out arrays and nums');
                    tempNum1Array = [];
                    tempNum2Array = [];
                    num1 = 0;
                    num2 = 0;
                    console.log('array 1: ', tempNum1Array);
                    console.log('array 2: ', tempNum2Array);
                    console.log('num1: ', num1);
                    console.log('num2: ', num2);
                    tempNum1Array.push(tempStringValue);
                    num1 = tempNum1Array.join('');
                    console.log('pushed string value to array 1: ', tempNum1Array);
                }
            })
        })
    }

    function calculate() {
        const equalsBtn = document.getElementById('equalsBtn');
        equalsBtn.addEventListener('click', () => {
            console.log('do the math', num1, num2, operator);
            const calcDisp = document.getElementById('displayArea');
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            operate(operator, num1, num2);
        })
    }

    // clear button reloads the page
    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', () => { location.reload();
    })

    // call and run the sub-functions
    getNumberInput();
    getOperatorChoice();
    calculate();
}

// call and run the main function
calcFactory();