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


// example 6 in regex 

 let another = /[a-d]*[0-5]/;

 let num='ac4';
 let $check=another.test(num);
 console.log($check);
 

 // example 7 in regex 

  let $pattern=/[b-d]?[0-5]/

  let $input='b2';

 let matchvalue=$pattern.test($input);
 console.log(matchvalue);
 
 // example 8 in regex 

 pattern =/[a-d]{2}[0-6]/;

 input = 'ac5';

 let output = pattern.test(input)

 console.log(output);
 
 // example 9 in regexx 

 pattern=/[a-z]{2,}[0-5]/;

 input='aaaaa3';

 let final=pattern.test(input);

 console.log(final);
 

 // example 10 regexx represent start 

 pattern=/^[a-z]{1,}[0-5]/;

 input ='ac5';
 let val=pattern.test(input);
 console.log(val);
 

 // example 11 in regex represent in end 

 pattern =/[a-z]{1,}[0-5]$/;

 input = 'ab3';

 let outputvalue=pattern.test(input);

 console.log(outputvalue);
 

 // example 12 in regex represent both start and end 

 pattern=/^[a-z]{1,}[0-6]$/;

 input='abc3';

 let regexouput=pattern.test(input);
 console.log(regexouput);
 
 // example 13 in regex or condition 

 pattern =/[a-z]{1,}[0-3]|[0-5]/;

 input='cc2';

 output=pattern.test(input);

 // example 14 in regex in escape sequence 

 pattern=/\$$/;

 input='$';
 output=pattern.test(input);

 console.log( " this is :",output);
 
 // example 15 in regexx  

 pattern=/\d/;

 input=" Hi im venkat my age is 19";

 output=pattern.test(input);
 console.log(output);
 