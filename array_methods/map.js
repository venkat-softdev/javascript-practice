// map method in javascript array methods 
let numbers=[1,2,3,4,5,6,7,8,9,10];
let sqrt=[];

sqrt=numbers.map((values)=>{
   
    return Math.sqrt(values).toFixed(1);
    sqrt.push(value)
})
console.table(sqrt);
