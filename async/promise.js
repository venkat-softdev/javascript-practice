// javascript promise event 

const promise=new promise((resolve, reject)=>{
    const sum = 1+1;
    if (sum==2) {
        resolve("Answer is correct");
        
    }
    else{
        reject("Answer is Error");
        
    }
});


promise
.then((msg)=>{
    console.log(msg);
    
})
.catch((error)=>{
    console.log(error);
    
})