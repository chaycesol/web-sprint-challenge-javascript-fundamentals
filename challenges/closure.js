// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


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

// Explanation: 
/*
**** CHAYCE'S ANSWER *****
When code inside nestedFunction looks for internal variable, it first searches within its own block to see if there are any local variables it can refer to, if not - then it loops through and refers back to its outer function myFuncion where it can find it and apply the changes as the whole myFunction block is executed

*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */



const counter = [];
  for (let i = 0; i < count; i++) {
      counter.push(start + i);
  }
  return counter
}




function summation(counter){const counter = [];
  for (let i = 0; i < count; i++) {
      counter.push(start + i);
  }  return counter.reduce(function (accumulator, item){
  },0);
}




console.log(summation(4));
