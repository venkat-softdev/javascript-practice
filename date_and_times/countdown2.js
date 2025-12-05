
const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
    





    function birthday() {
        const currentyear=new Date().getFullYear();
    const newyear=new Date(`may 1 ${currentyear + 1} 00:00:00`)
    const currentDate=new Date()
    const difference=newyear-currentDate;
    const day=Math.floor(difference/1000/60/60/24);
    const hour=Math.floor(difference/1000/60/60)%24;
    const minute=Math.floor(difference/1000/60)%60
    const second =Math.floor(difference/1000)%60
   
    days.innerHTML=day<10?"0"+day:day;
    hours.innerHTML=hour<10?"0"+hour:hour;
    minutes.innerHTML=minute<10?"0"+minute:minute;
    seconds.innerHTML=second<10?"0"+second:second;
   
    
    
    }
    birthday()

    setInterval(birthday,1000)

    
    
    

    
