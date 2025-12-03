// for each in array methods in javascript

// let persons = ["venkat", "arish", "ram", "sham", "arun", "yuva"];

// persons.forEach((venkat) => {
//   console.log(venkat);
// });

// // example 2 in for each in array methods in js

// let employe = [
//   { name: "venkat", age: 19, city: "vadalur" },
//   { name: "arsih", age: 20, city: "chennai" },
//   { name: "sandy", age: 50, city: "chennai" },
// ];

// employe.forEach((value) => {
//   console.log(value);
// });

// // example 3 in for each in array methods

// let vegetables = ["onion", "tomato", "potato", "cabbage"];
// vegetables.forEach((veges) => {
//   console.log(veges);
// });

// // example of using foreach method sum of all elements in array

// let numbers = [10, 20, 30, 40, 50];
// total = 0;
// numbers.forEach((num) => {
//   total = total + num;
// });
// console.log(total);

// let students=['venkat','surya','vijay','madhan'];
// students.forEach((members)=>{
//   console.log(members);

// })

//   // example of using foreach

//    const doublenumbers=[];
//    numbers.forEach(Number=>{
//     doublenumbers.push(Number*2)
//    })
//    console.log(doublenumbers);

//    // example of for each

//    let name=["babu","sam",'banu','pothys'];

//    let value=[];
//    value.push(name);
//    console.log(value);

//    // example 5 in foreach

//    let  friends=[];
//    name.forEach(mem=>{
//     friends.push(name)

//    })
//    console.log(friends);
//    // example in for each

//    let num=[1,2,3,4,5];

//    let max=num[0];
//    num.forEach(num=>{
//     if (num>max) {
//       max=num
//     }
//    });
//    console.log(max);
//    // example in for each

//    // calculate avg

//    let nums=[10,20,30,40,50];
//    total=0;
//    nums.forEach(nums=>{
//     total=total+nums;

//    })
//    console.log(total/nums.length);

// let numbers=[1,2,3,4,5,6,7,8,9,10];

// let value=[];
// numbers.forEach(num=>{
//   if (num%2===0) {
//     value.push(num);
//   }
// })
// console.log(value);

// let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let number = [];

// value.forEach((nums) => {
//   if (nums % 3 === 0) {
//     number.push(nums);
//   }
// });
// console.log(numberdddd);

// // let cartoon=['bheem','ben 10','shinchan','doramon'];

// // cartoon.forEach((like_that )=>{
// //   console.log(like_that);

// // })



// for each in array methods 

let members=["venkat","Raju","Ragu",'Kala'];

members.forEach((students,rollno)=>{
  console.log( "roolno :"+ rollno+ "name:"+students);
  
});
// example 2 in for each

let fruits=['apple',"orange",'banana','grape','pineapple']

fruits.forEach(fruit =>{
  console.log(fruit);
  
})

// example 3 in for each

const users=[
  {fname:"venkat",age:19, city:"vadalur"},
  {fname:"yuvaraj",age:27, city:"salem"},
  {fname:"Arun",age:30, city:"chennai"},
  {fname:"vikram",age:38, city:"villupuram"},
  {fname:"Arjun",age:23, city:"karur"}

] ;

users.forEach((members)=>{
  console.log(members.fname);
  
})

users.forEach((person_age)=>{
  console.log(person_age.age);
  
})

users.forEach((members_city)=>{
  console.log(members_city.city);
  
}) 

users.forEach(persons=>{
  console.log(persons);
  
});

// example 4 in foreach 

const vegetables=['onion','tomato','garlic','ginger','potato','brinjal'];

vegetables.forEach((veges)=>{
  console.log(veges);
  
});

const numbers=[10,20,30,40,50];
let total=0;
numbers.forEach((number)=>{
  total=total+number;
})
console.log(total);

// example 5 in array foreach 

let value=[1,2,3,4,5];
let finalvalue=0;

value.forEach((val)=>{
  finalvalue+=val*2;
})
console.log(finalvalue);

// example 6 in array for each 

let num=[10,20,30,40,50];
let doublenum=[];

num.forEach((fnum)=>{
  console.log(fnum);
  doublenum.push(fnum*2)
  
})
console.log(doublenum);

// example 7 in array for each 

let peoples=['arish','venkat','yuva','sham','Ram'];

let mem=[];

peoples.forEach((pep)=>{
  mem.push(pep)
})
console.log(mem);

// example 8 in array for each 
let fnum=[1,2,3,4,5,];


fnum.forEach((newval)=>{
  console.log(newval);
  
})
  
newoutput=[];
fnum.forEach((newoutput)=>{
  console.log(newoutput+"venkat");
  
})

// example 9 in foreach in array method 
// find max number of an array;

let newnumber=[100,200,300,400,500];
let max=newnumber[0];
newnumber.forEach((number)=>{
  if (number>max) {
    max=number;
  }
})
console.log(max);

// example 10 in foreach in array methods
// find min num of array 

let oldnum=[600,700,80,900,1000]
let min=oldnum[0];
oldnum.forEach((lnum)=>{
  if (lnum<min) {
    min=lnum;
  }
})
console.log(min);

