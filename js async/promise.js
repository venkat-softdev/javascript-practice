// javascript promise event 

const promise=new promise((resolve, reject)=>{
    const sum = 1+1;
    if (sum==2) {
        console.log("Answer is correct");
        
    }
    else{
        console.log("Answer is Error");
        
    }
})

promise
.then((msg)=>{
    console.log(msg);
    
})
.catch((errror)=>{
    console.log(error);
    
})