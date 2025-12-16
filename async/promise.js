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