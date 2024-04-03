let display = '0';
let value;
let operator;

function calculatorDisplay(val) {
    if(display === '0') {
        display = '';
    }
    display += val;
    document.querySelector('.calculator__display').innerText = display;
}

function handleOperation(val) {
    if(operator) {
        calculateResult();
    }
    
    value = display;
    operator = val;
    display = '0';
}

function calculateResult() {
    let result;

    switch(operator) {
        case '+':
            result = Number(value) + Number(display);
            break;
        case '-':
            result = Number(value) - Number(display);
            break;
        case '*':
            result = Number(value) * Number(display);
            break;
        case '/':
            result = Number(value) / Number(display);
            break;
        default:
            return `Error`
    }

    display = result.toString();
    document.querySelector('.calculator__display').innerText = display;

    operator = null;
}

function clearDisplay() {
    display = '0';
    value = null;
    operator = null;
    document.querySelector('.calculator__display').innerText = display;
}