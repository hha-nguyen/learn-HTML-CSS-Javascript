/*var a = window.prompt("What's your name?")
console.log("Hello", a);
document.getElementById("My button").onclick = function() {
    var ok = document.getElementById("My text").value;
    console.log("Fuck", ok);
}

OBJECT
var mesto = {
    name: "mesto",
    age: Math.round(Math.random() *19),
    car: ["mes", "audi", "vios"],
    produce : function() {
        console.log("The best producer")
    },

    talent: function() {
        console.log("HE CAN SING");
    },  
}

if (mesto.car) {
    console.log(mesto.age);
}

STRING METHODS
var names = "Ha";
var firstName = "Nguyen Quang";
var middleName = firstName.slice(firstName.indexOf(" ") + 1);
console.log(middleName);
console.log(names.charAt(1));
names = firstName.concat(" ", names);   
console.log(names);
names = names.replaceAll(" ", "_");
console.log(names);

FOREACH AND MAP

var s = 0;
var ar = [1, 2, 3, 4, 5];
function sum(index) {
    s += index;
}
ar.forEach(sum);
console.log(s);
function alright(num) {
    num *= 0;
    return num;
}
ar = ar.map(alright);
console.log(ar);
let a = [1, 2, 3, 4, 5];
function fil(num, index, array) {
    if (num >= 2) {
        return num;
    }
}
let nar = a.filter(fil);
console.log(nar);
console.log(ar);
function red (total, nextLet, index, array) {
    return total + nextLet;
}
let ar = ar.reduce(red);
console.log(ar);

CALLBACK
function display(output) {
    document.getElementById("mh1").innerHTML = output;
}

function setMessage(text, callBack) {
    callBack(text);
}
setMessage("Hi Ha", display);

Function EXPRESSION
sayFuck() 
function sayFuck() {
    console.log("Fuck");
}
let fk = function() {document.getElementById("mh1").innerHTML = "Fuck u";}
fk();

ANNONYMOUS FUNCTION
(function(){
    console.log("Hi there");
})();

CLOSURE 
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      document.getElementById("mh1").innerHTML = name; // use variable declared in the parent function
    }
    displayName();
}
init();
function makeSize(size) {
    return function() {
        document.body.style.fontSize = size + "px";
    }
}
function makeFont(font) {
    return function() {
        document.body.style.fontFamily = font;
    }
}
let size30 = makeSize(30);
size30();
let makefont = makeFont("Ink free");
makefont();

ARROW FUNCTION
let hello = () => {
    console.log("Helu ");
    console.log("ha");
}
hello();

NUMERIC SORTING
let num = [1, 12, 3, 4, 6];
num.sort(function(a, b) {
    return b - a;
})
console.log(num);

num.sort((a, b) => a - b);
console.log(num);

//CLASS/CONSTRUCTOR/THIS/STATIC/INNHERIENCE/OVERRIDING/SUPER
class producer{
    static numberOfprod = 0;
    constructor (song, feat, singer) {
        this.song = song;
        this.feat = feat;
        this.singer = singer;
        producer.numberOfprod += 1;
    }
    drop() {
        console.log("Make drop for ", this.song);
    }
    lyrics() {
        console.log("Need a good singer to replace for", this.singer);
    }
}

let Mesto = new producer("When we're gone", "Justin Mylo", null);
Mesto.drop();
console.log(Mesto.song); 
console.log(Mesto.singer);
console.log(producer.numberOfprod);
class magProducer extends producer {
    constructor (song, feat, singer, rank) {
        super(song, feat, singer);
        this.rank = rank;
    }
    HSatUltra() {
        console.log("This producer can present at UMF");
    }
}
let martinGarrix = new magProducer("Scare to be lonely", null, "Dua Lipa", 1);
martinGarrix.drop();
martinGarrix.HSatUltra();
console.log(martinGarrix.rank);

//OBJECT AS ARGUMENTS/ARRAY OF OBJECT/ARRAY OF FUNCTION

class champion {
    constructor (name, AP, AD, cooldown) {
        this.name = name;
        this.AD = AD;
        this.AP = AP;
        this.cooldown = cooldown;
    }
    lane() {
        if (this.AP == 0) {console.log(this.name, "isn't on mid lane");}
        else {
            console.log(this.name, "is on mid lane");
        }
    }
}
function buffAD(champion, newAD) {
    champion.AD = newAD;
}
let leeSin = new champion("Lee Sin", 0, 87, 15);
let yasuo = new champion("Yasuo", 0, 75, 10);
let janna = new champion("Janna", 40, 30, 15);
buffAD(leeSin, 100);
console.log(leeSin.AD);
let topChampion = [leeSin, yasuo, janna];
topChampion[2].lane();

//GETTER OR SETTER/TEMPLATE LITERALS
class Name {
    constructor(firstName, lastName) {
        this.firstName= firstName;
        this.lastName = lastName;
    }

    set firstName(val) {
        this.first= val.toUpperCase();
    }
    set lastName(val) {
        this.last = val.toUpperCase();
    }
    get ful() {
        return this.first + " " + this.last;
    }
}

let user1 = new Name("Nguyen", "Ha");
console.log(`your name is ${user1.first} and is equal to ${12 * 13}`);

//HTML ELEMENTS/MODIFY HTML ELEMENTS 
const h1 = document.createElement("mh1");
const unDerline = document.createElement("u");
unDerline.innerText = "Hello world";
h1.append(unDerline);
document.body.style.fontSize = 50 + "px";
document.body.append(h1);

CHANGE CSS PROPERTIES
document.querySelector("#myButton").onclick = function() {
    const h1 = document.querySelector("#mh1");
    const underline = document.createElement("u");
    h1.style.color = "green";
    h1.style.backgroundColor = "black";
    h1.style.fontFamily = "consolas";
    h1.style.textAlign = "center";
    h1.style.border = "4px solid";
    console.log(h1.style);
    underline.innerText = "bye world";
    h1.innerText = "bye world";
    h1.innerText = "";
    h1.append(underline);
    const p = document.querySelectorAll(".myp");
    p.forEach(element => element.innerText = "WHoaa");

    const button = document.querySelector("button");
    button.remove();
}
*/

const div = document.querySelector("#myDiv");
div.style.backgroundColor = "gray";
div.style.width = "200px";
div.style.height = "200px";
div.addEventListener("mousemove", e => {
    console.log("your mouse is moving in the square");   
    div.style.backgroundColor = "red";
})
/*
div.addEventListener("mouseover", e => {
    console.log("your mouse is in the square");   
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseleave", e => {
    console.log("your mouse left of the square");   
    div.style.backgroundColor = "grey";
})
div.addEventListener("contextmenu", e => {
    console.log("you opened the context menu");   
    div.style.backgroundColor = "red";
})
div.addEventListener("dblclick", e => {
    console.log("you clicked 2 times");   
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseup", e => {
    console.log("you let go of the mouse");   
    div.style.backgroundColor = "black";
})
div.addEventListener("mousedown", e => {
    console.log("you are holding the mouse down");   
    div.style.backgroundColor = "blue";
})
*/













