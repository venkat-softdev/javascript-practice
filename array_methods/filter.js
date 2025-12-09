// filter methods in javascript 

let numbers=[1,2,3,4,5,6,7,8,9,10];

let evennumbers=numbers.filter((number)=>{
     return number%2==0;
  
})
console.log(evennumbers);

// example 2 in filter methods javascript 

let newnumber=[1,2,3,4,5,6,7,8,9,10];

let nextnumber=newnumber.filter((value)=>{
     return value%3==0;
})
console.log(nextnumber);
