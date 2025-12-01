// function expression in javascript 

// let add=function(a,b) {
//     a=10;
//     b=20;
//     return a+b;
// }

// console.log(add());

// // example 2 in function expression 

// const welcome=function (name) {
    
//     return "hi hello :"+ name;
// }
// console.log(welcome("venkat"));

// // example 3 in function expression 

// const factorial =function calculate(n){
//     if (n<=1) {
//         return 1;
//     }
//     return n* calculate(n-1);
// }
// console.log(factorial(1));

// // example 4 in function expression 

// const calculator={
//     add :function(a,b){
//         return a+b;
//     },
//     subtract: function (a,b) {
//         return a-b;
//     }
// };

// console.log(calculator.add(5,3));
// console.log(calculator.subtract(10,20));

// // example 5 in function expresion 

// let my_name=function () {
//     my_name="venkat"
//     return my_name;
// }

// console.log(my_name());

// // example 6 in function expression 

// let fruits=function (fruit) {
  
//     return fruit;
// }
// console.log(fruits('apple','banana'));

// // example 7 in javascript 

// // let students=function (name) {
// //     return  "the students are :"+ name;

// // }
// // console.log(students("venkat"));
// // console.log(students("yuvaraj"));
// // console.log(students("aniruth"));




const welcome=function (name) {
    console.log( "hello"+" "+ name);
    
}
welcome("venkat")

// example 2 in function expresssion 

const calculate=function addnum(a,b) {
    
    return a+b;
}
console.log(calculate(10,30));

// example 3 in function expression 
setTimeout(function(){
    console.log("this is message after 2 seconds");
    
},3000);


setTimeout(function () {
    console.log("hi im venkat what's going on");
    
},2000);


setTimeout(function () {
    
    console.log("javascript is a high level interpreted programmin language");
    
},5000)















setTimeout(function () {
   
       console.log("Hi venkat are you there");
       
 
} 
,3000)


