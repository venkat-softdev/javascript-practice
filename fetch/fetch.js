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
    fetch("data.txt")
    .then((value)=>value.text())
    .then((output)=>{
        btndiv.innerHTML=output;
        
    });
 }

 // btn3 json
  
 let btnjson=document.querySelector("#btn-json");
 let jsonoutput=document.querySelector("#json-output");

 btnjson.addEventListener("click",jsonbtn)

 function jsonbtn() {
    fetch("fetch.json")
    .then((value)=> value.json())
    .then((users)=>{
      
        let data="<ul>";
        users.forEach((user) => {
            data +=`<li>${user.name}</li>`;
        });

        data += "</ul>";
        jsonoutput=innerHTML.data;

    })
 }