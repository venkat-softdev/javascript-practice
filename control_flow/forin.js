 // for in loop in javascript 

 let person={
    name:"venkat",
    age:19,
    city:"vadalur"
 };
 
 for (const indentity  in person) {
   console.log(indentity+ ":"+ person[indentity]);
   
    
    
 }
 // example 2 in for in loop 

let man={
    name:"joel",
    age:50,
    city:"USA"
};

for (const person in man) {
   console.log(person + ":"+ man[person]);
   
    
}
// example 3 in for in loop 

let colors=["red",'blue','yellow','white'];
for (const num in colors) {
   console.log( "index"+num + ":"+ colors[num]);
   
    
    
}

