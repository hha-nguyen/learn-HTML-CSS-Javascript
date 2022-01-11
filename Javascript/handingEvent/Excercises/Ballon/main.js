let Balloon = document.getElementById("balloon");
let size;

function setSize(newSize) {
    size = newSize;
    Balloon.style.fontSize = size + "px";
}

setSize(20);

function Arrow(event) {
    if (event.key == "ArrowUp") {
        if (size > 70) {
            Balloon.textContent = "💥";
            document.body.removeEventListener("keydown", Arrow);
        } else {
            setSize(size*1.1);
            let topDis = 200 - size;
            Balloon.style.top = topDis + "px";
            console.log(topDis);
            console.log(Balloon.style.top);
            event.preventDefault();
        }
    } else if (event.key == "ArrowDown") {
        setSize(size*0.9);
        let topDis = 200 + size;
        Balloon.style.top = topDis + "px";
        event.preventDefault();
    }
}

document.body.addEventListener("keydown", Arrow);