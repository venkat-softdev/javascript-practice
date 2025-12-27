// fetch in javascript 

const btn=document.querySelector("#fetchbtn");
btn.addEventListener("click",funbtn);

function funbtn() {
    fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/animals")
    .then((give)=>{
        return give.json()
    })
    .then((value)=>{
        document.querySelector("#anyimage").src=value.message
    })
    .catch((error)=>{
        console.error(error);
        
    })
}