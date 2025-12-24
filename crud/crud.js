// crud setting 

 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase,ref,push,onValue,remove,set } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";



const appsetting={
    databaseURL:"https://venkat-22edc-default-rtdb.firebaseio.com/"
};


const app=initializeApp(appsetting);
const database=getDatabase(app);

const userlist=ref(database,"users");

const id=document.querySelector("#id");
const name=document.querySelector("#name");
const age=document.querySelector("#age");
const city=document.querySelector("#city");
const form=document.querySelector("#form");
const tbody=document.querySelector("#tbody");

form.addEventListener("submit",function (e) {
    e.preventDefault();

    if (id.value) {
        // update record 
        return;
    }
    if (!name.value.trim() || !age.value.trim() || !city.value.trim() ) {
        alert("please fill all details ")
        return;
    }
    // insert

    const newuser={
        name:name.value.trim(),
        age:age.value.trim(),
        city:city.value.trim()
    };
    push(userlist,newuser)
})