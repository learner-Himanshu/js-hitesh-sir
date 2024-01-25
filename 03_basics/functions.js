function AddTwoNumber  (num1,num2) {
    console.log(num1+num2);
}
function AddTwoNumbers  (num1,num2) {
     return num1+num2;
}

AddTwoNumber // here we are providing the refernce of function
// AddTwoNumber(3,4) // here we're executing the function



//                    =======>    return concept


// const result = AddTwoNumber(4,5)
// console.log("Result without return is : ", result); //   outpt will be undefined


const Result2= AddTwoNumbers(8,9);
// console.log("Result using return is : ",Result2);  // here function will return the value to variable


function loggedIn (username){
    if (!username) { //<<== false codition 
        console.log(`${username} just logged in.`);   
        return;     
    }
    return console.log(`${username} jsut logged in..`);
}

// console.log(loggedIn());   we know undefined and empty string are treated as false value


// ========>   When we don't know how many arguments can come in as paramenter in funciton
// we use spread operator

 function UncountableParameters(...result) {
    console.log(typeof result);
    console.log(result);
     return result
 }

  const sum =UncountableParameters(4,6);
  sum.push(5)
  console.log(sum);