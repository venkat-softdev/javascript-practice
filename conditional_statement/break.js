// break statement in javascript 


for (let i = 1; i <=10; i++) {
    console.log(i);
    if (i==5) {
        break;
    }
    
    
}
// example 2 in break statement 

let count=0;
while (count<10) {
    if (count===3) {
        console.log("breaking the while loop ",count);
        break;
        
    }
    console.log(count);
    count++;
    
}

// example 3 in break statement 

outerloop: for (let i = 1; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
     if (i===1 && j===1) {
        console.log("breaking the loop  i is :",i ,"and" +"j is :",j);
        
     }
        console.log('i:'+i ,"and", "j:"+j);
        
    }
    
}