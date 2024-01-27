let val =20;
// const val =20;  // let and const works same but var not that is globally accessible
if (true) {
    // console.log(val); // it will also throw an error of reference error cant access before define
    let val =10;
    // console.log(val); // we can get access of let values inside scope but not outside 
     // example--
    //  let val2=50;
}
// console.log(val2); // it will throw an error of reference error we can't get acees outside of scope
// val = 30;
// console.log(val);


// Hoisting concept of javascript
//  we all know js variables are so much poewrful they can hold anything like object functions

// let's find out the diffrence betweet declaration of a functions

 let result2=AddOne(4)
 console.log(result2);
function AddOne(num) {
     return num+1
}

let result =AddOne(4) ;
console.log(result);


    //    =======>>>>>      // what if 


    // addTwo(3)  // it will throw an error unlike normal function


const addTwo= function(params){
 return params+2
}

        let res=addTwo(3)  // can execute as normal function
 console.log(res);
