// javascript starting 

const btn=document.querySelector("#btn");
btn.addEventListener("click",getfun);

function getfun() {
    fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/member",{
        method:"GET",
        headers:{"content-type":"aplication/json"},
    })
    .then((res)=>{
        if (res.ok) {
            return res.json()
        }
        throw new Error("failed to perform task");
        
    })
    .then((value)=>{
        const cardbox=document.querySelector(".cardbox");
        cardbox.innerHTML="";

        value.forEach((item) => {
            
            const card=`
             <div class="card">
              <h3>${"Name : " +item.name}</h3>
              <img src="${item.avatar}" alt=" ${item.name}"/>
              <p>${"Email : " + item.email}</p>
              <p>${"Phone : " + item.phone}</p>
             </div>
            `;
            cardbox.innerHTML+=card
        });
    })
         
    .catch((error)=>{
        document.querySelector("#error").textContent=error.message;
    })
}