// traversal dom in javascript 

 const value=document.getElementsByTagName("p");
 console.log(value);

 const parent=value[0].parentNode;
 console.log(parent);

 parent.style.backgroundColor="palegreen"
 parent.style.padding="10px"

// 

const head=document.getElementsByTagName("h1");
console.log(head);

const headparent=head[0].parentNode;
console.log(headparent);

headparent.style.backgroundColor="deeppink"
headparent.style.padding="10px"
headparent.style.borderRadius="10px"
headparent.style.fontFamily="poppins"
headparent.style.textAlign="center"
