// call apply and bind methods in javascript 

function venkat(params) {
    console.log(this);
    
}
venkat()
console.log(venkat.name);
console.log(venkat.toString);
venkat.call();


