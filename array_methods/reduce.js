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
 
 // example 4 in reduce method 

 let nestedvalues=[[10,20],[30,40],[50,60]];
 let nextvalue=nestedvalues.reduce((total,tval)=>{
     return total.concat(tval);
 })
 console.log(nextvalue);

 // example 5 in reduce method 
 
 