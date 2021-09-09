//variables given type annotation
let apples: number = 5;
let speed: string = 'slow';
let hasName: boolean = true;
let none: null = null;
let idk: undefined = undefined;

//built in objects
let now: Date = new Date();
//array of only strings
let colors: string[] = ['red', 'green', 'blue'];
//could do numbers, objects, etc
let ages: number[] = [5, 43, 22];
//or if you have an array with any values, but want it to be 
//an array
let inclusiveArray: any[] = [5, 'green', false];

//classes
class Car {
 // keys: blah
 // methods: sdasdfas
}

let car: Car = new Car()

//Object literal
interface person {name: string, age: number}
interface pet {name: string, age: number, breed: string}
let family: {
  pRent1: person; 
  pRent2: person; 
  kids: person[];
  numKids: number; 
  pets: pet[];
  numPets: number; 
  } = {
      pRent1: {name: 'Chad Heisler', age: 38},
      pRent2: {name: 'Maddy McGuire', age: 33},
      kids: [{name: 'Jasper McGuire-Heisler', age: .006}],
      numKids: 1,
      pets: [{name: 'June', age: 2, breed: 'mut'}],
      numPets: 1
    }
console.log(family)
// Function
const logNum: (num: number) => void = (num) => {
  console.log(num)
}

/**
 * When to use annotations
 * 1) Function that returns the 'any' type
 */
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);

//2) When we declare a variable but initialize it later
let words: string[] = ['red', 'green', 'blue', 'purple'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'blue') {
    foundWord = true;
  }
}

//3) Variables whose type cannot be inferred correctly
let numbers = [-10,-1,12];
let numsAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numsAboveZero = numbers[i]
  }
}