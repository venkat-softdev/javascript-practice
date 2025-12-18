// fetch in javascript 

let textbtn=document.querySelector("#btn-json");
let txtoutput=document.querySelector("#txt-output");

textbtn=addEventListener("click",gettextbtn);

function gettextbtn() {
    fetch("data.txt")
    .then((result)=>result.text())
    .then((data)=>{
        txtoutput.innerHTML=data;
    })
    
}

/// btn 2 

let btn2=document.querySelector(".btn2");
let btndiv=document.querySelector(".btndiv")

 btn2.addEventListener("click",btn2data);

 function btn2data() {
    fetch("users.json")
    .then((value)=>value.text())
    .then((output)=>{
        btndiv.innerHTML=output;
        
    });
 }

 // btn 3

 
let btn3=document.querySelector("#btn-api");
let apidiv=document.querySelector("#api-output");

btn3.addEventListener("click",getapidata);

async function getapidata() {
    
    const response = await fetch("https://dummyjson.com/comments");
    const jsondata = await response.json();
    
    
    let output="";
    jsondata.comments.forEach((post) => {
        output += `<div class ='post'> 
          <h4> ${post.id}</h4>
          <p> ${post.body}</p>
        
        </div>`;

    });

    apidiv.innerHTML=output;
}
