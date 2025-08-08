let input=[1,2,3,4,5,6,7,8,9]

let secondin=[1,2,8,9,12,46,76,82,15,20,30]


let result=input.reduce((acc,curr)=>{
    acc[curr]=0
    for(i=0;i<secondin.length;i++){
    if(secondin[i]%curr===0){
        acc[curr]=acc[curr]+1
    }
    }
    return acc;
},{})
console.log(result)