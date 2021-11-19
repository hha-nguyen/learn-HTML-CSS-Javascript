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
/*
for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
}
*/

// The final analysis 

// Strings and their properties 
console.log("coconuts".slice(4, 7)); 
// → nut 
console.log("coconut".indexOf("u")); 
// → 5
console.log("one two three".indexOf("ee")); 
// → 11
console.log(" okay \n ".trim()); 
// → okay
let sentence = "Secretarybirds specialize in stomping"; 
let words = sentence.split(" "); console.log(words); 
// → ["Secretarybirds", "specialize", "in", "stomping"] 
console.log(words.join(". ")); 
// → Secretarybirds. specialize. in. stomping
console.log("LA".repeat(3)); 
// → LALALA

//Rest parameters
function max(...numbers) { 
    let result = -Infinity; 
    for (let number of numbers) { 
        if (number > result) result = number; 
    } return result; 
} 
console.log(max(4, 1, 9, -2)); 
// → 9
let numbers = [5, 1, 7]; 
console.log(max(...numbers)); 
// → 7
let wordss = ["never", "fully"]; 
console.log(["will", ...wordss, "understand"]); 
// → ["will", "never", "fully", "understand"]

//The Math object 
function randomPointOnCircle(radius) { 
    let angle = Math.random() * 2 * Math.PI; 
    return {
        x: radius * Math.cos(angle), 
        y: radius * Math.sin(angle)
    }; 
} 
console.log(randomPointOnCircle(2)); 
// → {x: 0.3667, y: 1.966}
console.log(Math.floor(Math.random() * 10)); 
// → 2

//Destructuring

//JSON
let string = JSON.stringify({squirrel: false, events: ["weekend"]}); 
console.log(string); 
// → {"squirrel":false,"events":["weekend"]} 
console.log(JSON.parse(string).events); 
// → ["weekend"]

//Dùng phương thức JSON.parse() để tạo ra object javascript:
//Dùng phương thức JSON.stringify() để tạo chuỗi JSON từ Object Javascript
var str = JSON.stringify({
    "company":"facebook",
    "CEO":"Mark Zuckerberg",
    "employees":[{"name": "John","age": 25},{"name": "Anna","age": 29}]
    });

var obj = JSON.parse(str); // đây là object javascript được tạo từ chuỗi JSON

/* truy cập vào thuộc tính JSON bằng tên thuộc tính */
console.log(obj.company) ;           // facebook
console.log(obj.employees[0].name) ; // John
console.log(obj.employees[1].name) ; // Anna
//Có thể thay đổi giá trị thuộc tính của JSON bằng cách truy cập tên thuộc tính.
obj.employees[0].name = "Mesto";
console.log(obj.employees[0].name);
//JSON.parse () có thể nhận thêm tham số thứ 2 để kiểm tra mỗi thuộc tính trước khi trả về giá trị.
var text = '{"name":"John", "birth":"1996-05-15", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
console.log(obj.birth);
//Nếu muốn giữ lại function làm giá trị thì phải chuyển function thành chuỗi trước khi chạy phương thức JSON.stringify().













    



















