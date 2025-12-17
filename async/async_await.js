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

// async function getdata() {
//     let blogpost=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Blog post")
//         }, 2000);
//     });
//     let blogcomment=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Blog comments")
//         }, 5000);
//     });
//     console.log("fetching post ...");
//     let post=await blogpost;
//     console.log("post:" ,post);

//     //
//     console.log("fetching comments ...");
//     let comment=await blogcomment;
//     console.log("comments :",comment);
    
//     // return 
//     return[post,comment]
    
    
    
// }
// console.log("welcome to blog post");
// getdata()

// example 3 in async and await 

async function getvalue() {
    let newdate=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hi guys im venkat ")
        }, 3000);
    });


    let after=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" Now the discuss about the topic is javascript async and await")
        }, 6000);
    });
     
    console.log("welcome");
    let intro= await newdate;
    console.log(" the intro :",intro);

    // 

    console.log("discuss");
    let next= await after;
    console.log(" discuss the toipc :",next);
    
    return[intro,next];
    
    

}

console.log(" starting new ");
 getvalue()
