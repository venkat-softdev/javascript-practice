// call back function in javscript 

setTimeout(() => {
    console.log("Hi im venkat what's going on");
    
}, 3000);

// example 2 settime out 
 
function greet() {
    console.log("Now discuss about the setTimeout functions");
    
}
setTimeout(greet,5000)

// example 3 settimeout function 
setTimeout((name,age) => {
    console.log(`my name is ${name} and I am ${age} years old`);
    
}, 7000,"venkat",19 );

// example 4 set interval function 
setInterval(() => {
    console.log("what is javascript ");
    
}, 3000);

// example 5 in javascript 
 let numbers=[1,2,3,4,5];
 numbers.forEach(function (number) {
    console.log(number);
    
 });

 // example 6 in settimeout 

 const timeoutid=setTimeout(() => {
    console.log("this missage will not appear !");
    
 }, 8000);

 clearTimeout(timeoutid);
 console.log("Timeout cancelled");
 


 setTimeout(() => {
    console.log("today what");
    
 }, "10000");

 // example 7 in settimeout 

 function mycallback() {
    console.log("hi im a callback function ");
    
 }
 function caller(mycallback) {
    mycallback()
 }
 caller(mycallback);

 // example 8 in callback function 

 function venkat() {
    console.log("today whether is nice because it's rainy");
    
 }
 function yuva(venkat) {
    venkat()
 }
 yuva(venkat);