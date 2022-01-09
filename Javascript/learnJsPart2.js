//Modules
//Packages
//Improvised modules
const weekDay = function() { 
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    return { 
        name(number) { return names[number]; }, 
        number(name) { return names.indexOf(name); } 
    }; 
}();
console.log(weekDay.name(weekDay.number("Sunday"))); // → Sunday

//Evaluating data as code
const x = 1; 
function evalAndReturnX(code) { 
    eval(code); return x; 
}
console.log(evalAndReturnX("var x = 2"));
// → 2 
console.log(x); 
// → 1
let plusOne = Function("n", "return n + 1;"); 
console.log(plusOne(4)); 
// → 5

//CommonJS
//ECMAScript modules
//Building and bundling 
//Module design
//Exercises
//A modular robot
//Roads module
//Circular dependencies

//Asynchronous Programming
//Exercises
//tracking the scalpel
// "use strict";

// async function locateScalpel(nest) {
//   let current = nest.name;
//   for (;;) {
//     let next = await anyStorage(nest, current, "scalpel");
//     if (next == current)
//       return current;
//     current = next;
//   }
// }

// function locateScalpel2(nest) {
//   function loop(current) {
//     return anyStorage(nest, current, "scalpel").then(next => {
//       if (next == current) 
//         return current;
//       else
//         return loop(next);
//     });
//   }
//   return loop(nest.name);
// }

// locateScalpel(bigOak).then(console.log);
// // → Butcher Shop

// locateScalpel2(bigOak).then(console.log);
// // → Butcher Shop

//Building Promise.All
"use strict";

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let pending = promises.length;
    
    // Array of Promises
    for (let i = 0; i < promises.length; ++i) {
      promises[i].then(result => {
        results[i] = result;
        --pending;
        if (pending == 0)
          resolve(results);
      }).catch(reject);
    }
  
    // `promises` is Empty.
    if (promises.length == 0)
      resolve(results);
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });


// Project: A Programming Language

// JavaScript and the Browser
// Networks and the Internet
// The Web
// HTML
// HTML and JavaScript
// In the sandbox 
// Compatibility and the browser wars 

// The Document Object Model
// The standard
// Moving through the tree 
// Finding elements 
// Changing the document 
// Creating nodes 
// Attributes
// Layout
// Styling
// Cascading styles
// Query selectors
// Positioning and animating 

// Handling Events
// Event handlers 
// Events and DOM nodes 
// Event objects 
// Propagation
// Default actions 
// Key events 
// Pointer events 
// Mouse clicks 





