//1.1: Create a code to check difference between null and undefined data type. Also check their type using typeof.

function checkDiffernceBetweenNullAndUndefined(undefined_param, null_param){

    console.log(typeof undefined_param);
    console.log(typeof null_param);
    
}
let undefined_param;
let null_param=null;
checkDiffernceBetweenNullAndUndefined(undefined_param, null_param);


//1.2: Which type of variables (var, let or const) must be initialized at the time of declaration?

// const is the answer. it can be initialized only at the time of declaration


// 1.3: Guess the Output and Explain Why?
function lastIndexOfCheck(){
    let languages = 'java javaScript python cSharp';
    let result = languages.lastIndexOf('S');
}

// console.log(result)
// answer is 24. since the last S is present in cSharp word.


// 1.4: Guess the Output and Explain Why?
function checkNumber(){
    let variable = 'hello programmers';
    let result = Number(variable);
}
// answer is NaN since it is alphabatic string.

// 1.5: Guess the Output and Explain Why?

function checknums(){
    let num1 = 32;
    let num2 = '32';
    let result1 = num1 !== num2;

    let result2 = num1 != num2;

    console.log(result1, result2);
}
// checknums()
// result1 answer is true and other is false. first strictly not equal which means it will check both type and value. and other will check only the value not type

function checkIncludes(){
    let str = 'Hello Programmers';
    let result = str.includes('r');

    console.log(result);
}

// answer : true. small r is present.

// 1.7: Guess the Output and Explain Why?
function checkOperation(){
    let num1 = 2;
    let num2 = 5;
    let result = num1 ** num2 * 2;

console.log(result);
}

// checkOperation()
// answer : 64 since exponentiation operation has the highest priority.

//1.8: Guess the Output and Explain Why?

function checkCOncat(){
    let num1 = [1, 2, 4, 5];

    let num2 = [6, 5, 8, 0];

    let result = num1.concat(num2);

    console.log(result);
}
// checkCOncat()
// ansewr ; [1, 2, 4, 5 , 6, 5, 8, 0] concat is mutating operation and does not mutate the original array

//1.9: Guess the Output and Explain Why?

function checkGreaterSmaller(){
    let a = 5;
    let b = 7;
    let c = 8;
    let result = a < b > c;

    console.log(result);
}
// checkGreaterSmaller()
//answer is false.

//1.10: If your State is split into four equal parts such that in each part there are 1/4 number of people live. 
//You have to find how many people would live in each part? which operators will you use ?

function splitPopulation(population){
  console.log("The number of people will live in each part:", population/4);
}

// splitPopulation(200200)

// Chapter 2 (Control Flow / Conditional)
// Assignments:
// 2.1: Guess the Output And Explain Why?

function guessOp(){
    let i = 4;

    for (let j = 0; i < 10; i++) {
    if (j === 1 || i === 6) {
        continue;
    } else {
        console.log(i, j);

        if (i === 7) {
        break;
        }
    }
    }
}
console.log("------------guessOp---------")
guessOp()
// 4,0
// 5,0
// 7,0

//2.2: Guess the Output and Explain Why?

function guessOp2(){
    let i = 0;

    for (i; i < 5; i++) {
      console.log(i);
    }
}
console.log("------------guessOp2---------");

guessOp2();
//0,1,2,3,4

//2.3: Write a simple Program in which You have to print first 10 numbers in descending order (10...1)?

function printNumberFrom10to1(){
    let i=10;
    while(i>=0){
        console.log(i--);
    }
}

console.log("------------printNumberFrom10to1---------");
printNumberFrom10to1();

//2.4: Lets say John is looking a new country to live in. He want to live in a country that speaks English,
//     has less than 10 million people. One of the food option between these two must present Spanish food OR English food.
// Write an if/else if statement to help john figure out Your country is right for him?

function john(){

    if(lang=="English" && pop<10000000 && (food=="Spanish"||food=="English")){
       
            console.log("right country")
        
    }else if(lang=="English" && pop>10000000 && !(food=="Spanish"||food=="English")){
        console.log("wrong country")
    }else{
        console.log("wrong country")
    }

    let i = 0;

    for (i; i < 5; i++) {
      console.log(i);
    }
}

console.log("------------guessOp3---------");
guessOp3();
//0,1,2,3,4


// 2.5: Guess the Output And Explain Why?

function guessOp4(){
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
      
      console.log(i);
}
guessOp4();

// 0 to 9 will be printed then i is not defined since i 
/*
The provided code has a function opasd that contains a for loop with the loop variable declared using let. The loop runs four times, and then there's an attempt to log the value of i outside the loop.

However, there's a scoping issue. The i variable is declared with let inside the for loop, which means it has block scope limited to the loop. Once the loop ends, the variable i is no longer accessible outside of the loop block.
*/

// 2.6: use nested-if statement to check your age>18

// than check your height height > 5.10.

// If both true show any message(I can sit in exam) in the console?

function useNestedIf(age,height){
    if(age>18){
        if(height>5.10){
            console.log("I can sit in exam");
        }
    }
}

useNestedIf(25,5.11);


/**
2.7: Create two variables grade and passingYear.Check if your grade == "A" and passingYear < 2020 with 
the help of ternary operator(Not allowed to use any logical operator).If both condition true print on console Qualify. Otherwise Fail
 */

function ternaryOperator(grade,passingYear){
     grade=="A" && passingYear<2020?console.log("true"):console.log("fail");
}

ternaryOperator("A",2019)

//