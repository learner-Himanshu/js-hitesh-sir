//  const user={
//     userName:"Himanshu",
//     price:999,
//     greeting:function(){
//                console.log(`Welcome, ${this.userName}`);
//                console.log(this);
//     }
//  }

//  user.greeting()
//  user.userName="Shivam"
//  user.greeting()
//  console.log(this); // its will show a empty object while browser shows window


//  what if


function Check() {
    let userName = "Himanshu"
console.log(this.userName);// this keyword only wroks inside obejcts
    // console.log(this);
}

// Check()

const arrowFunction = ()=>{
    let name = "karan"
    console.log(this);
    console.log(this.name);
}
// arrowFunction()


// +++++++++++++++ if we use curly braces in arrow function we have to use return+++++++++

// +++++++++++++++ if we want to return an object from arrow function in single line++++

let arrowFunction2 = (num1,num2)=>{
    return num1+num2;
}
let fn = (num1,num2)=> num1+num2;  // correct
let fn2 = (num1,num2)=> (num1+num2); // correct
// let fn2 = (num1,num2)=> {return num1+num2}; // correct
let obj =()=>({name:"himanshu",course:"javasccript"})
console.log(arrowFunction2(3,5))
console.log(fn(4,6));
console.log(obj());