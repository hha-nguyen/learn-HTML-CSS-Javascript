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

const {formatDate} = require("./format-date.js");
console.log(formatDate(new Date(2017, 9, 13), "dddd the Do")); 
// → Friday the 13th
require.cache = Object.create(null);
function require(name) { 
    if (!(name in require.cache)) { 
        let code = readFile(name); 
        let module = {exports: {}}; 
        require.cache[name] = module; 
        let wrapper = Function("require, exports, module", code); 
        wrapper(require, module.exports, module); 
    } 
    return require.cache[name].exports; 
}






