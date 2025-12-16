// javascript promise event 

function values() {
    return new Promise((resolve, reject) => {
      
        const sum=5-1;
       if (sum>5) {
            resolve("yes greater than")
        }
        else{
            reject("Error")
        }
    })
}


values()
.then((msg)=>{
    console.log(msg);
    
})
.catch((error)=>{
    console.error(error);
    
});


// example 2 in javasript promise 

function getdata() {

    return new Promise((resolve, reject) => {
        
        let age=18;
        if (age>=18) {
            
            resolve("eligble to vote")
        } else {
            reject("not eligble to vote")
        }

    })
    
};

getdata()
.then((value1)=>{
    console.log(value1);
    
})
.catch((value2)=>{
    console.log(value2);
    
})