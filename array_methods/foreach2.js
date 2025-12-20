// for each in js 

const friuts=["apple","banana","cherry"];
console.log(friuts);

friuts.forEach((fruit)=>{
    console.log(" fruit  name is  :",fruit);
    
})


// example 2 in js 

const numbers=[1,2,3,4,5];
let total=0;
numbers.forEach((number)=>{
    total+=number
})
console.log( " the total is :",total);


// example 3  existing array  store the dummy array 

let recipes=["idly","Dosai","idiyappam"," noodles"];

let dish=[];

recipes.forEach((recipe)=>{
    dish.push(recipe)
})
console.log( " the recipe is :",dish);


// example 4 in for each array methods 

let oldnumbers=[1,2,3,4,5];
let doublenumbers=[];
oldnumbers.forEach((oldnum)=>{
    doublenumbers.push(oldnum *2);
})
console.log( " the double numbers :",doublenumbers);

// example 5 in for each array methods 

let maxnum=[10,20,30,40,50];
let max=maxnum[0];
maxnum.forEach((num)=>{
 if (num>max) {
    max=num;
 }
})

console.log(max);

// example 6 in for each 

let minnum=[100,200,300,400,500];
let min=minnum[0];
minnum.forEach((num)=>{
    if (num<min) {
        min=num;
    }
})

console.log(min);

// using for each  calculate the avg on array 

let avgnum=[10,20,30,40,50];
 total=0;

 avgnum.forEach((avg)=>{
    total += avg;
 })
 console.log(total/avgnum.length);

 // example 8 in for each method 

 const evenumbers=[1,2,3,4,5,6,7,8,9,10];
 const  evennum=[]

 evenumbers.forEach((num)=>{
    if (num%2==0) {
        evennum.push(num);
    }
 })
 console.log(evennum);
 
 
 // example 9 in for each method 

 let names=['venkat','jane','hoper','yuva'];

 names.forEach((name,index)=>{
    console.log(name,index);
    
    name[index]=name.toUpperCase();
 })
 console.log(names);
 


