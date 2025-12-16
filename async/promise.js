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

// let btn=document.querySelector(".btn");
// btn.style.padding="10px"
// btn.style.borderRadius="10px";
// btn.style.border="2px solid #000"
// btn.style.backgroundColor="deeppink";
// btn.style.color="#fff";
// btn.style.width="200px";
// btn.style.height="40px";

// function addEventpromise(element,event) {
//     return new Promise((resolve, reject) => {
//         element.addEventListener(event,resolve);
//     });
// }

// addEventListener(btn,"click")
// .then((e)=>{
//     console.log("button clicked");
//     console.log(e);
    
    
// });


// btn.addEventListener("touchstart",function (e) {
//     e.preventDefault()
//     btn.style.backgroundColor="red"
//     btn.textContent="hi why "
// })


// example 5 in promise in javascript 

function event(params) {
     return Promise.all([Promise.resolve("perfect"),Promise.resolve("perfect"),
        Promise.resolve("perfect")
     ]);
}

event()
.then((msg1)=>{
    console.log(msg1);
    
})
.catch((msg2)=>{
    console.error(msg2);
    
})

// example 6 in promise javascript 

function program() {
    return Promise.all([Promise.resolve("good"),Promise.reject("error")])
}

program()
.then((val1)=>{
    console.log(val1);
    
})
.catch((val2)=>{
    console.error(val2);
    
})

// example 7 in promise javascript 

function concept() {
    return Promise.any([Promise.resolve("correct"),Promise.reject("wrong")]);
}

concept()
.then((con1)=>{
    console.log(con1);
    
})
.catch((con2)=>{
    console.error(con2);
    
});
