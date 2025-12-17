async function welcome() {
    return "Venkat Developer "
}

welcome()
.then((wel)=>{
    console.log(wel);
    
})
.catch((come)=>{
    console.error(come);
    
})
