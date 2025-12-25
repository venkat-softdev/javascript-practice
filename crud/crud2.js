// starting in javascript 

const button=document.querySelector("#fetch-button");
button.addEventListener("click",generator);

 function generator() {
         fetch("https://dog.ceo/api/breeds/image/random")
         .then((response)=>{
           return  response.json()
         })    
         .then((data)=>{
           
            document.querySelector("#randomimage").src = data.message;
         })
         .catch((error)=>{
            console.log("error fetching image:",error);
            
         })
}
