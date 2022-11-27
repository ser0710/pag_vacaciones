const images = document.querySelector(".imagenes")
const imagesCollection = document.querySelectorAll(".imagen")
let index = 0

let interval = setInterval(startInterval, 2000)

function startInterval() {
    index++
    moveCarousel()
}

function moveCarousel() {
    if (index > imagesCollection.length -1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length -1
    }

    if(images !== null){
        images.style.transform = `translateX(-${index * 650}px)`
    }
    
}

function show(){    
    if(index === 0){
        window.location.href="home1.html";
        
    }
}



