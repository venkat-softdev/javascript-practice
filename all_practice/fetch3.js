// javascript starting 

const btn=document.querySelector("#fetchbtn");
const div=document.querySelector(".fetchdiv")

btn.addEventListener("click",getfetch);

async function getfetch() {
    
    const fetchdata=await fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user")
    const fetchoutput=await fetchdata.json()

    finaldata="";
    fetchoutput.forEach((data) => {
        
        finaldata+=`<div class="user">
        
        <h2>${"Id : "+ data.id}</h2>
        <p>${"color : "+ data.color}</p>
        <p>${"color name : "+ data.name}</p>

        </div>`
    });
     
    div.innerHTML=finaldata
}   
