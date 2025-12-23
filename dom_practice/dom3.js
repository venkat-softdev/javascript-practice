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


let h4=document.querySelector("h4")
h4.style.color="blue"
h4.style.backgroundColor="palegreen"
h4.style.padding="10px"
h4.innerHTML="Now we discuss about the topic <i>DOM</i>";
h4.style.fontSize="30px"


const body=document.querySelector("body")
let cloneh4=h4.cloneNode(true);
body.appendChild(cloneh4)
let clone2=h4.cloneNode(false);
body.appendChild(clone2)
clone2.innerHTML=" Hey itz me <i> Venkat</i>"
clone2.style.color="red";