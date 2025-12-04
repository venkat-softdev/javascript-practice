// map method in javascript array methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqrt = [];

sqrt = numbers.map((values) => {
  return Math.sqrt(values).toFixed(1);
  sqrt.push(value);
});
console.table(sqrt);

// map method example 2

let num = [10, 20, 30, 40, 50];
console.log(num);

let newnum = [];
newnum = num.map((nvalue) => {
  return nvalue * 2;
  newnum.push(nvalue);
});
console.log(newnum);

// example 3 in map in array method
//  to find the person eligible or not

let members = [
  { name: "venkat", age: 19, city: "vadalur", salary: 10000 },
  { name: "yuvaraj", age: 15, city: "karur", salary: 8000 },
  { name: "shan", age: 27, city: "chennai", salary: 30000 },
  { name: "Ramesh", age: 32, city: "goa", salary: 23000 },
  { name: "Ram", age: 30, city: "kerala", salary: 26000 },
];
console.log(members);

let eligible_members=members.map((user)=>({

    name:user.name,
    age:user.age,
    city:user.city,
    salary:user.salary,
    satutus:user.age>18?"eligible":"not eligible"

    
}));

console.table(eligible_members);

// example 4 in map method array js



let persons = [
  { name: "Vijay", age: 19, city: "vadalur", salary: 10000 },
  { name: "Kumaran", age: 15, city: "karur", salary: 8000 },
  { name: "sandy", age: 27, city: "chennai", salary: 30000 },
  { name: "kamu", age: 32, city: "goa", salary: 23000 },
  { name: "Raman", age: 30, city: "kerala", salary: 26000 },
];

let updateval=persons.map((users)=>({
    ...users,
    status:users.name.length>5?"eligible":"not eligible"
}))
console.table(updateval);

// example 4 in map methods given numbers multiple by 2

let fnum=[1,2,3,4,5];
let doublenum=fnum.map((val)=>{
   return val*2
 
 
})
console.log(doublenum);


// example 5 in map array methods 
let letters=['venkat','yuvaraj','joes'];
capletter=letters.map((letter)=>{
    
    return letter.toUpperCase()
})

console.log(capletter);

//example 6 in map function array methods 
// combining two arrays 

let fruits=['apple','banana','grape'];
let colors=['red','yellow','purple'];

let fruitcolors=fruits.map((fruit,index)=>{
    return fruit + "-"+ colors[index].toUpperCase();
})
console.log(fruitcolors);

// example 7 map methods in 
// array combining two arrays

let members_name=['venkat','sandy','arish'];
let members_age=[19,27,19];
let members_city=['vadalur','panruti','vadalur'];

let allmembers=members_name.map((mname,index)=>{

    return mname +"-"+ "age is :"+ members_age[index] + "-"+ "city is:"+members_city[index]
});
console.log(allmembers);


// example 8 in map methods array js

const values=[1,2,3,4,5];
let numvalues=values.map((newvalue)=>{
    return newvalue %2==0 ? "correct than": "ithu wrong hu";
})
console.table(numvalues);

// example 9 in map methods extracting array 

const fmembers=[
    {name:'venkat',age:19,city:"vadalur"},
    {name:"yuva",age:15,city:"neyveli"},
    {name:'sham',age:20,city:"chennai"}
];

let updatedlist =fmembers.map((username)=>{
    return  "name is :"+username.name 
});
console.table(updatedlist);
