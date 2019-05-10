// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (param1, param2, cb) {
  return cb(param1, param2)
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (num1, num2) {
  return num1 + num2
}

function multiply (num1, num2) {
  return num1 * num2
}

function greeting (first, last) {
  return `Hello ${first} ${last}, nice to meet you!`
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)) // 4
console.log(consume(10,16,multiply))// 160
console.log(consume("Mary","Poppins", greeting)) // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/*
My "own words" include the phrases "magic" and "sorcery".  In someone elses words, the closure's scope is what's at play.
Functions and scope operate like a vaccuum - they can take in just about anything that's outside them, but can't touch what's inside.
They suck in exterior things, but nothing comes out unless the user desires it, 
which is accomplished with a return statement or console log, akin to emptying the vaccuum bag through a fine sieve.

In the first, const sets the external, which is then passed to myFunction, which console logs "I'm outside".
The const internal is inside myFunc - it's inaccessible to the outside world, being inside the vaccuum cleaner's bag, but the 
functino nestedFunction sees the const internal as outside itself, thus it can suck it in and console log "I'm inside the myFunction"

TL;DR: Functions act like vaccuum cleaners, and nested functions act like vaccuum cleaners inside vaccuum cleaners.
They can only suck in what's outside themselves, and only blow out what the user desires via a return statement or a consolelog

*/


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();