// Transaction option
function transaction() {

    gsap.to(".transaction-word", {
        opacity: 1,
        pointerEvents : "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale : 1
    })


    gsap.to(".transactions", {
        delay : 0.2,
        opacity: 1,
        pointerEvents : "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale : 1
    })

    gsap.to(".upper-page", {
        duration: 0.7,
        filter: "blur(50px)",
    })
}
// Transaction option

// Selection Category
function selectionCategory(){
    gsap.to(".selection-category", {
        duration: 0.7,
        y: "-82vh",
        ease: Power2.easeOut
    })

    gsap.to(".red-color", {
        duration: 0.7,
        opacity: 1,
        pointerEvents : "all",
        zIndex : 1
    })
}
// Selection Category


// Form
// Income Form

function incomeForm(){
    gsap.to(".income-form", {
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".green-color", {
        duration: 0.7,
        opacity: 1,
        pointerEvents : "all",
        zIndex : 1
    })

    gsap.to(".income-element", {
        delay : 0.3,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })
}

// Income Form

// Necessity Form

function necessityForm(){
    gsap.to(".necessity-expense-form", {
        delay : 0.2,
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".selection-category", {
        duration: 0.5,
        scale : 0.95,
    })

    gsap.to(".necessity-element", {
        delay : 0.3,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })

}

function wantsForm(){
    gsap.to(".wants-expense-form", {
        delay : 0.2,
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".selection-category", {
        duration: 0.5,
        scale : 0.95,
    })

    gsap.to(".want-element", {
        delay : 0.3,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })
    
}

function othersForm(){
    gsap.to(".others-expense-form", {
        delay : 0.2,
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".selection-category", {
        duration: 0.5,
        scale : 0.95,
    })

    gsap.to(".other-element", {
        delay : 0.3,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })

}

// Income Form


// Form