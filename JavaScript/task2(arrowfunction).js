//type1=>with single parameter

const square = n => n * n;
console.log(square(2)); 

//type2=>multiple parameter

const add = (a, b) => a + b;
console.log(add(1, 2)); 

//type3 =>without parameter

const greet = () => "Hello, World!";
console.log(greet()); 

//type4=>with return type

const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(1, 5));