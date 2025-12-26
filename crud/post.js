// javascript 
const taskform=document.querySelector("#form");
taskform.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const phone=document.querySelector("#phone").value;

    const newtask={
        name:name,
        email:email,
        phone:phone
    };
    fetch("https://674dd350635bad45618ce6d0.mockapi.io/crud",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:jSON.stringify(newtask),
    })
    .then((res)=>{
        
    })
})