// concatenation in string functions

let first_name = "venkatesa";
let last_name = "perumal";

let fullname = first_name + " " + last_name;
console.log(fullname);

// example 2 in string methods concatenate

let message = "hello";
message += ",";
message += "world";
console.log(message);

// example 3 in concatenation using concat

let str1 = "good";
let str2 = "morning";

let greeting = str1.concat(" ", str2);
console.log(greeting);

// example 4 in string methods

let name = "venkat";
let welcome = "Hello" + " " + name;
console.log(welcome);

// example 5 in string methods
// join();

let words = ["toy", "world"];
let sentence = words.join(" ");

console.log(sentence);

// example 6 in string methods

const items = ["Apple", "orange", "Banana"];
let htmllist = "<ul>";

for (let i = 0; i < items.length; i++) {
  htmllist += "<li>" + items[i] + "</li>";
}
htmllist += "</ul>";

console.log(htmllist);

// example 7 in string methods in javascript

let namelist = ["venkat", "yuva", "sandy", "arish", "jigki"];
let html = "<ul>";

for (let i = 0; i < namelist.length; i++) {
  html += "<li>" + namelist[i] + "</li>";
}
html += "</ul>";

console.log(html);

// example 8 in string methods in javascript

let part1 = "The quick brown fox";
let part2 = "Jumps over";
let part3 = "the lazy dog.";

let fullword = part1 + " " + part2 + part3;

console.log(fullword);

// example 9 in string methods in javascript

const userprofile = ["Alex", "developer", "san franciso", "CA", "USA"];

let profile = userprofile.join(" |");

console.log(profile);

// example 10 in concatenation in javscript

let firstname = "venkatesa";
let lastname = "perumal";

let c = firstname + lastname;
c = firstname.concat(" ", lastname);
console.log(c);
