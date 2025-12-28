// javascript starting 
const btn=document.querySelector("#btn");
btn.addEventListener("click",getdata);
const div=document.querySelector(".div")

async function getdata() {
    
    const fetchdata= await fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user");
    let convert =await fetchdata.json()

    let outputvalue=""

    convert.user.forEach((item) => {
        outputvalue +=`<div class=fetch>
        <h2>${item.id}</h2>
         <h2>${item.name}</h2>
         <p>${item.phone}</p>
         <p>${item.email}</p>
        </div>`
    });
     div.innerHTML=outputvalue;
}
