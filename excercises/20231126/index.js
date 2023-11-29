// Chapter 4 (Objects)
// 4.1: Guess the Output And Explain ?

console.log(Math.round(Math.random() * 10));
// Math.random() 0 and 0.9 if * by 10 it will become greater than 1.0. Round will remove the decimal places. 

// 4.2: Create an object called country for a country of your choice, containing properties name , 
// capital, language, population and neighbors
// Increase the country population by two million using dot notation.
// Decrease the country population by one million using bracket notation.
// Make language value in Uppercase.
let country = {
    name : "India",
    capital : "Delhi",
    language : "Hindi",
    population : 1407500000,
    neighbours :  ['Pakistan, Afghanistan', 'China', 'Bangladesh']
}

function increase_population(){
    country.population = country.population+ 2000000;
    console.log(country.population)
}

increase_population();

function decrease_population(){
    country["population"] = country["population"]- 1000000;
    console.log(country.population);
}

decrease_population();

function make_language_uppercase(){
    country["language"] =  country["language"].toUpperCase();
    console.log( country["language"]);
}

make_language_uppercase();

// 4.3: Guess the Output and explain Why?
let car = {
  color: 'Blue',
  model: 2021,
  company: 'Toyota',
};
let carColor = 'Blue';
console.log(car[carColor]);
console.log(car.carColor);

// there is no 'Blue' key in car object. 
// there is no 'carColor' object

//4.4: Create a method describeCar inside car object in which you have to print like this in console using template literals

let car2 = {
    color: 'Blue',
    model: 2021,
    company: 'Toyota',
    describeCar : function (){
            console.log(`Company of my car is ${this.company} . It's color is ${this.color} And Model of my car is ${this.company}`);
    }
}

car2.describeCar();

//4.5: Generate random numbers between 0 and 10 using trunc method of MATH object
function getRandomNumbers(){
    console.log(Math.trunc(Math.random()*10));
}

getRandomNumbers();

//4.6: Guess the Output and Explain Why?

// let  arr  = [1,2,3,4];

// arr.forEach(elem  =>{
//     if(elem  ==  1){
//         continue;
//     }
//     console.log(elem);
// })

//answer : The continue statement is not allowed in an arrow function outside of loops. use return keyword.

// 4.7: Guess the Output And explain Why?
// Important Note: if there is any error, How we can solve that error?


let airplane = {

  flightName: 'fly india',
  atacode: 'FI',
  ratings: 4.9,

  book(passenger, flightNum) {
    console.log(
      `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
    );
  },
};

let bookMethod = airplane.book;

let boundBook = bookMethod.bind(airplane);
boundBook('john', 8754);

//answer: use this keyword before passenger.

//4.8: Guess the Output And Explain Why?

let arr3 = [1, 2, 3, 4];

for (let elem in arr3) {
  console.log(elem);
}

// 0 1 2 3 are indexes which will be printed.

// 4.9: You have to create a Shopping_Cart array with following features :
// addItem(itemName) : this function should add string itemName to cart
// removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it
// cartSize() : returns size of cart in terms of number of cart Items.

let Shopping_Cart =  ["hoodie", "shoes", "sweater", "bottle", "dairymilk nuts"];

function addItem(itemName){
    Shopping_Cart.push(itemName);
}

function removeItem(itemName){
    Shopping_Cart.splice(Shopping_Cart.indexOf(itemName),1);
}

function cartSize(){
    return Shopping_Cart.length;
}
addItem("bag")
removeItem("shoes")
console.log(Shopping_Cart)
console.log(cartSize());