// optional chaining in javascript 

const user={
    name:"venkat",
    age:19,
    // address:{
    //     city:"vadalur"
    // }
    
};

// option 1 
console.log(user.address?user.address.city:undefined);

// option-2 

console.log(user.address && user.address.city);


// option-3 

console.log(user.address?.city);


// option -4 
let key="city";
console.log(user.address?.[key]);
