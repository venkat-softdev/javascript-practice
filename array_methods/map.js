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
