// dom in js 
/*
classList.add();
classList.remove();
classList.toggle();
getAttribute();
setAttribute();


hasAttribute()
getAttributeNames()
removeAttribute()
*/

// const btnAdd=document.querySelector("#btnadd");
// const btnremove=document.querySelector("#btnremove");
// const btntoggle = document.querySelector("#btntoggle");
// const box=document.querySelector(".box")

// // btnAdd
// btnAdd.addEventListener("click",function () {

//     box.classList.add("newcolor")
    
// })

// // btnremove
// btnremove.addEventListener("click",function () {

//     box.classList.remove("newcolor")
    
// })

// // btnToggle
// btntoggle.addEventListener("click",function () {

//     box.classList.toggle("newcolor")
    
// });


const btnclick=document.querySelector("#btnclick");
const input=document.querySelector("#txtname")

btnclick.addEventListener("click", function () {
   const getatt= input.getAttribute("type")
    console.log(getatt);
    if (getatt=="text") {
        
        input.setAttribute("type","password");
        
    }
    else{
        input.setAttribute("type","text");
        
    }
    
})

