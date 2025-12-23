// dom in js 
/*
classList.add();
classList.remove();
classList.toggle();
getAttribute();
setAttribute();
*/

const btnAdd=document.querySelector("#btnadd");
const btnremove=document.querySelector("#btnremove");
const btntoggle = document.querySelector("#btntoggle");
const box=document.querySelector(".box")
btnAdd.addEventListener("click",function () {

    box.classList.add("newcolor")
    
})

