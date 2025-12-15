// touch event in javascript 

const touch=document.querySelector("#touch");

touch.addEventListener("touchstart",function (e) {
    
    e.preventDefault();
    touch.style.backgroundColor="green"
    touch.style.color="#fff";
    touch.textContent="touch event started !";
 
})
