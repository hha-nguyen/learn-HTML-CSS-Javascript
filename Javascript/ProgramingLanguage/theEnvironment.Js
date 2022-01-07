const {evaluate, parse} = require("./theEvaluator")

const topScope = Object.create(null);
topScope.true = true; 
topScope.false = false;
let prog = parse(`if(true, false, true)`); 
console.log(evaluate(prog, topScope)); 
// → false

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) { 
    topScope[op] = Function("a, b", `return a ${op} b;`); 
}

topScope.print = value => { 
    console.log(value);
    return value;
};

function run(program) { 
    return evaluate(parse(program), Object.create(topScope)); 
}








