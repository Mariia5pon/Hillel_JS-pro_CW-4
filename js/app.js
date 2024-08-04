function checkType() {
   alert('Подивись в консолі (F12).')
    let stringType = "Hello!";
    let numberType = 42;
    let bigintType = 1234567890123456789012345678901234567890n;
    let booleanType = true;
    let undefinedType;
    let objectType = { name: "John", age: 30 };
    let symbolType = Symbol("id");
    let functionType = function myFunction() { console.log("It's a function."); };

    console.log(typeof stringType);
    console.log(typeof numberType);
    console.log(typeof bigintType);
    console.log(typeof booleanType);
    console.log(typeof undefinedType);
    console.log(typeof objectType);
    console.log(typeof symbolType);
    console.log(typeof functionType);
}

