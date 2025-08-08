class Calculation{
  constructor(a,b){
     this.a = parseFloat(a);
    this.b = parseFloat(b);
  }

  action(type){
    console.log(this.a,this.b)
     switch(type){
        case 'add':
          return this.a+this.b;
        case 'sub':
          return this.a-this.b;
        case 'multiply':
            return this.a*this.b;
        case 'divide':
     return this.b === 0
    ? "Undefined:::ERROR"
    : (this.a === 0 ? 0 : this.a / this.b);
        default:
           return "Invalid operation";
     }
  }



}



function Calculate(){
    let a=document.getElementById('firstnum').value
    let b=document.getElementById('secondnum').value
    let operator=document.getElementById('Operationtype').value
    console.log(operator)
 let calc=new Calculation(a,b)
 let result=calc.action(operator)
    document.getElementById('output').innerHTML="Output:"+result
}