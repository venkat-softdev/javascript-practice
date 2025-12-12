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

 let colors=['red','green','yellow','red','blue','green','blue'];

 let colorscount=colors.reduce((accumulator,currentvalue)=>{
    if (currentvalue in accumulator) {
        accumulator[currentvalue]++;
    }
    else{
        accumulator[currentvalue]=1
    }
    return accumulator
 },[])
 console.log(colorscount);
 
 // example 6 in reduce method 

 let num=[55,10,15,20,25];

 let largest=num.reduce((total,numvalue)=>{
    return Math.max(total,numvalue)
 },);

 console.log(largest);

 // example 7 in reduce method array 

 let peoples=[
    {name:'venkat',age:19,city:'vadalur'},
    {name:'nisha',age:28,city:'chennai'},
    {name:'vasu',age:30,city:'vadalur'}
 ];

 let groupedbycity=peoples.reduce((total,cvalue)=>{
    if (cvalue in total) {
        total[cvalue.city].push(cvalue)
    }
    else{
        total[cvalue.city]=[cvalue]
    }
    return total
 },{})
 console.log(groupedbycity);
 
 

