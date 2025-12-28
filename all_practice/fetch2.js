// javascript starting 
const btn=document.querySelector("#btn");
btn.addEventListener("click",getdata);

async function getdata() {
    
    const fetchdata= await fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user");
    let convert =await fetchdata.json()
}
