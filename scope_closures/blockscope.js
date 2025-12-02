// Block scope in javascript 

// if statement block scope 
if (true) {
    
    let Block="hey im block only inside the function will work otherwise not ;"
    const insidefun="hey im also work with only inside the function"

 console.log(Block);
 console.log(insidefun);
 
}

// for loop block scope 

for (let i = -10; i < 3; i++) {
    console.log(i);
    
    
}

// standalone block scope 

{
    let tempvar="this is a standalone block scope "
    console.log(tempvar);
    
}


// function cope  with contrast 

function examplefunction() {
    if (true) {
        var functionscopevar="im a function scope"
    }
    console.log(functionscopevar);
    
}
examplefunction();





