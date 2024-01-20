// we devide our data types into two parts 
// 1. Primitive Data Type
// 2. Non-Primitive Data Type


// Primitive Data type has multiple type of datatypen

//  String   
//  Number
//  Boolean
//  null        type = Object
//  undefined   type = undefined
//  Symbol      type = Symbol
//  BigInt

// Non-primitive Data types  are --

// Array,Object, Functions



// Note -  our all primitive values always goes into the stack in memory 
// from where if we we do any changes in the value, value woukld be changed
// but not in original value because stack give them a copy of the previpous value 

//                             while

// Non primiyive values behave just Opposite because they goes into the Heap 
// from where they get acces of original value if we do any change in the vlaue 
// then value would be change in memory ndirectly so everywhere we're using 
// Non-primitive data type value will be change.                            


// for example  ==>

let name = "anyName"
let secondName = name;  // copy of "anyName"
 
// what if
secondName= "ChangedName"; // change into the copy of the original value

//  let's find out what is happing -----

console.log(name);         // Original value will be print
console.log(secondName);   //changed into the copy of value will print 



// let's find out what happens with the Non-primitive Data Type 

let obj={
    name:"Sunder Singh",
    email:"sunder1938@globallogic.com"
}
 
let SecObj= obj;

SecObj.name ="Beautiful Singh"
 console.log(obj.name)      //value have changed because we had the access of original value
 console.log(SecObj.name)  // changed value will print


