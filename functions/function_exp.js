// function expression in javascript 

let add=function(a,b) {
    a=10;
    b=20;
    return a+b;
}

console.log(add());

// example 2 in function expression 

const welcome=function (name) {
    
    return "hi hello :"+ name;
}
console.log(welcome("venkat"));

// example 3 in function expression 

const factorial =function calculate(n){
    if (n<=1) {
        return 1;
    }
    return n* calculate(n-1);
}
console.log(factorial(1));

// example 4 in function expression 

const calculator={
    add :function(a,b){
        return a+b;
    },
    subtract: function (a,b) {
        return a-b;
    }
};

console.log(calculator.add(5,3));
console.log(calculator.subtract(10,20));

