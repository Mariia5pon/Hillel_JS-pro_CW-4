function switchABC() {
    let number = parseInt(prompt('Enter your number please'));
    switch (number) {
        case 1:
            console.log('a');
            break;
        case 2:
            console.log('b');
            break;
        case 3:
            console.log('c');
            break;
        default:
            console.log('UA');
    }
}

function biggestNumber() {
    const hidden = document.getElementById('hidden');
    hidden.hidden = !hidden.hidden;

    const input1 = parseFloat (document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    let outputNumber;

    if (input1 > input2) {
        outputNumber = `Більше число: ${input1}, менше число: ${input2}`;
    } else if (input1 < input2) {
        outputNumber = `Більше число: ${input2}, менше число: ${input1}`;
    } else if (input1 === input2){
        outputNumber = 'Числа рівні';
    } else {
        outputNumber = 'Введіть будь ласка числа';
    }

    const outputField = document.getElementById('output');
    outputField.textContent = outputNumber;
}

function compareNumbers() {
    let number = parseInt(document.getElementById('input5').value);

    if ((number <10 || number > 99) || (isNaN(number))){
        alert('Введіть будь ласка двозначне число');
        return;
    }

    let digit2 = number % 10;
    number -= digit2;
    number /= 10;
    let digit1 = number;
    let result;

    if (digit1 > digit2) {
        result = 'Перша цифра більше за другу.';
    } else if (digit2 > digit1) {
        result = 'Друга цифра більше за першу.';
    } else {
        result = 'Числа рівні';
    }

    alert(result);
}

function evenOrOdd() {
    let number = parseInt(prompt('Enter your number please'));

    if (isNaN(number)){
        alert('Введіть будь ласка число');
        return;
    }

    alert((number % 2 === 1) ? 'Число непарне' : 'Число парне');

}

function checkLastDigit() {
    let number = parseInt(prompt('Enter your number please'));

    if (isNaN(number)){
        alert('Введіть будь ласка число');
        return;
    }

    let lastDigit = number % 10;

    alert(lastDigit + ' - ' + ((number % 2 === 1) ? 'число непарне' : 'число парне'));
}

function range() {
    let number = parseInt(prompt('Enter your number please'));

    if (isNaN(number)){
        alert('Введіть будь ласка число');
        return;
    }

    if (number>=0 && number <=500) {
        alert('Входить');
    } else {
        alert('Не входить');
    }


}













