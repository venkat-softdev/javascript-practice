// example 1 in nested loop 

// let english=95;
// let tamil=98;
// let maths=75;
// total=english + tamil + maths;
// avg=total/3;
// console.log("total:",total);
// console.log("average:",avg.toFixed(1));


let english=100;
let tamil=100;
let maths=97;
 total=english+maths+tamil;
 avg=total/3;
 
 console.log("total:" ,total);
 console.log("avg is:",avg.toFixed(0));
 
 

 
if (english>=35 && tamil>=35 && maths>=35) {
    console.log("Result : pass");
      
    if (avg>=90 && avg<=100) {
        console.log("A grade");
        
    }
    else if (avg>=80 && avg<=90) {
        console.log("B grade");
        
    }
    else if (avg>=70 && avg<=80) {
        console.log("c grade");
        
    }
    else{
        console.log("D grade");
        
    }
}
else{
    console.log("Result :  fail");
    console.log("And No grade");
    
    
}





