
// 7.1: You have given array of strings. Your task is to obtain last two elements of given array using slice method?
// Input;

// let admins = ['john', 'paul', 'Neha', 'harry'];

// Ouput[('Neha', 'harry')];

let admins = ['john', 'paul', 'Neha', 'harry'];
let result = admins.slice(-2)

console.log(result)

// 7.2: You have given an array of 5 elements(1-5). Your task is defined as below.
const arr = [1, 4, 7, 6, 8];
// You have to delete 2 elements starting from index 2.
let delted_elements  = arr.splice(2,2);
console.log(arr);
//ans [1, 4, 8]
// You have to add 3 new elements on index 1 choice.

arr.splice(1,0,9,3,6);
console.log(arr)
// ans [ 1, 9, 3, 6, 4, 7, 6, 8]

// Display the 2 deleted elements in console (from step 1)

console.log(delted_elements);


//7.3: What happens if we use negative number inside slice method?

const arr2 = [1, 4, 7, 6, 8];
arr2.splice(-2);
console.log(arr2);
// ans : It will perform splice operation from second last index: [1,4,7];

// 7.4: Write three different methods/approaches to get last element of the array?
const arr3 = [1, 4, 7, 6, 8];
console.log(arr3.slice(-1)[0])
//ans : arr3[arr3.length-1], arr3.slice(-1), arr3.at(-1)


// You have given an array of nums. 
// Create new Array with the help of nums array. 
// In new Array each element will be a result of multiplication by 2 of the original array element

const arr4 = [1, 4, 7, 6, 8];
let ans = arr4.map((ele)=>{
    return ele*4;
})
console.log(ans) //ans [ 4, 16, 28, 24, 32 ]

//7.5:  You have given an array of nums. Create new Array with the help of nums array. 
//      In new Array each element will be a result of multiplication by 2 of the original array element

const arr5 = [1, 4, 7, 6, 8];
let ans5 = arr4.map((ele)=>{
    return ele*2;
})

console.log(ans5) //ans [ 2, 8, 14, 12, 16 ]
// Example: Input;
let nums = [1, 2, 3, 4, 5];
let ans52 = nums.map((ele)=>{
    return ele*2;
})
console.log(ans52)  //ans [ 2, 4, 6, 8, 10 ]
// output;
// updatedNums = [2, 4, 6, 8, 10];


//7.6 You have given an array of scores in which score of each student stored. 
// Create a new array with the help of original scores array in which only those scores exist greater than 75%
const arr6 = [10, 40, 70, 60, 80];

let ans61 =  arr6.filter((ele)=>{
    return ele>75
})
console.log(ans61); //ans [ 80 ]

let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];
let ans62 =  scores.filter((ele)=>{
    return ele>75
})
console.log(ans62); // ans [76,  77,  88, 97, 120, 136, 140]

//7.7: You have given an array of numbers nums. You have to find sum of all array elements using reduce method?

let nums7 = [2, 3, 5, 7, 8, 4, 9];

let ans7 = nums7.reduce((total,ele)=>{
    return total+ele;
},0)

console.log(ans7) //ans 38

//7.8: You have given an array of numbers nums. You have to find the index of value 8 using built-in method of array?

let nums8 = [2, 3, 5, 6, 8, 6, 4, 8];

console.log(nums8.indexOf(8)) //ans : 4

//7.9: You have given an array of objects of users as below. Find the specified user with name = "John" 

// Also find the position (index+1) of that user inside the array?

let users = [
  {
    name: 'Paul',

    age: 24,

    verified: true,
  },

  {
    name: 'John',

    age: 21,

    verified: false,
  },

  {
    name: 'Neha',

    age: 19,

    verify: true,
  },
];


let result9 = users.findIndex((user)=>{
    return user.name=='John'
})

console.log(result9)

//7.10: Guess the Output and explain Why?

let nums10 = [1, 2, 4, 5, [6, [8]], [9, 0]];

let res1 = nums10.flat(1);
let res2 = nums10.flatMap((elem) => elem);

console.log(res1, res2);

// ans : res = [1, 2, 4, 5, 6, [8], 9, 0], res =  [1, 2, 4, 5, 6, [8], 9, 0];


// 7.11: You have given an array of nums. Write a program to sort the elements 
// of array in descending order using built-in method of array.

// Input;
let nums11 = [5, 1, 4, 6, 8, 3, 9];

nums11.sort((a,b)=>a-b);
console.log(nums11);

// Output[(9, 8, 6, 5, 4, 3, 1)];

// 7.12: Guess the Output and Explain Why?
let arr12 = [1, 2, 3, 4];
let result12 = arr12.splice(1, 2).pop();
console.log(result12);
// ans : 3

// 7.13: You have given an array of numbers nums You have to check if all elements 
//of the array > 15 using built-in array method. return true or false


let nums13 = [16, 17, 18, 28, 22];

console.log(nums13.every(ele=> ele>15));

// ans : true

// Question 1: Guess the Output And explain Why?

let strArray = [1, 2, 3, 4, 5];
let result_m1 = strArray.reverse();

console.log(result == strArray);
//ans : false

// Question 2: You have given two arrays below as an example. Your task is to combine them into one By using array method

// input;

//
let arr_m1 = [1, 2, 3, 4, 5];
let arr_m2 = [6, 7, 8, 9, 10];
// 

// ouput[(6, 7, 8, 9, 10, 1, 2, 3, 4, 5)];
console.log(arr_m1.concat(arr_m2));

// ans : arr_m1.concat(arr_m2);

// Question 3: You have given an array of letters below. Convert that array into string of letters Without Space

let arr73 = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];

console.log(arr73.join(""));

// output;

// ans: ('abhishek');
// Question 4: Guess the Output and explain why?

let arr74 = [11, 62, 1, 27, 8, 5];

let sorted = arr.sort();

// console.log(sorted); [1,5,8,11,27,62];
// If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. 

// Question 5: Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following thing in order:
// Calculate the dog age in human years using the following formula:
//  if the dogAge <= 2 years old, humanAge = 2 \* dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge
 function calcAverageHumanAge(arr75){
    let ans = []
    arr75.forEach((dogAge) => {

        let humanAge;
        if (dogAge <= 2){
            humanAge = 2*dogAge;
            ans.push(humanAge);
        }
        if(dogAge > 2){
            humanAge = 16 + dogAge;
            ans.push(humanAge);
        } 
    });
}

calcAverageHumanAge(arr)
let  arr75  = [12,2,5,12,8,13,9];

//

// Question 6: Guess the Output and Explain Why?

let arr76 = [1, 2, 3, 4, 5, 6, 7, 8];
let elem = arr.at(-1);
console.log(elem);
//answer : 8. 

// Question 7: Guess the Output and Explain why?

let arr77 = [1, 2, 3, 4, 5, 6, 7, 8];

let result77 = arr77.slice(2, 5).splice(0, 2, 21).pop();

console.log(result77, arr77);

//ans : 4 . slice will get elements with index 2 to 4. then splice will delete elements from 0,1 and will give in result. will add 21 instead of them so  the array is 21,4. pop will return 4.






