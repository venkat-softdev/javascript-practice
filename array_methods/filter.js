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

// example 3 in filter array methods 

let users=[

    {name:'venkat',age:20,city:'vadalur'},
    {name:'Ramesh',age:40,city:'salem'},
    {name:'jagan',age:30,city:'chennai'},
    {name:'sandy',age:28,city:'karur'},
    {name:'aravind',age:32,city:'pettai'},

]

let eligible=users.filter((user)=>{
    return user.age>30
})
console.log(eligible);
