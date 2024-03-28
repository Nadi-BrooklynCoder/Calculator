let currentDisplay = '0';
let resultDisplay;

function calculatorDisplay(val) {
    if(currentDisplay === '0' || resultDisplay == false) {
        currentDisplay = val;
    } else {
        currentDisplay += val
    }
    resultDisplay = false;

    updatedDisplay();
}

function updatedDisplay() {
    const display = document.querySelector('.calculator__display')

    display.textContent = currentDisplay;
}

function calculateResult(operator) {

    
}


