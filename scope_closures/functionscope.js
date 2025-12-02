// function scope in javascript 

// example 1 in function scope 

// basic function scope 
function welcome() {
    var message="hello this is a function scope in javascript "
    console.log(message);
    
}
welcome()

// local and global variables using function scope 

var globalvar="hey i'm a golbal variable";

function showscope() {
    var localscope="I'm a local variable";
    console.log(globalvar);
    console.log(localscope);
    
    
}
showscope();
console.log(globalvar);

// nested functions and scope chain 

function outerfunction() {
    var outervar="I'm a outer function";

    function innerfunction() {
        var innervar="I'm a inner variable";
        console.log(outervar);
        console.log(innervar);
        
        
    }
    innerfunction()
}


outerfunction();

// parameters in local variable 

function calculatesum(a,b) {
    
    var sum=a+b;
    console.log("the sum is :"+ sum);
    
}
calculatesum(5,10);


