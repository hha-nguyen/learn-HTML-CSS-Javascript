let squareWorker = new Worker("./squareWorker.js"); 
squareWorker.addEventListener("message", event => { 
    console.log("The worker responded:", event.data);
}); 
squareWorker.postMessage(101); 
squareWorker.postMessage(24);


