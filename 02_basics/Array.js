// The Array object, as with arrays in other programming languages,
// enables storing a collection of multiple items under a single variable name,
// and has members for performing common array operations.

// ====>>   

// 1. JavaScript arrays are resizable and can contain a mix of different data types.
// 2.JavaScript arrays are not associative arrays and so, array elements cannot be
//   accessed using arbitrary strings as indexes, but must be accessed using nonnegative
//   integers (or their respective string form) as indexes.
// 3.JavaScript arrays are zero-indexed: the first element of an array is at index 0, 
//   the second is at index 1, and so on — and the last element is at the value of 
//   the array's length property minus 1.
// 4.JavaScript array-copy operations create shallow copies. (All standard built-in
//   copy operations with any JavaScript objects create shallow copies, rather than
//   deep copies).
 

const array =[1,2,3,4,5]  // first way to define the array
const newArr= new Array(1,2,3,4,5)  // sec way to define the array
const newArray= new Array("karan","jyoti","gunjan","anjali","shrasti")  // sec way to define the array
// console.log(array);
// console.log(newArr);
// console.log(newArray);

// array.push(6)
// console.log(array);

//    ======>>>>>               aray methods


// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// See Also:
// Search Methods
// Sort Methods
// Iteration Methods	Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()

let values=[1,2,3,4,5,6,7]
// console.log(values)
// values.push(8)// console.log(values);   adds the value in last of array
// values.pop()
// console.log(values);   delete the value from last
// values.unshift(0)
// console.log(values); adds the value in begining
// values.shift()
// console.log(values); //removes the value from begining but we can provide indexs too

// console.log(values.indexOf(4));
// console.log(values.includes(4));
// console.log(values.indexOf(14)); //-1 value will always display when value doen't exist inside the array


console.log(values)
console.log(typeof values)
let newVal = values.join()  // it changes the type of an array when copy to another array
console.log(newVal)
console.log(typeof newVal)



// =========>> slice and splice methods

// console.log(values.slice(1,4));  // it returns the section of an array where first index includes but not last
//  console.log(values);
//  let slicedval = values.slice(1,3)
//  console.log("sliced values are : " , slicedval);
//   console.log(values);  // create the shallow copies no change in original array
//  let splicedval = values.splice(1,3)  // it changes the original values of an array
//  console.log("spliced values are : " , splicedval);
 console.log(values) // changes into the original array values