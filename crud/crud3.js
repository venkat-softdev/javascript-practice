// javascript 

const btn=document.querySelector("#btn");
btn.addEventListener("click",getevent);

function getevent() {
    fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/users",{

        method:"GET",
        headers:{"content-type": "application/json"},
    })
    .then((res)=>{
        if (res.ok) {
            return res.json();
        }
        throw new Error("Failed to fetch data");
        
    })
    .then((data)=>{
        const cardcontainer=document.querySelector("#cardcontainer")
        cardcontainer.innerHTML="";
        data.forEach((item) => {
            const card =`
            <div class="card">
             <img src="${item.avatar}" alt="${item.name}"/>
             <h3>${item.name}</h3>
             <P><strong>Email:</strong>${item.Email}</P>
             <p><strong>Phone:</strong>${item.Phone}</p>
            </div>
            `;
           cardcontainer.innerHTML +=card;

        });
    })
    .catch((error)=>{
        document.querySelector("#errormessage").textContent=
        error.message;
    })
}
getevent()