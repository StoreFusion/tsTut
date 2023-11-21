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
console.log("a");
console.log(Grade.B);
