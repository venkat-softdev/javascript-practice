// date and time in javascript 
// creating and manipulates dates 
// 1.create a date
//2. getting a component 
//3.setting components 
// 4. formatting dates 


// example 1 in dates and time in javascript 

let  currentdate=new Date();
console.log(currentdate);

// example 2 in date and times in js

// currentdate=new Date();
// const year=currentdate.getFullYear();
// const nextyear=currentdate.getFullYear() + 1;
// const month = currentdate.getMonth()+1;
// const day=currentdate.getDate();
// const hours=currentdate.getHours();
// const minutes= currentdate.getMinutes();
// const seconds=currentdate.getSeconds();

// console.log("current Date:"+ nextyear +"-" + month + "-" + day);
// console.log("current Time :" + hours +"-" + minutes +"-" +seconds);


// example 3 in date and time in javascript 

function updatecurrentdatetime() {
    
    currentdate=new Date();
   const year=currentdate.getFullYear();
   const month=currentdate.toLocaleString("default",{month:"long"});
   const day=currentdate.getDate();
   const hours=currentdate.getHours();
   const minutes=currentdate.getMinutes();
   const seconds =currentdate.getSeconds();
   

   const formattedDate= "formatted Date :" + month + " " + day + " ," + year;
   const formattedTime ='formatted Time :' +hours  + " :" + minutes + " :" + seconds;


   
}

updatecurrentdatetime();