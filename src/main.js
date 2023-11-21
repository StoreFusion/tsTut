var stringArray = ['one', 'two', 'three'];
var guitars = ['Strat', 'les', 5150];
var mixedData = ['check Array', 1, true];
stringArray[0] = 'john';
stringArray.push('hey');
var tes = [];
var blobs = [];
blobs.push('halen');
//my Tuple
var myTuple = ['sh', 32, true];
var mixed = ["sh", 23, true];
//objects
var myObj;
myObj = [];
console.log(typeof myObj);
myObj = blobs;
myObj = {};
var exampleObj = {
    prop1: 'shan',
    prop2: true,
};
var evh = {
    name: 'jhdgakjsdgh',
    active: false,
    albums: ['adasdhdk', 'hill']
};
var JP = {
    name: 'jdarr',
    active: false,
    albums: ['adaasdadasdasdhdk', 'hill']
};
console.log(evh);
console.log(JP);
evh = JP;
var greetGuitarist = function (guitarist) {
    if (guitarist.name) {
        return "hello ".concat(guitarist.name.toUpperCase());
    }
    return 'Helloo';
};
console.log(greetGuitarist(JP));
