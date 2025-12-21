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

// async function getvalue() {
//     let newdate=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hi guys im venkat ")
//         }, 3000);
//     });


//     let after=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" Now the discuss about the topic is javascript async and await")
//         }, 6000);
//     });
     
//     console.log("welcome");
//     let intro= await newdate;
//     console.log(" the intro :",intro);

//     // 

//     console.log("discuss");
//     let next= await after;
//     console.log(" discuss the toipc :",next);
    
//     return[intro,next];
    
    

// }

// console.log(" starting new ");
//  getvalue()


 // example 4 in async and await 

//  function resolveafter2seconds () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("resolve function")
//         }, 2000);
//     });
//  }

//  async function asyncCall() {
//     console.log("Calling async function ...");

//      const result= await resolveafter2seconds();
//     console.log(result);
    
    
//  }

//  asyncCall()


// example 5 in async and await javascript 
//  ,                             
  

// example for async and await 

// async function getblogpost() {
//     let blogpost=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" this is a blogpost");
            
//         }, 2000);
//     });

//     let blogcomment=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" this a blog comments");
            
//         }, 5000);
//     });
   
//       console.log("fetching post ....");
//       let post= await blogpost;
//       console.log("post :"+post);
//       console.log("fetching comments");
//       let comments= await blogcomment;
//       console.log("comment:"+comments);

//       return[post,comments];
      
        
// }
// getblogpost()


// // example 2 in async and await 

let result =function (marks) {
    return new Promise((resolve, reject) => {
        console.log("calculation Result");

        setTimeout(() => {
            let total=0;
            let result ="pass";
            marks.forEach(mark => {
                total +=mark;
                if (mark<35) {
                    result ="fail"
                }
            });
            resolve({total:total, result:result})
        },2000 ); 
        
    });
}

let grade=function (response) {
    
    return  new Promise((resolve, reject) => {
        if (response.result=="pass") {
            let avg = response.total /3;
            let gradeText="Grade D";
            if (avg >= 90 && avg <= 100) {
                
                gradeText ="grade A"
            }
            else if (avg >= 80 && avg<=89 ) {
                   gradeText=" Grade B"
            }
            else if (avg >=70 && avg <=79) {
                gradeText="grade c "
            }
        }
        else{
            reject("no grade");
        }
    });

};




async function getresult() {
    try {
        const value=await result([98,99,100])
          console.log("total :",value.total);
          console.log("Result :",value.result);
          const gradeText =await grade(value);
          console.log(gradeText);
          
          

    } catch (err) {
        
    }
}

getresult()


