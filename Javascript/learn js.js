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












