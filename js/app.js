function checkType() {
    alert('Подивись в консолі (F12).')
    let stringType = "Hello!";
    let numberType = 42;
    let bigintType = 1234567890123456789012345678901234567890n;
    let booleanType = true;
    let undefinedType;
    let nullType = null;
    let objectType = {name: "John", age: 30};
    let symbolType = Symbol("id");
    let functionType = function myFunction() {
        console.log("It's a function.");
    };
    let arrayType = [1, 2, 3]

    console.log('Примітивні типи даних:');
    console.log('* тип даних string - ' + typeof stringType);
    console.log('* тип даних number - ' + typeof numberType);
    console.log('* тип даних bigInt - ' + typeof bigintType);
    console.log('* тип даних boolean - ' + typeof booleanType);
    console.log('* тип даних undefined - ' + typeof undefinedType);
    console.log('* тип даних null - ' + typeof nullType);
    console.log('* тип даних symbol - ' + typeof symbolType);

    console.log('Об`єктні типи даних:');
    console.log('* тип даних object - ' + typeof objectType);
    console.log('* тип даних function - ' + typeof functionType);
    console.log('* тип даних array - ' + typeof arrayType);
}

function displayStrings() {
    const hidden = document.getElementById('hidden');
    hidden.hidden = !hidden.hidden;

    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    const outputString = `${input3} - ${input1} - ${input2}`;

    const outputField = document.getElementById('output');
    outputField.textContent = outputString;
}

function displayNumbers() {
    const number = document.getElementById('input5').value;

    let digit5 = Math.floor(number / 10000);
    let digit4 = Math.floor((number % 10000) / 1000);
    let digit3 = Math.floor((number % 1000) / 100);
    let digit2 = Math.floor((number % 100) / 10);
    let digit1 = number % 10;

    alert(digit5 + " " + digit4 + " " + digit3 + " " + digit2 + " " + digit1);
}