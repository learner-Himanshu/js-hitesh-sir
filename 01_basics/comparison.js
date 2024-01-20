// console.log("2">1);
// console.log("2">=0);
// console.log("2"<2);
// console.log("2"<=3);

// our operators perform different behavior type that's why we're watching this type of results
//Here our string type value have changed into number type because comperison only can be perform between numbers


// console.log(null >0);    //>> false    comperison operators change null into number
// console.log(null <0);    //false       and treats as Zero  but assignment operator
// console.log(null <=0);   //true        doesn't convert null into number that's why 
// console.log(null >=0);   //true        null isn't equal to Zero.
// console.log(null ==0);   // false
// console.log(null ===0);  //false
// console.log(null);       //null


// ============>>>>>   let's find out how undefined behaves 

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined == 0);

// all out wil be false here because undefined don't have any value for any comperison

// we can also perform strictly operations by using === which cheks type too

console.log(null===0)     // false
console.log(undefined===0)   // false
console.log("2"===2)   // false  because type is not same 
console.log("2"<3)// true because convertions changes first into number then comapares
 