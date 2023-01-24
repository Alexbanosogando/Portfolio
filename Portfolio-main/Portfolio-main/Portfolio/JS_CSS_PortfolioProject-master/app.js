(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


/*----- ANIMACION -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});


// IMG
gsap.from('.img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMACION
gsap.from('.right-header', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.name', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

//NAV ITEM
gsap.from('.controls', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

//SOCIAL
gsap.from('.contact-content-con', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})
