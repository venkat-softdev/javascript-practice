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
