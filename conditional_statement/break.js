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

// example 4 in break statement 

for (let i = 0; i <=10; i++) {
   console.log(i);
   if (i==2) {
    break;
   }
   
    
}

// example 5 in javscript break statement 

for (let i = 0; i < 10; i++) {
 
    if (i==5) {
        console.log("breaking the loop i:",i);
        break;
    }
    console.log(i);
    
    
}

// example 6 in break statement javascript 

let value=0;
while (value<10) {
    if (value==3) {
        
        console.log("breaking the loop of value:",value);
        break;
        
    }

   console.log(value);
   value++
   
    
}

// example 7 in break statement in javascript 

let fruit="mango";

switch (fruit) {
    case "grape":
        console.log("mango here");
        
        
        break;

        case "apple":
            console.log("apple here");
            break;

            case "orange":
            console.log("orange here");
               
            break;
            

    default:
        console.log("you finding fruit not here");
        
        break;
}