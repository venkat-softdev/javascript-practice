// objects in javascript 

let students={

    student_1:"venkat",
    student_2:"Arish",
    student_3:"somu",
    student_4:"kamu",
    student_5:"Ram"
}

console.table(students.student_5);
console.log(students.student_1);

// it's called a object literals

// example 2 in object in javascript 

let person= {
    fname:"venkat",
    age:29,
    city:"vadalur",
     
}

console.log(person);

person.age=15;
person.age=16;
person.fname="yuva";

console.log(person);


// example 3 in object javascript
 
let numbers={
    num_1:50,
    num_2:40,
    num_3:30,
    num_4:20,
    num_5:10
}

console.table(numbers);

numbers.num_1=100;
numbers.num_2=200;
numbers.num_3=300;
numbers.num_4=400;
numbers.num_5=500;

console.table(numbers);


// example 4 in object javascript 

const names={
    firstname:"venkat",
    lastname:"developer",

  
   
    
    
 
};

console.log(names);

// example 5 in object javascript 

let car={
    brand:"toyato",
    model:"coralla",
    year:2020,
    isRunning:false ,

    
}

console.log(car);

if ( car.isRunning==true) {
    console.log("buy a car");
    
}
else{
    console.log("don't buy a car");
    
}




// example 6 in object 

let $students={
   
    name:"venkat",
    age:19,
    city:"vadalur",
    avg:95.6,

   greet:function(){
    console.log( ` Hi im ${this.name}`);
    
   }
}

console.log($students.name);
console.log($students.age);
 $students.greet();



// example 7 in objects 

const fruit={
 
    name:"Apple",
    color:"red",
    weight:150
};

for (const key in fruit) {
    
    
   console.log(`${key} : ${fruit[key]}`);
   
    
    
}
console.log(Object.keys(fruit));
console.log(Object.values(fruit));
console.log(Object.entries(fruit));








