// dom manipulation in javascript 

 const listitems=document.getElementsByTagName("li");
 for (let i = 0; i < listitems.length; i++) {
    listitems[i].textContent="items in the box"
    listitems[0].style.color="darkblue"
    listitems[1].style.color="green";
    listitems[2].style.color="deeppink"
    listitems[3].style.color="purple";
    listitems[4].style.color="#fff"
    listitems[i].style.fontSize='30px';
    listitems[i].style.fontWeight='600'
     listitems[4].style.backgroundColor="orangered"
      listitems[4].style.padding="10px"
       listitems[4].style.borderRadius="10px"
        listitems[4].style.letterSpacing="1px"
    
 }

 let content=document.getElementsByTagName("p")
 for (let i = 0; i < content.length; i++) {
   content[i].innerHTML="Yes im here sandy bro"
   content[0].style.color="blue"
   content[1].style.color="green"
   content[2].style.color="teal"
   content[3].style.color="gold"
   content[i].style.fontSize="30px";
   content[i].style.fontWeight=700
   
   
 }