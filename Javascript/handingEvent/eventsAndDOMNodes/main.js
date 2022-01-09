// let button = document.querySelector("button"); 
// button.addEventListener("click", () => { 
//     console.log("Button clicked."); 
// }); 

let button = document.querySelector("button"); 
function once() {
    console.log("Done."); 
    button.removeEventListener("click", once);
} 
button.addEventListener("click", once);

