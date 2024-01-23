//  Singleton object => when we object created by constructor that's called singleton

// constructor method of creating Object in js

// Object.create()

//Object literals method

//Symbols in JavaScript

// how can we add symbol in Object

const mySymbol = Symbol("karan");
// console.log(mySymbol);
// console.log(typeof mySymbol);

// symbols can only be push by using square brackets []
const JsUser ={
      name:"Himanshu",
    "anotherName":"karan Kumar",
    [mySymbol]:"key@123",
    directSym:Symbol("newcreatedSymbol"),
    age:"19",
    email:"himanshu@gmail.com",
    IsLoggedIn:false,
    loginDays:["Monday","Tuesday","Friday"]
}

// console.log(JsUser.name)
// console.log(JsUser["name"]); // we can access an Object property by using brackaets 
                // because it changes all the keys into the string behind the scene
// console.log(JsUser["anotherName"]); // Only can be access through string type 
//  console.log(JsUser.directSym);
//  console.log(JsUser["directSym"]);
//  console.log(typeof JsUser["directSym"]); // symbol it,s declared as symbol
// console.log(JsUser[mySymbol]);  // this is the only way to acces an symbol from object

// console.log( typeof JsUser[mySymbol]); // string because behind the scene js treats all keys as string


// console.log(JsUser) // here will find that symbol is using as a key in whole object






// if we want to not to change our object in future we can freeze our Object 
// JsUser.name="ChnagedName"
// console.log(JsUser.name);

// Object.freeze(JsUser); 
//  JsUser.name="effort to change the Name"
//  console.log(JsUser.name);

JsUser.greeting = function() {
 console.log("Hello js User")   
}
JsUser.greetingTwo = function(){console.log(`Hello Js User ${this.name}`)}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());