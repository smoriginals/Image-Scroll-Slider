const slideImages = document.querySelectorAll(".slide-img");

function SlideCheck() {
    slideImages.forEach(slides => {
        const slideAt = (window.scrollY + window.innerHeight) - slides.height / 2;
        const bottomImg = slides.offsetTop + slides.height;
        const halfScroll = slideAt > slides.offsetTop;
        const scrollNone = window.scrollY < bottomImg;

        if (halfScroll && scrollNone) {
            if (slides.classList.contains('right-side')) {
                slides.classList.add("right-side-anim");
            } else if (slides.classList.contains('left-side')) {
                slides.classList.add("left-side-anim");
            } else if (slides.classList.contains('mid-side')) {
                slides.classList.add("mid-side-anim");
            }
        } else {
            slides.classList.remove("right-side-anim", "left-side-anim", "mid-side-anim");
        }
    });
}

window.addEventListener("scroll", SlideCheck);


/*const slideImages = document.querySelectorAll(".slide-img");
const rImg = document.querySelector(".right-side");
const lImg = document.querySelector(".left-side");
const mImg = document.querySelector(".mid-side");

function SlideCheck(e) {
    slideImages.forEach(slides => {
        const slideAt = (window.scrollY + window.innerHeight) - slides.height / 2;
        const bottomImg = slides.offsetTop + slides.height;
        const halfScroll = slideAt > slides.offsetTop;
        const scrollNone = window.scrollY < bottomImg;

        if (halfScroll && scrollNone) {
            rImg.classList.add("right-side-anim");
            lImg.classList.add("left-side-anim");
            mImg.classList.add("mid-side-anim");
        } else {
            rImg.classList.remove("right-side-anim");
            lImg.classList.remove("left-side-anim");
            mImg.classList.remove("mid-side-anim");
        }
    });
}

window.addEventListener("scroll", SlideCheck);*/