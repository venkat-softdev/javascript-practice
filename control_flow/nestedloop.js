// nested for loop in javascript 
 

let num=[];
for (let i = 0; i <=3; i++) {
    num.push([]);
    for (let j = 0; j < 3; j++) {
        num[i].push(j);
        
        
    }
    
}
console.table(num);

