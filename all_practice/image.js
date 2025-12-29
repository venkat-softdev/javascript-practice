// javascript starting 

const btn=document.querySelector("#btn");
const div=document.querySelector(".div")
btn.addEventListener("click",getimage);

async function getimage() {
    const fetchdata=await fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/animal")
    const finalvalue = await fetchdata.json()

    outputdata=""
    finalvalue.forEach((item) => {
        
        outputdata+=`<div class="images">
        <h2>${"image Id : " +item.id}</h2>
         <img src="${item.image}"
        </div>`
    });

    div.innerHTML=outputdata

  
}


 

 
 