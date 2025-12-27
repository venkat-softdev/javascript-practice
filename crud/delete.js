// delete in javascript 
let tasks=[];
const cardcontainer =document.querySelector("#cardcontainer");

function fetchtask() {
    fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/users")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        tasks=data;
        rendercards();
    })
    .catch((error)=>{
        console.log("error fetching tasks :",error);
        
    })
    
}