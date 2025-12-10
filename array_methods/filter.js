// filter methods in javascript

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evennumbers = numbers.filter((number) => {
  return number % 2 == 0;
});
console.log(evennumbers);

// example 2 in filter methods javascript

let newnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nextnumber = newnumber.filter((value) => {
  return value % 3 == 0;
});
console.log(nextnumber);

// example 3 in filter array methods

let users = [
  { name: "venkat", age: 20, city: "vadalur" },
  { name: "Ramesh", age: 40, city: "salem" },
  { name: "jagan", age: 30, city: "chennai" },
  { name: "sandy", age: 28, city: "karur" },
  { name: "aravind", age: 32, city: "pettai" },
];

let eligible = users.filter((user) => {
  return user.age > 30;
});
console.log(eligible);

// example 4 in filter methods in array

let avg = [
  { name: "venkat", mark: "96%" },
  { name: "billy", mark: "76%" },
  { name: "Rahul", mark: "66%" },
  { name: "arjun", mark: "86%" },
  { name: "kamal", mark: "56%" },
];

let updatevalue = avg.filter((marks) => {
  return marks.mark < "80%";
});
console.table(updatevalue);

// example 5 in filter in array methods

let pets = ["dogs", "cats", "rats", "squrill", "cows"];

let newpets = pets.filter((pet) => {
  return pet.length == 4;
});
console.log(newpets);

// example 6 in filter method javascript

let fruits = [
  { name: "apple", category: "fruit" },
  { name: "tomato", category: "vegetables" },
  { name: "orange", category: "fruit" },
  { name: "grape", category: "fruit" },
  { name: "Brinjal", category: "vegetables" },
];

let list = fruits.filter((item) => {
  return item.category == "fruit";
});

console.table(list);

// example 7  filter in array methods

let animals = ["elephant", "tiger", "lion", "deer", "t-rex"];

let find = animals.filter((animal) => {
  return animal.startsWith("t");
});
console.log(find);

// example 8 filter in array methods

let birds=['peacock','pegion','Dove','eagle','kingfisher'];

let newbirds=birds.filter((bird)=>{
  return bird.length>5
})
console.table(newbirds);
