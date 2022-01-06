let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}

let is_shop_oppen = true;

// let order = () => {

//     return new Promise( (resolve, reject) => {
//         if (true) {
//             resolve();
//         } 
//         else {
//             reject();
//         }
//     }) 
// }

// order()

// async function order (){
//     try {
//         await abc;
//     } catch(error){
//         console.log("abc doesn't exis", error);
//     } finally {
//         console.log("run code anyways");
//     }
// };

// order()
// .then(() => {
//     console.log("dadadjasod");
// })

let topping_choice = () => {
    
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            resolve(
                console.log("which topping would u love?")
            )
        }, 3000)
    })
}

async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await topping_choice()
    console.log(" D ");
    console.log(" E ");

}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking other orders");