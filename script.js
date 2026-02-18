
let numX;
let numY;
let op;
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const signAdd = document.getElementById('add');
const signSubtract = document.getElementById('subtract');
const signMultiply = document.getElementById('multiply');
const signDivide = document.getElementById('divide');
const decimalPoint = document.getElementById('point');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

function add(num1, num2) {
    return num1 + num2 
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, op) {
    switch (op) {
        case add: 
            add(num1, num2);
            break;
        case subtract:
            subtract(num1, num2);
            break;
        case multiply:
            multiply(num1, num2);
            break;
        case divide:
            divide(num1, num2);
            break;
    }
}

