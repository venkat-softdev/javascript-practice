// touch event in javascript 

const touch=document.querySelector("#touch");

touch.addEventListener("touchstart",function (e) {
    
    e.preventDefault();
    touch.style.backgroundColor="blue"
    touch.style.color="#fff";
    touch.textContent="touch event started !";
 
})

touch.addEventListener("touchmove",function (e) {
    
    e.preventDefault();
    touch.style.backgroundColor="deeppink"
    touch.style.color="#fff"
    touch.textContent="touch event moved !";
    
})

touch.addEventListener()