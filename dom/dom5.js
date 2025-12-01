
const newparagraph=document.createElement("p");
newparagraph.textContent="this is a new paragraph";
document.body.appendChild(newparagraph);
newparagraph.style.color="orangered";
newparagraph.style.fontSize="25px";
newparagraph.style.fontWeight=600

const newcontent=document.createElement("h3");
newcontent.textContent="Array is a ordered collection of values separated by commas "
document.body.appendChild(newcontent);
newcontent.style.color="blue";