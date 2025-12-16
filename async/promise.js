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
        
        let age=15;
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
    
});


// example 3 in javasript promise 

function newdata () {
    return new Promise((resolve, reject) => {
        
    let name="venkat";
        if (name=="venkat"|| name=="yuvaraj") {
            
            resolve("name is matched")
        } else {
            reject("name is not matched")
        }

    })
    
};

newdata()
.then((name1)=>{
    console.log(name1);
    
})
.catch((name2)=>{
    console.log(name2);
    
});

// example 4 in promise javascript 

