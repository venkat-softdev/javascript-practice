// creating in regular expressions 

const regex= /pattern/;
console.log(regex);

// example 2 in regex 

const welocome= /hello/;

const text= "hello world";

const check = welocome.test(text);
console.log(check);


// example 3 in regex 

let pattern =/[a-z]/;

let value=" hi venkat what's going on   ";

let checking = pattern.test(value);

console.log(checking);

// example 4 in regex 

let  matchingnumber=/[0-3]/
let numvalues='126';
let matchcheck= matchingnumber.test(numvalues)

console.log(matchcheck);


// example 5 in regex 

let matchregex = /[a-d] + [0-5]/;

let input ='ae2'; // not match becz value is a-d but i declared  ae so not match 
let inputcheck= matchregex.test(input);
console.log(inputcheck);
