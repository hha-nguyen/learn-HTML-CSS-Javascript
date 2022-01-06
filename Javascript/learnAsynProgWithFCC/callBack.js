//Call back: calling function in another function

// function one (call_two) {
//     console.log(" step 1 complete. please call step 2");
//     call_two();
// }
// function two () {
//     console.log(" step 2 ");
// }

// one(two);

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}

let order = (Fruit_name, call_production) => {

    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);

        call_production();
    }, 2000);
};

let production = () => {

    setTimeout(() => {
        console.log("order receive, starting production"); 

        setTimeout(() => {
            console.log("the food has been chopped");

            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} are added`);

                setTimeout(() => {
                    console.log("the machine was started");

                    setTimeout(() => {
                        console.log(`ice cream was placed on ${stocks.Holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.Toppings[0]} was added as topping`);

                            setTimeout(() => {
                                console.log("serve ice-cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
};

order(0, production);