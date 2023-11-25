// 3.1: Create a function Declaration called describeYourState Which take three parameters Population, 
// traditional food and historical place. 
// Based on this input function should return a String with this format.

function describeYourState(population, traditional_food, historical_place ){

    // return "My state population is " + population + " Its traditional food is " +traditional_food + " and historical place name is "+historical_place
    return `My state population is ${population} Its traditional food is +${traditional_food} and historical place name is ${historical_place}`
//  both ways will work
}

console.log(describeYourState(102330, "puranpoli", "raigad"));

//3.2: Create a function expression which does the exact same thing as defined in Question 1

let describestate = function (population, traditional_food, historical_place ){

    // return "My state population is " + population + " Its traditional food is " +traditional_food + " and historical place name is "+historical_place
    return `My state population is ${population} Its traditional food is +${traditional_food} and historical place name is ${historical_place}`
//  both ways will work
}

console.log(describestate(102330, "puranpoli", "raigad"));


// 3.3: Create function addition which takes two numbers as an argument And return the result of sum of two numbers
// Important Note: In the function call you are not passing any parameter. You can modify function to achieve this.


// Example;

function addition(num1=1, num2=2) {
  return num1 + num2;
}

console.log(addition()); //You are not allowed to modify this line any more

//3.4: Identify which type of value passed below into the function greet(). 
// What will be the return value of greet ?

let person = {
  name: 'john',
  age: 25
};

function greet(person) {
  person.name = `Mr ${person.name}`;
  return `Welcome ${person.name}`;
}

greet(person);
console.log(typeof person)
// answer: type of value passed into greet is object. 
// answer: john.

// 3.5: Create higher order function named as transformer which take string and firstUpperCaseWord function as an arguments. firstUpperCaseWord is function which make first word UpperCase from a given String.

function transformer(string, firstUpperCaseWord){
    return firstUpperCaseWord(string);
}

function firstUpperCaseWord(string){
    let arr = string.split(" ");
    arr[0]= arr[0].toUpperCase();
    return arr.join(" ");
}

console.log(transformer("shubham is good boy", firstUpperCaseWord));


//3.6: create function which will display Your name after every 5 seconds
// input
// let  yourName  =  "john";

// output
// "john"  after  5  second
// "john"  after  5  second
// "john"  after  5  second
// "john"  after  5  second and  so  on.

let x =5 
let count =0
function name(){
    console.log( "Shubham");
    count++;
    if(count==x) clearInterval(setfun)

}
// let setfun = setInterval(name, 5000);

// 3.7: Guess the Output And Explain Why?

let arrowFunction = (name = 'Coders') => {
  `Welcome ${name}`;
};

console.log(arrowFunction('Programmers'));

//answer : Welcome Programmers. since we are providing parameter while calling the arrowFunction("Programmers");


// 3.8: Create a JavaScript Function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.

// input: area_of_triangle(5, 6, 7);

// output: 14.69;

function area_of_triangle(a,b,c){
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    console.log(Math.floor(area*100)/100)
}

area_of_triangle(5, 6, 7);

// 3.9: Create a JavaScript Function to capitalize the first letter of each word of a given string.
// input: capitalize('we are the champions');
// output: 'We Are The Champions';

function capitalize(string){
    let arr = string.split(" ");
    let count =0;
    arr.map(element => {
        let eleArr = element.split("");
        eleArr[0] = eleArr[0].toUpperCase();
        arr[count++] = eleArr.join("");
    });
    console.log(arr.join(" "));
}

capitalize("shubham is good boy");
