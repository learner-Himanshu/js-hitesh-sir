// Imidiate invoked function expression

// SyntaxError:- (function)(params)

(function name() {
    console.log("iife is running using normal function.");
})();
// it will throw an error if we don't use semicolon at the end of first iife function
(()=>{console.log("iife is runnig using arrow funciton too.")})();

((name)=>{
    console.log(`${name}, good morning.`);
})("Himanshu")
