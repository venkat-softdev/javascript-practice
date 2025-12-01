// Global scope in javascript 

let message="Hello ,World ";

function showmessage() {
    
    console.log(message);
    
}
showmessage();

// example 2 in global scope in javascript 
  
function createcounter() {
    
    let count = 0;

    return function () {
        
        count++;
        console.log(count);
        

    };

}

const counter1=createcounter();
counter1();
counter1();

const counter2=createcounter();
counter2();
counter2()
