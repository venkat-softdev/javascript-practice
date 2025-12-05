// javascript starting 
 
const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");





 function nextyear() {
    
    const currentyear=new Date().getFullYear(); // today date and current year
const newYear= new Date(`january 1 ${currentyear +1} 00:00:00` );// jan varatha find panrathu
const currentDate=new Date() // today date
const difference=newYear-currentDate; // 2026 kuda today date ahh minus panren (value : 26 days to go)
 const day=Math.floor(difference /1000 /60/60/24) // itha vachi than find panen 26 days nu 
 const hour=Math.floor(difference/1000/60/60)%24
 const minute=Math.floor(difference/1000/60) %60
 const second=Math.floor(difference/1000) %60
 
 days.innerHTML=day<10?"0"+day:day;
 hours.innerHTML=hour<10?"0"+hour:hour; 
 minutes.innerHTML=minute <10?"0"+minute:minute; 
 seconds.innerHTML=second <10? "0"+second:second;


 
 }
 
 nextyear()
 
 setInterval(nextyear,1000)


