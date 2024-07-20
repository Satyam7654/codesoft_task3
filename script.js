document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstNumber = '';
    let secondNumber = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstNumber = '';
                secondNumber = '';
                display.textContent = '0';
                return;
            }

            if (value === '=') {
                secondNumber = currentInput;
                display.textContent = calculate(firstNumber, secondNumber, operator);
                currentInput = display.textContent;
                return;
            }

            if (this.classList.contains('operator')) {
                firstNumber = currentInput;
                operator = value;
                currentInput = '';
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });

    function calculate(num1, num2, operator) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});
