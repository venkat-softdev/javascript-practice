// for of loop in javascript 

let student=['venkat','yuva','arish','sandy']

for (const name of student) {
    console.log("the students name is :",name);
    
}

// example 2 for of loop in javascript 

let games=['pubg','carrom','chess','temple run'];

for (const  game  of games) {
    console.log("the game name is :", game);
    
}

const message="hello";
for (const msg of message) {
    console.log("the message of letter is :",msg);
    
}
// example 3 in javascript 

let user={
    name:"venkat",
    age:20,
    city:"vadalur"

}
let arr_keys=Object.keys(user);
console.log(arr_keys);

let arr_values=Object.values(user);
console.log(arr_values);

for (let i = 0; i < arr_keys.length; i++) {
    console.log(arr_keys[i] +":",arr_values[i]);
    
    
}
