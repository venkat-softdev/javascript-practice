// async function welcome() {
//     return "Venkat Developer "
// }

// welcome()
// .then((wel)=>{
//     console.log(wel);
    
// })
// .catch((come)=>{
//     console.error(come);
    
// })

// example async and await 

async function getdata() {
    let blogpost=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Blog post")
        }, 2000);
    });
    let blogcomment=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Blog comments")
        }, 5000);
    });
    console.log("fetching post ...");
    let post=await blogpost;
    console.log("post:" ,post);

    //
    console.log("fetching comments ...");
    let comment=await blogcomment;
    console.log("comments :",comment);
    
    // return 
    return[post,comment]
    
    
    
}
console.log("welcome to blog post");
getdata()
