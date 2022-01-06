let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}

let is_shop_oppen = true;

let order = (time, work) => {

    return new Promise((resolve, reject) => {
        
        if (is_shop_oppen) {

            setTimeout(() => {
                resolve( work() );
            }, time);
        }

        else {
            reject(console.log("our shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

.then(() => {
    
    return order(0, () => console.log("produciton has started"));
})

.then(() => {
    
    return order(2000, () => console.log("the food was chopped")); 
})  

.then(() => {
    
    return order(1000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`)); 
}) 

.then(() => {
    
    return order(1000, () => console.log(`start the machine`)); 
})  

.then(() => {
    
    return order(2000, () => console.log(`ice-cream was placed on ${stocks.Holder[0]}`)); 
})  

.then(() => {
    
    return order(3000, () => console.log(`${stocks.Toppings[0]} was selected`)); 
}) 

.then(() => {
    
    return order(2000, () => console.log(`ice-cream was searve`)); 
}) 

//Error handling
.catch(() => {
    console.log("customer left");
})

.finally(() => {
    console.log("day ended, our shop is closed");
})