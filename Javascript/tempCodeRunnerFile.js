"use strict";
function foo() {
    function bar() { }; // OK
}

if (aVariable) {
    var baz = function () { return true }; // OK
}

{
    function qux() { return true }; // SyntaxError
}