// call apply and bind methods in javascript

function venkat(params) {
  console.log(this);
}
venkat();
console.log(venkat.name);
console.log(venkat.toString);
venkat.call();

// example 2

var user_name = "Venkat";
function welcome() {
  console.log("welcome :" + this.user_name);
}
welcome();

// example 3

function Hello() {
  console.log("Hello :" + this.name);
}

const member = {
  name: "venkat",
};
Hello.call(member);

function total(eng, math) {
  console.log(this.name + " got " + (eng + math) + " Marks");
}
total(25, 25);
total.call(member, 25, 25);

// example 4

let fun = total.bind(member, 85, 95);
console.log(fun);
fun();
