/**
 * Type inference only works with the expected value a function will return 
 */

//annotating the arguments & return value types 
const add = (a: number,b: number): number => {
  //obviously ts only cares about type, not if logic is correct
  return a + b;
}
//If return value is ommited then the return val will be infered
const subtract = (a: number,b: number) => {
  //So if we forget our return on our function, the return type will be void
    //Therefore we always want to annotate both the args and return val type
   a - b;
};
//Same syntax for named functions
function divide (a: number,b: number): number {
 
  return a / b;
};
//Same syntax for anonymous functions assigned to variables
const multiply = function(a: number,b: number): number {
  
  return a * b;
};
//Give type void to functions that don't have a return value
const logger = (msg: string): void => {
  console.log(msg)
};
//Assign never only to functions that will never have a return value
const throwError = (msg: string): never => {
  throw new Error(msg)
};

const todaysWeather = {
  date: new Date(),
  weather: 'cloudy'
};

const logWeather = (forecast: { date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015 destructured
const destructedWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
};
