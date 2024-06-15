//Immediately Invoked Function Expression or IIFE

/* 

iife or Immediately Invoked Function Expression is a type of function that is used to run a function 
immediately without waiting for the whole code to get executed. and it is also used to avoid global namespace pollution

Example:  Suppose we want to connect to database immediately after our app get started here we use iife

*/

//it has a unique syntax unlike any other function it start with a () and ends with ();

//Example

( function user() {
    console.log("Iife with normal function")
})();

( () => {
    console.log("Iife with arrow function")
})();

// how to pass any argument and parameter in iife

( (name) => {
    console.log(`Iife with ${name} function`)
})("Arrow");
