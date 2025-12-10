// reduce in array methods javascript 


let numbers=[1,2,3,4,5];
let afternumber=numbers.reduce((number,value)=>{

    return number+ value;
})
console.log(afternumber);

// example 2 in reduce array methods 

let values=[[1,2] ,[3,4],[5,6]];

let nestedvalue=values.reduce((val,currentvalue)=>{
    return val.concat(currentvalue);
})
console.log(nestedvalue);


// example 3 in reduce array methods 

 const products=[
    {name:'shirt',price:20},
    {name:'shoes',price:50},
    {name:'Hat',price:15}
 ];

 let totalprice=products.reduce((total,product)=>{
    return total+ product.price
 },0)
 console.log(totalprice);
 
 