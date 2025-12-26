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
    fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(newtask),
    })
    .then((res)=>{
        if (res.ok) {
            return res.json();
        }
        throw new Error("failed to create task");
        
    })
    .then((data)=>{
        const responsemessage=document.querySelector("#responsemessage");
        responsemessage.style.display ="block";
        responsemessage.textContent="task created successfully"
        const errormessage=document.querySelector("#errormessage");
        errormessage.style.display="none"
    })
    .catch((error)=>{
        const errormessage=document.querySelector("#errormessage");
        errormessage.style.display="block";
        errormessage.textContent="error : "+ error.message;
        document.querySelector("#responsemessage").style.display="none"
    })
})