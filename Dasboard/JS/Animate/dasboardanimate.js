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

// Trends Pop up

function trendOpen() {

    gsap.to("#trend-page", {
        duration: 0.4,
        opacity: 1  ,
        pointerEvents: "all"
    })

    gsap.to(".links", {
        ease: "back.out(1.7)",
        duration: 0.8,
        scale : 1,
        opacity: 1,
        stagger : 0.05
    })


}

function trendClose() {

    gsap.to("#trend-page", {
        duration: 0.4,
        opacity: 0 ,
        pointerEvents: "none"
    })

    gsap.to(".links", {
        duration: 0.8,
        scale : 0.80,
        opacity: 0,
    })
}


// Trends Pop up

function analyticsOpen() {

    gsap.to("#analytics-page", {
        duration: 0.4,
        opacity: 1  ,
        pointerEvents: "all"
    })

    gsap.to(".links1", {
        ease: "back.out(1.7)",
        duration: 0.8,
        scale : 1,
        opacity: 1,
        stagger : 0.05
    })
}

function analyticsClose() {

    gsap.to("#analytics-page", {
        duration: 0.4,
        opacity: 0 ,
        pointerEvents: "none"
    })

    gsap.to(".links1", {
        duration: 0.8,
        scale : 0.80,
        opacity: 0,
    })
}


// Trends Pop up

