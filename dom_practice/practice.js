// practice in js 

let para=document.createElement("p");
para.innerHTML="This is a <i>Venkat</i>";
para.style.color="red"
para.style.fontSize="30px"
const body=document.querySelector("body");
body.appendChild(para)
para.style.fontFamily="poppins"


let h1=document.createElement("h1");
h1.innerHTML="Now we discuss about the topic is DOM"
h1.style.color="blue";
body.insertBefore(h1,para);
h1.style.fontFamily="poppins"


let removebtn=document.querySelectorAll(".btn");
removebtn.forEach((rbtn)=>{
    rbtn.addEventListener("click",function () {
        const tr=this.parentNode.parentNode;
        tr.remove()
    })
})
