console.log(8 * null); // equals 0
console.log("5" - 1);//left associative operator: -, / => 5 StringToNum then cal (string concatenation -> type correction)
console.log("5" + 1); // right associative operator: +, * => 1 NumToString then cal
console.log("five" * 2); 
console.log(false == 0);
console.log(null == undefined); // true
console.log(null === undefined);// When you do not want any type conversions to happen, there are two additional operators: === and !==. 
console.log(null || "user");
/*Function*/
const square = function(x) {
    return x*x;
};
console.log(square(12));
const makeNoise = function() { console.log("Pling!"); };
makeNoise();
/* shorter
function square(x) {
    return x*x;
}*/
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) { result *= base; } 
    return result;
};/*Arrow function: When there is only one parameter name, you can omit the parentheses around the parameter list. 
ex: const square2 = x => x * x;*/
const horn = () => { console.log("Toot"); };
//Call stack
/*
function chicken() { return egg(); } 
function egg() { return chicken(); } 
console.log(chicken() + " came first."); => Out of stack space*/
//Optional argument
function Power(base, exponent = 2) { 
    let result = 1; 
    for (let count = 0; count < exponent; count++) { 
        result *= base; 
    } 
    return result; 
}
console.log(Power(4)); // → 16 console.log(power(2, 6)); // → 64
//Closure: The ability to treat functions as values
function multiplier(factor) {
    return number => number * factor; 
}
let twice = multiplier(2); 
console.log(twice(5));
function name(n) {
    return function(a) {
        return `${n} likes ${a}`;
    };
}
var j = name('John');
var c = name('Cindy');
j;
console.log(j('dog'));
console.log(c('cat'));
//Recusion
/*
function power(base, exponent) {
    if (exponent == 0) { return 1; } 
    else {
        return base * power(base, exponent - 1); } 
}
console.log(power(2, 3)); 
*/
function findSolution(target) {
    function find(current, history) { 
        if (current == target) { return history; } 
        else if (current > target) { return null; } 
        else { 
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`); 
        } 
    } 
    return find(1, "1"); 
}
console.log(findSolution(24)); 
//Growing function
function zeroPad(number, width) { 
    let string = String(number); 
    while (string.length < width) { 
        string = "0" + string; 
    } return string; 
}
function printFarmInventory(cows, chickens, pigs) { 
    console.log(`${zeroPad(cows, 3)} Cows`); 
    console.log(`${zeroPad(chickens, 3)} Chickens`); 
    console.log(`${zeroPad(pigs, 3)} Pigs`); 
}
printFarmInventory(7, 16, 3);
//Functions and side effects 
//Practice func
min_num = (num1, num2) => {return num1<num2?num1:num2};
console.log(min_num(1, 2));
function checkEvenOrOddNum(numberChecking) {
    if (!numberChecking) return `Even num`;
    if (numberChecking == -1) return `Odd num`;
    return checkEvenOrOddNum(numberChecking-2);
}

let resultChecked = checkEvenOrOddNum(50);
console.log(resultChecked);
let countChar = (stringChecking, charChecking) => {
    let count = 0;
    for (let i = 0; i < stringChecking.length; ++i) {
        if (stringChecking[i] == charChecking) {
            count++;
        }
    }
    return count;
}
console.log(countChar("aBcBdCDB", 'B'));

//DATA STRUCTURES: OBJECTS AND ARRAYS
//Properties
//Method
let doh = "Doh"; 
console.log(typeof doh.toUpperCase); 
// → function 
console.log(doh.toUpperCase()); 
// → DOH
//Objects
//Values of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression.
let day1 = { 
    squirrel: false, events: ["work", "touched tree", "pizza", "running"] 
}; console.log(day1.squirrel); 
// → false console.log(day1.wolf); 
// → undefined 
//day1.wolf = false; 
//console.log(day1.wolf); 
// → false

let anObject = {left: 1, right: 2}; 
console.log(anObject.left); 
// → 1 delete anObject.left; 
console.log(anObject.left); 
// → undefined 
console.log("left" in anObject); 
// → false 
console.log("right" in anObject); 
// → true
console.log(Object.keys({x: 0, y: 0, z: 2})); 
// → ["x", "y", "z"]
//Object.assign
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4}); 
console.log(objectA); 
// → {a: 1, b: 3, c: 4}

//Mutability
let object1 = {value: 10}; 
let object2 = object1; 
let object3 = {value: 10};
console.log(object1 == object2); 
// → true console.log(object1 == object3); // → false
object1.value = 15; 
console.log(object2.value); 
// → 15 
console.log(object3.value); 
// → 10

//The lycanthrope's log 
//Computing correlation
//Array loops 




















