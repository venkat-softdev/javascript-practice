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


// btn4 

let appbtn=document.querySelector(".app");
let appout=document.querySelector(".appdiv");

appbtn.addEventListener("dblclick",getapp);

async function getapp() {
    const getvalue= await fetch("https://dummyjson.com/posts");
    const convert = await getvalue.json();


    let condata="";
    convert.posts.forEach((con) => {
        condata += `<div class = " posts" >
          <h4> ${con.title}</h4>
          <p> ${ con.body}</p>
        </div>`;
    });

    appout.innerHTML=condata;
}


// btn5 

let btn5=document.querySelector(".app2");
let div2=document.querySelector(".appdiv2");

btn5.addEventListener("click",getbtndata);

async function getbtndata() {
    const apidata=await fetch("https://dummyjson.com/quotes");
    const apiconvert=await apidata.json();


    let apioutput="";
     apiconvert.quotes.forEach((api)=>{
          
        apioutput += `<div class = "quotes">
            <h4> ${ api.id}</h4>
            <p>${ api.quote}</p>
            <h4>${ api.author}</h4>
        </div>`
     });

     div2.innerHTML=apioutput
}


// btn 6

let btn6=document.querySelector(".app3");
let final=document.querySelector(".appdiv3");

btn6.addEventListener("click",finalbtn);

async function finalbtn() {
    
    const responsebtn = await fetch("https://dummyjson.com/todos");
    let last= await responsebtn.json();

    finaloutput="";
    last.todos.forEach((todo)=>{
        finaloutput += `<div class="todos">
       <h4> ${ " ID :" +  todo.id}</h4>
       <p>${ " Todo :" + todo.todo}</p>
       <h4>${ " Todo completed : "  +  todo.completed}</h4>
        <h4>${ " user Id :" + todo.userId}</h4>
        </div>`
    });

    final.innerHTML=finaloutput;
}



// last 

let lastbtn=document.querySelector("#btnlast");
let lastdiv=document.querySelector("#lastdiv");

lastbtn.addEventListener("click",lastfun);

async function lastfun() {
    const lastfetch=await fetch("https://dummyjson.com/products")
    let result=await lastfetch.json();


    finalproduct="";
    result.products.forEach((product)=>{
        finalproduct +=`<div class=" product">
         <h4> ${"product-Id : "+ product.id}</h4>
         <p>${ "product-title : " + product.title}</p>
         <p>${"product-description : "+ product.description}</p>
        </div>`
    });

    lastdiv.innerHTML=finalproduct;
}