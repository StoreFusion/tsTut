let stringArray = [ 'one', 'two', 'three'];

let guitars = ['Strat', 'les', 5150];

let mixedData = ['check Array', 1, true];

stringArray[0] = 'john';
stringArray.push('hey');

let tes = [];
let blobs: string[] =[];
blobs.push('halen');

//my Tuple
let myTuple: [string, number, boolean] = ['sh', 32, true];

let mixed = ["sh", 23, true];

//objects

let myObj: object;
myObj = [];
console.log(typeof myObj)
myObj = blobs;
myObj = {};

const exampleObj = {
    prop1: 'shan',
    prop2: true,
}

type Guitarist = {
    name: string,
    active?: boolean,
    albums?: (string|number)[],
}

let evh: Guitarist = {
    name: 'jhdgakjsdgh',
    active: false,
    albums: [ 'adasdhdk','hill']
}

let JP: Guitarist = {
    name: 'jdarr',
    active: false,
    albums: [ 'adaasdadasdasdhdk','hill']
}

console.log(evh);
console.log(JP);

evh = JP;

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Helloo';
}

console.log(greetGuitarist(JP));


// Enums
// unlike most Typescript features, enums are not a type-level addition to js but added to the language and runtime.


enum Grade { // it is default enumerated starting from 0 and goes on from there +1
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grade.B);

// lesson 4

// type alliases, 
// explaination: we are representing our typescript types witha different name or alias
// we 
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[] 

type postID = stringOrNumber; 

// whats the differece between type and interface
// we cannot do this: type postID = stringOrNumber; 

// think about interfaces like objects or classes
// and type area alias or as any kind of typescript type that might assign

// Literal types: assigning a type that you can customize


let userName: 'DailySh' | 'torch';

userName = 'DailySh'; 

// DRY = Dont Repeat Yourself

// functions:

const add = (a: number, b: number): number => {
    return a + b;
}

const checkFunc = (a: stringOrNumber) => {
    console.log(a);
}

const logMsg = (message: any): void => {
    console.log(message);
}

checkFunc(100);

// function types 

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number 
// }


let multiply: mathFunction = function(c, d){
    return c * d;
}

logMsg(multiply(20,21));

// optional parameters

const addAll = (a: number, b: number, c?: number ): number => { // optional parameters must come before the required ones. it needs to be the last in the list
    if(c!== undefined) {
        return a + b + c;
    }
    return a + b;
}

//using default param values below:
const sumAll = (a: number, b: number, c: number = 2  ): number => { 
    return a + b + c;
}

logMsg(sumAll(1, 2));

let arr = [1,2,3,4,50];
logMsg(arr.reduce((prev,curr) => prev + curr)); // understand this line as well <---

const total = (nums: number[]): number => {
    return nums.reduce((prev,curr) => prev + curr)
}
console.log("after using the ... operator // or the rest paraneter for the array that is being passed into the function");
logMsg(total(arr));


const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

// 
const infinite = () => {
    let i: number = 1;
    while(true) {
        i++;
        if(i>100) break;
    }
}

const numberOrString = (a: number | string): any => {
    console.log(typeof a);
}

const isNumber = (a: any): boolean => {
    return typeof a === 'number'
        ? true : false;
}

numberOrString("asd");

// type assertions and type casting
// its basically you the coding using telling the typescript compiler that you know more about the types, 
// so it needs to listen to you.

