function Generate(){
    let arr=[]
    let nu=1
    let num=document.getElementById('firstnum').value
    if(!num) return alert("Please enter the number")
    if(num.toLowerCase() ==='x'){
     for(i=1;i<=50;i++){
     arr.push(nu)
     nu=nu+2;
     }
    }else{ 
        let limit;
        parseInt(num)%2===0?limit= parseInt(num)-1 : limit=parseInt(num) 
        for(let i=1;i<=limit;i++){
        arr.push(nu)
        nu=nu+2;
        } 
    }
    console.log(arr)
   document.getElementById('output').innerHTML='Output: ' + arr.join(',')
}