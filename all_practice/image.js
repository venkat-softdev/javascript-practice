// javascript starting 

const btn=document.querySelector("#btn");
btn.addEventListener("click",getimage);

async function getimage() {
    const fetchdata=await fetch("https://dog.ceo/api/breeds/image/random")
    .then((data)=>{
        return data.json()
    })
    .then((value)=>{
        document.querySelector("#randomimg").src=value.message
    })
    
    .catch((error)=>{
        console.log(error);
        
    })
  
}


 

 
 