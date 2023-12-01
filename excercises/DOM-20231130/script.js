// 5.1: Explain difference between innerText and innerHTML in the following example?

// [From video lecture 5.4]

// HTML

// <div id="content">
//   <h2>Hello Coders</h2>
// </div>
// JavaScript

// let content = document.getElementById('content');

// console.log(content.innerHTML);

// console.log(content.innerText);

let content = document.getElementById('content');

console.log(content.innerHTML);

console.log(content.innerText);

// Problem 2 create element 
let title = document.createElement('h1');
title.className = 'title';
title.style.color = 'red';
title.textContent = 'moye moye';
console.log(title);
// document.append(title)
document.body.append(title)

// remove hello coders
document.body.removeChild(document.querySelector('#content'));



