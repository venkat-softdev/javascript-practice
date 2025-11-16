// example 1 in nested loop 

// let english=95;
// let tamil=98;
// let maths=75;
// total=english + tamil + maths;
// avg=total/3;
// console.log("total:",total);
// console.log("average:",avg.toFixed(1));


// let english=100;
// let tamil=100;
// let maths=97;
//  total=english+maths+tamil;
//  avg=total/3;
 
//  console.log("total:" ,total);
//  console.log("avg is:",avg.toFixed(0));
 
 

 
// if (english>=35 && tamil>=35 && maths>=35) {
//     console.log("Result : pass");
      
//     if (avg>=90 && avg<=100) {
//         console.log("A grade");
        
//     }
//     else if (avg>=80 && avg<=90) {
//         console.log("B grade");
        
//     }
//     else if (avg>=70 && avg<=80) {
//         console.log("c grade");
        
//     }
//     else{
//         console.log("D grade");
        
//     }
// }
// else{
//     console.log("Result :  fail");
//     console.log("And No grade");
    
    
// }

// // example 2;

// let age = 20;
// let programmingskills=true;

// if (age>=20) {
//     console.log("you can apply any job");
    
//     if (programmingskills==true) {
//         console.log("you can apply programming based job");
        
//     }
//     else{
//         console.log("you can search another job becz you don't have any skill");
        
//     }
// }
// else{
//     console.log("you not  eligible  to apply  job");
    
// }

// example 3 in nested if 

// let correctpin=1234;
// let enterdpin=1234;
// let accountbalance=750;
// let withdrawamount=300;
// let dailylimit = 500;

// if (enterdpin===correctpin) {
//     console.log("PIN accepted");
    

//     if (withdrawamount<accountbalance) {
//         console.log("Balance check passed");
        
//         if (withdrawamount<= dailylimit) {
//             console.log("you can withdraw amount");
          
            
//         } else {
//             console.log("ERROr : Amount exceeds daily withdraw limit");
            
//         }
//     } else {
//         console.log("ERROr : indufficient Amount");
        
//     }

// } else {
//     console.log("ERROR : Incorrect PIN");
    
// }

// example 3 in nested if in javascript 

let destination= 'USA';
let weightkg=50;
let shippingcost;

if (destination==='USA') {
    if (weightkg<5) {
        console.log("shipping cost $10");
        
    } else {
        console.log("shipping cost $20");
        
    }
   
    
}
else if (destination==="Canada") {
    if (weightkg< 2) {
        console.log("shipping cost is $8");
        
    } else {
        console.log("shipping cost is $15");
        
    }
    
} 

else {
    console.log("other countries  shipping cost: $30");
    
}
