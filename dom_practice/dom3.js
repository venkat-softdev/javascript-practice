/*
 style 
 innerHTML 
 innerTEXt 

 cloneNode()
 setinterval()
 classList.add()
 classlist.remove()
 classlist.toggle()
 getAttribute()
 setAttribute()
*/

// appendchild 
let h4=document.querySelector("h4")
h4.style.color="blue"
h4.style.backgroundColor="palegreen"
h4.style.padding="10px"
h4.innerHTML="Now we discuss about the topic <i>DOM</i>";
h4.style.fontSize="30px"


// clone nodes 
const body=document.querySelector("body")
let cloneh4=h4.cloneNode(true);
body.appendChild(cloneh4)
let clone2=h4.cloneNode(false);
body.appendChild(clone2)
clone2.innerHTML=" Hey itz me <i> Venkat</i>"
clone2.style.color="red";


// setinterval 
function fun() {
    
    let cloneh4=h4.cloneNode(true);
   body.appendChild(cloneh4);
}

// setInterval(() => {
//     console.log(fun());
    
// }, 1000);

function clock() {
    
    let clock =document.querySelector(".clock")
    let date =new Date();
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());
    const time=date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds() + 
    " : "+ date.getMilliseconds()
 
  clock.innerHTML=time
  clock.style.fontSize="30px"
  clock.style.textAlign="center"
  clock.style.fontWeight="600"
  clock.style.backgroundColor="blue"
  clock.style.color="#fff"
  clock.style.padding="10px"
}
clock()

setInterval(() => {
    console.log(clock());
    
}, 1000);