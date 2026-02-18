
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
const display = document.getElementById("display");
const calculator = document.querySelector('#calculator');

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

clear.addEventListener('click', () => {
    display.textContent = ''
})

calculator.addEventListener('click', function(e) {
    let tgt = e.target;
    if (tgt.id === 'zero') {
        display.textContent += '0'
    } else if (tgt.id === 'one') {
        display.textContent += '1';
    } else if (tgt.id === 'two') {
        display.textContent += '2';
    } else if (tgt.id === 'three') {
        display.textContent += '3';
    } else if (tgt.id === 'four') {
        display.textContent += '4';
    } else if (tgt.id === 'five') {
        display.textContent += '5';
    } else if (tgt.id === 'six') {
        display.textContent += '6';
    } else if (tgt.id === 'seven') {
        display.textContent += '7';
    } else if (tgt.id === 'eight') {
        display.textContent += '8';
    } else if (tgt.id === 'nine') {
        display.textContent += '9';
    } else if (tgt.id === 'point') {
        display.textContent += ".";
    }
})

/*

zero.addEventListener('click', () => {
    display.textContent += "0"
})

one.addEventListener('click', () => {
    display.textContent += "1"
})
    */