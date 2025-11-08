// ternary operator in javascript 
 let a= 10;
 console.log(a);


 const age = 18;

  const voting=age>=18?"elgible to vote":"not eligible to vote"
 
  console.log(voting);
  

// handling null values 


function welcome(name) {
    console.log("welcome"+ name);
    
     const result=name? name:"no name";
     
}
welcome('venkat');

// object type variables 

let students={
    student_1:"venkat",
    student_2:"arish"
}
console.log(students,typeof students);

// array 

let value=[fname="venkat",sname="arish",tname="agi"];

console.log(value);




user={name:'venkat'}


const greeting=(user)=>{
    const name= user.name? user.name:"no name"
 return "hello"+name
}
console.log(greeting(user));
