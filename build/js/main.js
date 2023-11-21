"use strict";
let stringArray = ['one', 'two', 'three'];
let guitars = ['Strat', 'les', 5150];
let mixedData = ['check Array', 1, true];
stringArray[0] = 'john';
stringArray.push('hey');
let tes = [];
let blobs = [];
blobs.push('halen');
//my Tuple
let myTuple = ['sh', 32, true];
let mixed = ["sh", 23, true];
//objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = blobs;
myObj = {};
const exampleObj = {
    prop1: 'shan',
    prop2: true,
};
let evh = {
    name: 'jhdgakjsdgh',
    active: false,
    albums: ['adasdhdk', 'hill']
};
let JP = {
    name: 'jdarr',
    active: false,
    albums: ['adaasdadasdasdhdk', 'hill']
};
console.log(evh);
console.log(JP);
evh = JP;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Helloo';
};
console.log(greetGuitarist(JP));
// Enums
// unlike most Typescript features, enums are not a type-level addition to js but added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
// whats the differece between type and interface
// we cannot do this: type postID = stringOrNumber; 
// think about interfaces like objects or classes
// and type area alias or as any kind of typescript type that might assign
// Literal types: assigning a type that you can customize
let userName;
userName = 'DailySh';
// DRY = Dont Repeat Yourself
// functions:
const add = (a, b) => {
    return a + b;
};
const checkFunc = (a) => {
    console.log(a);
};
const logMsg = (message) => {
    console.log(message);
};
checkFunc(100);
// interface mathFunction {
//     (a: number, b: number): number 
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(20, 21));
// optional parameters
const addAll = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
//using default param values below:
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(1, 2));
let arr = [1, 2, 3, 4, 50];
logMsg(arr.reduce((prev, curr) => prev + curr)); // understand this line as well <---
const total = (nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log("after using the ... operator // or the rest paraneter for the array that is being passed into the function");
logMsg(total(arr));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// 
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const numberOrString = (a) => {
    console.log(typeof a);
};
const isNumber = (a) => {
    return typeof a === 'number'
        ? true : false;
};
numberOrString("asd");
// type assertions and type casting
// its basically you the coding using telling the typescript compiler that you know more about the types, 
// so it needs to listen to you.
