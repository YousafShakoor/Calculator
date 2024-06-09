let resultDisplay = document.getElementById('resultDisplay');
let currentInput = ''; 

function appendToDisplay(value) {
    currentInput += value;
    resultDisplay.value = currentInput;
}


function clearDisplay() {
    currentInput = '';
    resultDisplay.value = '';
}


function clearDisplayBy1() {
    currentInput = currentInput.slice(0, -1);
    resultDisplay.value = currentInput;
}


function calculate() {
    try {
 
        currentInput = eval(currentInput.replace(/x/g, '*').replace(/%/g, '/100'));
        resultDisplay.value = currentInput;
    } catch (error) {
        resultDisplay.value = 'Error';
        currentInput = '';
    }
}
