gsap.from("body",{
    scale : 0.95,
    duration: 0.3,
    opacity : 0,
})

//Personal Form

function personalDetailForm() {
    gsap.to(".personal-detail-form", {
        duration: 0.7,
        y: "-45vh",
        ease: Power2.easeOut
    })

    gsap.to(".bigger-personal-details", {
        delay: 0.1,
        duration: 1.4,
        y: "-80vh",
        ease: "back.out(0.7)"
    })

    gsap.to(".upper-page", {
        duration: 0.7,
        filter: "blur(50px)",
        pointerEvents: "none"
    })
}
////////////////////////////////////////////////
function closePersonalDetailForm() {
    gsap.to(".personal-detail-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".bigger-personal-details", {
        duration: 0.8,
        y: "0vh",
        ease: Power2.easeIn
    })
    
    gsap.to(".upper-page", {
        delay : 0.8,
        duration: 0.4,
        filter: "blur(0px)",
        pointerEvents: "all"
    })
}

// Personal Form

//Card Form

function cardDetailForm() {
    gsap.to(".card-detail-form", {
        duration: 0.7,
        y: "-45vh",
        ease: Power2.easeOut
    })

    gsap.to(".bigger-card-details", {
        delay: 0.1,
        duration: 1.4,
        y: "-80vh",
        ease: "back.out(0.7)"
    })

    gsap.to(".upper-page", {
        duration: 0.7,
        filter: "blur(50px)",
        pointerEvents: "none"
    })
}
////////////////////////////////////////////////
function closeCardDetailForm() {
    gsap.to(".card-detail-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".bigger-card-details", {
        duration: 0.8,
        y: "0vh",
        ease: Power2.easeIn
    })
    
    gsap.to(".upper-page", {
        delay : 0.8,
        duration: 0.4,
        filter: "blur(0px)",
        pointerEvents: "all"
    })
}

// Card Form
