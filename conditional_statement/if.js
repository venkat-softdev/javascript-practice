// // if statement in javascript

// let number = -10;

// if (number>0) {
//     console.log("the number is positive value");

// }
// else if (number<0) {
//     console.log("the number value is negative");

// }
// else{
//     console.log("the value is zero");

// }
// // example 2 in javascript

// let num = 6;

// if (num %2==0) {
//     console.log("the number is even value ");

// }
// else{
//     console.log("the number is odd value");

// }

// // example 3 in javascript

// let x= 51;
// let y= 51;

// if (x>y) {
//     console.log(" x  greater than y value");

// }
// else if (y>x) {
//     console.log("y greater than x value");

// }
// else{
//     console.log("both are equal values");

// }
// // example 4 in javascript

// let avg = 90;

// if (avg >=90) {
//     console.log( "grade A");

// }
// else if (avg >= 75) {
//     console.log("grade B");

// }
// else if (avg>=60) {
//     console.log("grade C");

// }
// else if (avg >=40) {
//     console.log("grade D");

// }
// else {
//     console.log("grade F");

// }

// // Example 4 in javascript

// let age = 20;
// let haslicense= true;

// if (age>=18 && haslicense) {
//     console.log("you are eligible to drive ");

// }
// else if (age>=18 && !haslicense) {
//     console.log("you are old enough , but you don't have linciense");

// }
// else{
//     console.log("you are not eligible to drive");

// }
// // example 5 in javascript

// let year =2024;

// if ((year % 4===0 )||(year % 400 ===0)) {
//     console.log(year + "is a leap year");

// } else {
//     console.log(year + "is not leap year");

// }

// // example 6 in javascript

// let data="number";

// if (typeof data == "string") {
//     console.log("the data is string type");

// }
// else if (typeof data == "number") {
//     console.log("the data is number type");

// }
// else if (typeof data =="boolean") {
//     console.log("the data is boolean type");

// }
// else if (typeof data =="undefined") {

// }
// else{
//     console.log("the data is undefined");

// }

// // example 7 in javascript

// let correctusername = "venkat";
// let correctpassword = "password123"

// let enteredusername = " venkat"
// let enteredpassword = "password123"

// if (enteredusername === correctusername && enteredpassword===correctpassword) {
//     console.log("login succesfull welcome " + correctusername);

// }
// else if (correctusername !== enteredusername) {
//     console.log("Error : incorrect username");

// }
// else{
//     console.log("incorrect password");

// }

// // example 8 in javascript

// let currentday = 3;
// let currenthour = 12;

// if (currentday>=1 && currentday<=5) {
//     if (currenthour>=9 && currenthour <=18) {
//         console.log("the store is currently open");

//     }
//     else{
//         console.log("the store is currently closed");

//     }

// }
// else{
//     console.log("the store is closed becz weekend");

// }

let rain = false;
if (rain == true) {
  console.log("take the umberlla");
} else {
  console.log("i enjoy the rain so i go without umberlla");
}

// avg mark
// mark >90 grade A;
//mark >80 && <89 GRADE B;
// mark >70 && <79 grade c
// else grade D

//  let avg=100;
//  if (avg>=90 && avg<=99) {
//     console.log("grade A");

//  }
//  else if (avg >=80 && avg<=89 ) {
//     console.log("grade B");

//  }
//  else if (avg >=70 && avg <= 79) {
//     console.log("grade C");

//  }
//  else{
//     console.log("grade D");

//  }

// let age=18;
// if (age>=18) {
//     console.log("you are eligible to vote");

// }
// else{
//     console.log("you are not eligible to vote");

// }

// ternary

// let age =23;
//   let vote=age>=18?"eligible to vote":"you are not eligible to vote"

//   console.log(vote);

let fname = "sandhiya";
let aqua = fname === "arish" ? "the person is here " : "unknown";

console.log(aqua);

// example 4

let x = "arish";
if (typeof x == "string") {
  console.log("type is string");
} else if (typeof x == "number") {
  console.log("type is number");
} else if (typeof x == "boolean") {
  console.log("type is boolean");
} else {
  console.log("you are alien");
}

// let x = true;

// if (typeof x == "string") {
//     console.log("type is string");
// }
// else if (typeof x == "number") {
//     console.log("type is number");
// }
// else if (typeof x == "object") {
//     console.log("the type is object");
// }
// else if (typeof x == "boolean") {
//     console.log("type is boolean");
// }
// else {
//     console.log("wait");
// }

let day = "sunday";

if (day == "saturaday" && day == "sunday") {
  console.log(" hey it's weekend");
} else {
  console.log("hey it's weekday");
}

let name = "yuva";
let books = false;

if (name == "venkat" || name == "arish") {
  console.log("Yes come in");

  if (books == true) {
    console.log("ok good");
  } else {
    console.log(" why you not buy a new books");
  }
} else {
  console.log("wait a minute");
}
