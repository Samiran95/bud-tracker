// Transaction option
function transaction() {
    gsap.to(".transactions", {
        opacity: 1,
        pointerEvents : "all",
        duration: 0.8,
        ease: Back.easeOut.config(3.5),
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
        y: "-79vh",
        zIndex : 1,
    })
}
// Selection Category


// Form
// Income Form

function incomeForm(){
    gsap.to(".income-form", {
        duration: 0.7,
        y: "-75vh",
        zIndex : 1,
    })
}

// Income Form

// Necessity Form

function necessityForm(){
    gsap.to(".necessity-expense-form", {
        duration: 0.7,
        y: "-75vh",
    })

    gsap.to(".selection-category", {
        duration: 0.7,
        scale : 0.95,
        zIndex : 1,
    })
}

function wantsForm(){
    gsap.to(".wants-expense-form", {
        duration: 0.7,
        y: "-75vh",
    })

    gsap.to(".selection-category", {
        duration: 0.7,
        scale : 0.95,
        zIndex : 1,
    })
}

function othersForm(){
    gsap.to(".others-expense-form", {
        duration: 0.7,
        y: "-75vh",
    })

    gsap.to(".selection-category", {
        duration: 0.7,
        scale : 0.95,
        zIndex : 1,
    })
}

// Income Form


// Form