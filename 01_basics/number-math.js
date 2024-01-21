// const number = 400; // js engine automatically decide the type of value here

// const actualNumberTypeValue = new Number(1200) // if we define the number by using new keyword
// console.log(number);                           // we can check all the methods of number in console of browser
// console.log(actualNumberTypeValue);           // it's also work with string as same as with number


// some methods of number 
// const num = 2345
//  const score = new Number(208);
//  score.toFixed(2)  // it adds 0 after the existing value with (dot)
//  console.log(score.toString().length);
//  console.log(score.toFixed(2));
//  console.log(num.toFixed(2));


//  toPrecision method

// const value = 13123.8956;
// console.log(value.toPrecision(2));

// const hundereds = 100000000;

// console.log(hundereds.toLocaleString("en-IN"));

// min and max values are also include in numbers



// let's learn about Math functions

// console.log(Math);  //in console we can find all the methods of math 

// console.log(Math.abs(-5));  // it changes the negative value in positive value but not opposite

// console.log(Math.round(5.3));  //output = 5
// console.log(Math.round(5.7));  // output = 6

// console.log(Math.ceil(4.2)); // it gives the next value 
// console.log(Math.floor(4.8)); // it gives the previous value

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.random()*10+1);

// sometimes we have min and max values 

const min = 10;
const max =20;

//  formula [max-min +1] + min
console.log(Math.floor(Math.random()* (max-min+1)+min));

