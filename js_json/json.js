// javascript json

let user = {
  firstname: "venkatesa",
  lastname: "perumal",
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};
console.log(user.fullname());

//******************************************************** */

// example 2 in json javascript

let mobiles = [
  {
    model: "iqoo Z10",
    Brand: "IQOO",
    MRP: "20000",
    Price: "19500",
    Proccessor: "Snapdragon 7s gen 3",
    Ram: "8 GB",
    Storage: " 128 GB",
  },

  {
    model: "Vivo T4",
    Brand: "VIVO",
    MRP: "20000",
    Price: "19500",
    Proccessor: "Snapdragon 7s gen 3",
    Ram: "8 GB",
    Storage: " 128 GB",
  },

  {
    model: "VIVO T2X 5G",
    Brand: "VIVO",
    MRP: "15000",
    Price: "13000",
    Proccessor: " Dimenstity 6020",
    Ram: "4GB",
    Storage: " 128 GB",
  },
];

console.log(mobiles, typeof mobiles);

const jstring=JSON.stringify(mobiles);

console.log(jstring,typeof jstring);

// example 3 in json in javascript

 
 let fname='{"name":"venkat}';
 console.log(fname,typeof fname);

let person_name=JSON.parse(fname);
console.log(person_name, typeof person_name);

 
