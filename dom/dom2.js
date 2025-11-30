// example 

// Get all elements with the class "intro"
const introElements = document.getElementsByClassName("intro");

// The result is an HTMLCollection (array-like object)
console.log(introElements); // Output: HTMLCollection(2) [p.intro, p.intro]

// Access the first element in the collection
const firstIntro = introElements[0]; 

// Manipulate the first element (change its text content and style)
if (firstIntro) {
    firstIntro.textContent = "I manipulated the first paragraph!";
    firstIntro.style.color = "blue";
}

// Loop through all elements to apply changes to every element with the class
for (let i = 0; i < introElements.length; i++) {
    introElements[i].style.fontWeight = "bold";
    
}



let para=document.getElementsByClassName("venkat");

for (let i = 0; i < para.length; i++) {
  para[i].textContent="ok venkat now discuss about the topic is DOM ";
  para[i].style.color="green"
  para[i].style.fontSize="20px";
  para[i].style.fontWeight="bold"
};
 

