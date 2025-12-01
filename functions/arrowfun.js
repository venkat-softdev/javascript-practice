// Arrow function in javascript 
const calculatearea=(length,width)=>{
    let area=length * width;
    return area;
};

console.log(calculatearea(5,9));

// example 2 in js

let numbers=[1,2,3,4,5];
console.log(numbers);

const doublenumbers=numbers.map(number=>number*2);
console.log(doublenumbers);

// example 2 in js

let fruits=['apple','banana','grape','orange'];
console.log(fruits);

let reducefruit=fruits.filter(fruit=>fruit.length>5);
console.log(reducefruit);


// example 3 in js
let students=['arish','venkat','sandy','yuva'];
let filterstudents=students.filter(student=>student.length>5)
console.log(filterstudents);


// example 4 in js

let num=[1,2,3,4,5];
let total=num.reduce((sum,num)=>sum+num,0);
console.log(total);

