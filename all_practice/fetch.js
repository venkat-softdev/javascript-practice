// fetch in javascript 

const btn=document.querySelector("#fetchbtn");
btn.addEventListener("click",funbtn);

function funbtn() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((result)=>{
        return result.json()
    })
    .then((data)=>{
        document.querySelector("#anyimage").src=data.message
    })
    .catch((error)=>{
        console.log(error);
        
    })
}