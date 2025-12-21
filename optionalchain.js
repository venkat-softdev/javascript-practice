// optional chaining in javascript 

const user={
    name:"venkat",
    age:19,
    // address:{
    //     city:"vadalur"
    // }
    
};

// option 1 
console.log(user.address?user.address.city:undefined);

// option-2 

console.log(user.address && user.address.city);


// option-3 

console.log(user.address?.city);


// option -4 
let key="city";
console.log(user.address?.[key]);

/************************************************************/

const user_details={
    User_Id:'456',
    account:{
        account_number:'ABCD456',
        holder:{
            profile:{
                firstname:'venkat',
                lastname:'vp',
                birthdate:'01-05-2006'

            }
        },
        contact:{
            address:{
                city:"vadalur",
                state:"Tamil nadu",
                country:"India"
            },
            phone:[
                {
                    type:'Home',
                    phoneNumber:'987668776'

                },
                {
                    type:'office',
                    phoneNumber:'98986698'
                }
            ]
        }
    }
}

