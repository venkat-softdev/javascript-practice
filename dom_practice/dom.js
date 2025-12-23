// DOM manuplation 

const brand=document.getElementById("brand");
brand.style.color='#fff';
brand.style.backgroundColor='deeppink'
brand.style.padding='10px';
brand.style.borderRadius='10px'


let stitle=document.getElementsByClassName("sub-title");
stitle[0].style.color='purple';
stitle[1].style.color='red'

let tag=document.getElementsByTagName("p");
tag[0].style.color='red';
tag[1].style.color='purple';

let heading=document.querySelector('h1');
heading.style.color='deeppink'; 


// example 2 create child in js dom 
let para=document.getElementsByTagName("p");
para.innertext="this a sample text";
para.style.color="red";

const body=document.querySelector("body")
body.appendChild(para);