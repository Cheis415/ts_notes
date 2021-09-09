//variables given type annotation
var apples = 5;
var speed = 'slow';
var hasName = true;
var none = null;
var idk = undefined;
//built in objects
var now = new Date();
//array of only strings
var colors = ['red', 'green', 'blue'];
//could do numbers, objects, etc
var ages = [5, 43, 22];
//or if you have an array with any values, but want it to be 
//an array
var inclusiveArray = [5, 'green', false];
//classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
var family = {
    pRent1: { name: 'Chad Heisler', age: 38 },
    pRent2: { name: 'Maddy McGuire', age: 33 },
    kids: [{ name: 'Jasper McGuire-Heisler', age: .006 }],
    numKids: 1,
    pets: [{ name: 'June', age: 2, breed: 'mut' }],
    numPets: 1
};
console.log(family);
// Function
var logNum = function (num) {
    console.log(num);
};
/**
 * When to use annotations
 * 1) Function that returns the 'any' type
 */
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
//2) When we declare a variable but initialize it later
var words = ['red', 'green', 'blue', 'purple'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'blue') {
        foundWord = true;
    }
}
//3) Variables whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numsAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numsAboveZero = numbers[i];
    }
}
