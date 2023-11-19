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
    active: boolean,
    albums: (string|number)[],
}

let evh: Guitarist = {
    name: 'jhdgakjsdgh',
    active: false,
    albums: [ 'adasdhdk','hill']
}

let JP: Guitarist = {
    name: 'jimmiklj',
    active: false,
    albums: [ 'adaasdadasdasdhdk','hill']
}

console.log(evh);
console.log(JP);

evh = JP;
