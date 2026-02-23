function add(x, y) {
    return x + y;
} 

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "no zero divisor -.-"
    }
    else {
        return x / y;
    }
}

function operate(operator, x, y) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "×":
            return multiply(x, y);
        case "÷":
            return divide(x, y);
        default:
            return null;
    }
}

const btnValues = [
    "AC", "=", "DEL",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "-",
    "0", ".", "+"
];

const opSymbols = ["÷", "×", "-", "+", "="];
const remSymbols = [ "AC", "DEL"];
const btns = document.getElementById('btns');
const display = document.getElementById("display");

let num1 = null;
let op = null;
let num2 = null;

function clearAll() {
    num1 = null;
    op = null;
    num2 = null;
}

for (let i = 0; i < btnValues.length; i++) {
    let value = btnValues[i];
    let btn = document.createElement("button");
    btn.innerText = value;

    if (value == "0") {
        btn.style.gridColumn = "span 2";
    } 
    else if (value == "=") {
        btn.style.gridColumn = "span 2";
        btn.style.backgroundColor = "rgba(89, 134, 189, 0.88)";
    }
    else if (remSymbols.includes(value)) {
        btn.style.fontSize = "1.2rem";
        btn.style.backgroundColor= "rgb(97, 90, 169)";
    }
    else if (opSymbols.includes(value)) {
        btn.style.backgroundColor = "rgba(89, 134, 189, 0.88)";
    }
    btn.addEventListener("click", () => {
        if (opSymbols.includes(value)) {
            if (value === "=") {
                if (num1 !== null && op !== null && display.value !== "") {
                    num2 = parseFloat(display.value);

                    let result = operate(op, parseFloat(num1), parseFloat(num2));
                        
                    if (!Number.isInteger(result)) {
                        result = parseFloat(result.toFixed(4));
                        }
                    display.value = result;
                    num1 = result;
                    op = null;
                    num2 = null;
                    
                }
            }
            else {
                if (num1 !== null && op !== null && display.value !== "") {
                num2 = parseFloat(display.value);
                let result = operate(op, parseFloat(num1), parseFloat(num2));
                
                if (!Number.isInteger(result)) {
                    result = parseFloat(result.toFixed(4));
                }
                display.value = result;
                num1 = result;
                
             } else if (display.value !== "") {
                num1 = parseFloat(display.value);
                }
                op = value;
                display.value = "";
            }
        } else if (remSymbols.includes(value)) {
            if (value == "AC") {
                clearAll();
                display.value = "";
            }
            else if (value == "DEL") {
                display.value = display.value.toString().slice(0, -1);
            }
        }
        else {
            if (value == ".") {
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            }
            else if (display.value == "0") {
                display.value = value;
            }
            else {
                display.value += value;
            }
        }
    });
    btns.appendChild(btn);
}

document.addEventListener("keydown", (e) => {
    const key = e.key;
    let value = null;

    if (!isNaN(key)) {
        value = key;
    }
    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "=" || key === "Enter") {
        if (key === "*") value = "×";
        else if (key === "/") value = "÷";
        else if (key === "Enter") value = "=";
        else value = key;
    } 
    else if (key === "Escape") {
        value = "AC";
    }
    else if (key === "Backspace") {
        value = "DEL"
    }
    else if (key === ".") {
        value = ".";
    }

    if (value !== null) {
        e.preventDefault();
        const buttons = document.querySelectorAll("#btns button");
        for (let button of buttons) {
            if (button.innerText === value) {
                button.click();
                break;
            }
        }
    }
})
