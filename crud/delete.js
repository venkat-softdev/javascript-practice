// delete in javascript 
let tasks=[];
const cardcontainer =document.querySelector("#cardcontainer");

function fetchtask() {
    fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/users")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        tasks=data;
        rendercards();
    })
    .catch((error)=>{
        console.log("error fetching tasks :",error);
        
    })
    
}

// render task a cards
function rendercards() {
    cardcontainer.innerHTML=tasks

    .map((task)=>{
        `<div class="card">
        <img src="${task.image}" alt ="${task.name}"
        <h3>${task.name}</h3>
        <p><strong>Email:</strong>${task.email}</p>
        <p><strong>phone:</strong>${task.phone}</p>
        <button onclick="deleteTask(${task.id})">Delete</button>
        </div>`
    })
    .join("")
}

// delete a task 
function deleteTask(id) {
    fetch(`https://694ce310da5ddabf0037bc1a.mockapi.io/animals/users ${id}`,{
        method:"DELETE",
    })
    .then((res)=>{
        if (res.ok) {
            tasks=tasks.filter((task)=> task.id !==id);
            rendercards();
            alert("Task deleted successfully");
        }
        else{
            throw new Error("Failed to delete task");
            
        }
    })
    .catch((error)=>{
        console.log("error deleting task :",error);
        
    })
}
fetchtask()


