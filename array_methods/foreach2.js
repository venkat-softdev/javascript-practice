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

