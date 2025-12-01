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