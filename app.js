let slider = document.querySelector(".slider");
let before = document.querySelector(".img-container-before");
let after = document.querySelector(".img-containr-after");
let container = document.querySelector(".container");


const dragyoass = function(event){

    let xPos = event.layerX;
    let size = container.offsetWidth;
    before.style.width = xPos + "px";
    slider.style.left = xPos + "px";

    if (xPos < 50) {
        before.style.width = 0;
        slider.style.left = 0;
    }

    if (xPos + 50 > size) {

        before.style.width = size + 'px';
        slider.style.left = size + 'px';
        
    }
}

container.addEventListener("mousemove", dragyoass);