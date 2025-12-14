

document.getElementById("btn").onclick = function () {
        alert(`hey what's going on `);
        
     };

   let btn=  document.getElementById("btn");
     

   let btn2=document.querySelector(".btn2");
   btn2.style.borderRadius='50px'
   btn2.style.backgroundColor='purple';
   btn2.style.color='#fff'
   btn2.addEventListener("click",function () {

    alert("Welcome to javscript events")
    
   })
 
   // double click button 
   let btn3=document.querySelector(".btn3");
   btn3.style.backgroundColor="teal";
   btn3.style.color='#fff';
   btn3.addEventListener('dblclick', function () {
     alert(`It's a Double click Button`)
   })

   // mouse down event 

   let btn4=document.querySelector(".btn4");
   btn4.style.backgroundColor="rebeccapurple"
   btn4.style.color="#fff"

   btn4.addEventListener("mousedown",function () {
      
    this.style.backgroundColor="lightgreen"
   

   })

   btn4.addEventListener("dblclick",function () {
    
    alert( " this is a Mouse down  event ")
   });

   // mouse out event 

   btn4.addEventListener("mouseout",function () {
    this.style.backgroundColor="darkgreen";
    
   });

   // mouse up event 

   btn4.addEventListener("mouseup",function () {
    this.style.backgroundColor="aquamarine";
    
   })

   // mouse over event 

   btn4.addEventListener("mouseover",function () {
    this.style.backgroundColor="gold"
    
   })