// load dependencies
require("./code/load")("code/scripts.js", "code/chapter/05_higher_order.js", "code/intro.js");

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

//Filtering arrays 
function filter(array, test) { 
  let passed = []; 
  for (let element of array) { 
    if (test(element)) { 
      passed.push(element);
    }
  } return passed;
}
//console.log(filter(SCRIPTS, script => script.living)); // → [{name: "Adlam", …}, …]
console.log(SCRIPTS.filter(s => s.direction == "ttb")); 
// → [{name: "Mongolian", …}, …]

//Transforming with map 
function map(array, transform) { 
  let mapped = []; 
  for (let element of array) { 
    mapped.push(transform(element)); 
  } return mapped; 
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl"); 
console.log(map(rtlScripts, s => s.name)); 
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

//Summarizing with reduce 
function characterCount(script) { 
  return script.ranges.reduce((count, [from, to]) => { 
    return count + (to - from); 
  }, 0); 
}
console.log(SCRIPTS.reduce((a, b) => { return characterCount(a) < characterCount(b) ? b : a; })); 
// → {name: "Han", …}

//Composability
let biggest = null; 
for (let script of SCRIPTS) { 
  if (biggest == null || characterCount(biggest) < characterCount(script)) { 
    biggest = script; 
  } 
} console.log(biggest);
// → {name: "Han", …}

function average(array) { 
  return array.reduce((a, b) => a + b) / array.length; 
}
console.log(Math.round(average( SCRIPTS.filter(s => s.living).map(s => s.year)))); // → 1165 console.log(Math.round(average( SCRIPTS.filter(s => !s.living).map(s => s.year)))); // → 204

let total = 0, count = 0; for (let script of SCRIPTS) { 
  if (script.living) { total += script.year; count += 1; 
  } 
} 
console.log(Math.round(total / count)); 
// → 1165

//Strings and character codes 



  

