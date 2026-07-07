// --------------------------------- variables and datatypes --------------------------------

// JavaScript variables are containers for data.
// JavaScript variables can be declared in 3 ways: var, let, and const.

// var: The var keyword is used to declare a variable in JavaScript. It has function scope, which means that it is accessible within the function in which it is declared. If it is declared outside of a function, it has global scope.

var name = "John"; // declaring a variable using var
console.log(name); // Output: John

// let: The let keyword is used to declare a variable in JavaScript. It has block scope, which means that it is accessible only within the block in which it is declared.

let age = 30; // declaring a variable using let
console.log(age); // Output: 30

age = 31; // reassigning a value to the variable
console.log(age); // Output: 31

// const: The const keyword is used to declare a variable in JavaScript. It has block scope, which means that it is accessible only within the block in which it is declared. A variable declared with const cannot be reassigned.

const PI = 3.14; // declaring a variable using const
console.log(PI); // Output: 3.14

//PI = 3.14159; // This will throw an error because PI is a constant and cannot be reassigned.

// Data types in JavaScript are divided into two categories: primitive and non-primitive (or reference) data types.

// Primitive data types include: string, number, boolean, null, undefined, and symbol , bigint. 

// Non-primitive data types include: object, array, and function.

// String: A string is a sequence of characters enclosed in single or double quotes.

let firstName = "John"; // declaring a string variable
console.log(firstName); // Output: John

// Number: A number is a numeric value that can be an integer or a floating-point number.

let age1 = 30;
console.log(age1); // Output: 30

let price = 19.99;
console.log(price); // Output: 19.99

// Boolean: A boolean is a data type that can have one of two values: true or false.

let isStudent = true;
console.log(isStudent); // Output: true

let isTeacher = false;
console.log(isTeacher); // Output: false

// Null: The null data type represents the intentional absence of any object value.

let emptyValue = null;
console.log(emptyValue); // Output: null

// Undefined: The undefined data type represents a variable that has been declared but has not yet been assigned a value.

let uninitializedVariable;
console.log(uninitializedVariable); // Output: undefined

// Symbol: A symbol is a unique and immutable primitive value that can be used as a key for object properties.

let symbol1 = Symbol("id");
let symbol2 = Symbol("id");

console.log(symbol1 === symbol2); // Output: false

// BigInt: The BigInt data type is used to represent integers that are too large to be represented by the Number data type.


let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue); // Output: 1234567890123456789012345678901234567890n


// Object: An object is a collection of key-value pairs, where each key is a string (or symbol) and each value can be any data type.

let person = {
    name: "John",
    age: 30,
    isStudent: true
};

console.log(person); // Output: { name: 'John', age: 30, isStudent: true }

// Array: An array is an ordered collection of values, where each value can be any data type.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [ 1, 2, 3, 4, 5 ]


// Function: A function is a block of code that can be executed when called. Functions can take parameters and return values.

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

// Typeof operator: The typeof operator is used to determine the data type of a variable or value.

console.log(typeof firstName); // Output: string
console.log(typeof age1); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)
console.log(typeof uninitializedVariable); // Output: undefined
console.log(typeof symbol1); // Output: symbol
console.log(typeof bigIntValue); // Output: bigint
console.log(typeof person); // Output: object
console.log(typeof numbers); // Output: object
console.log(typeof add); // Output: function
console.log(typeof null); // Output: object (this is a known quirk in JavaScript)
