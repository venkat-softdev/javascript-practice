// nested for loop in javascript 
 

let num=[];
for (let i = 0; i <=3; i++) {
    num.push([]);
    for (let j = 0; j < 3; j++) {
        num[i].push(j);
        
        
    }
    
}
console.table(num);


let matrix=[
    [1,2,3],
    [4,5,6],
    [6,7,8]
]

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.table(i,j ,matrix[i][j] );
        
        
    }
    
}

