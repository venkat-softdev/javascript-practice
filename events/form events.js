// form events in js 


const form=document.querySelector("form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const course=document.querySelector("#course");
const radio=document.querySelectorAll('input [name="gender"]');
const checkbox=document.querySelector("#agree")

form.addEventListener("submit",function (event) {
    event.preventDefault();
    console.log("Form submitted");
    console.log("user name : ", username.value);
    console.log("email : ", email.value);
    console.log("course name:" ,course.value);
    
    let selectedgender = "";
    radio.forEach((rad)=>{
        if (rad.checked) {
            
            selectedgender=rad.value;
        }
    });
    console.log("gender:" ,selectedgender);
    
    
    
    
});


form.addEventListener("reset",function () {
    console.log("form reseted ");
    
    
});

