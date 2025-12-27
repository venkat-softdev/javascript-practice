// javascript starting 

const btn=document.querySelector("#btnget");
btn.addEventListener("click",getdata);

function getdata() {
    fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user",{
        method:"GET",
        headers:{"content-type":"application/json"},
    })
    .then((res)=>{
        if (res.ok) {
            return res.json()
        }
        throw new Error("failed to fetch");
        
    })
    .then((data)=>{
        const cardcontainer=document.querySelector("#cardcontainer");
        cardcontainer.innerHTML="";
        data.forEach((item) => {
            const card=`
             <div class="card">
             <h2>${item.name}</h2>
             <img src="${item.avatar}" alt="${item.name}"/>
             <h2>${item.email}</h2>
             <h2>${item.phone}</h2>
             </div>
            `;
            cardcontainer.innerHTML+=card;
        });
    })
    .catch((error)=>{
        document.querySelector("#errormessage").textContent=error.message;
    })
}