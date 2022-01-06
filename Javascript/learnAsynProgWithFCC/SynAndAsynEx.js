// Synchronous: do things step by step, if 1 stop, system will stop: 1 land road

console.log(" I ");
console.log(" eat ");
console.log(" ice cream ");
console.log(" with a ");
console.log(" spoon ");

// Asynchronous: do things at one time, 1 stop, sys will continue: more than 1 land road 

console.log(" I ");
console.log(" eat ");

setTimeout(() => {
    console.log(" ice cream ");
}, 4000);

console.log(" with a ");
console.log(" spoon ");


