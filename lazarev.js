function navAnimation(){
    var nav = document.querySelector("nav")
nav.addEventListener("mouseenter", ()=>{
    let tl = gsap.timeline()
    tl.to("#nav-bottom", {
        height: "24vh"
    })
    tl.to(".nav-pt2 h5", {
        display: "block",
    })
    tl.to(".nav-pt2 h5 span", {
        y: 0,
        stagger:{
            amount: 0.6
        }
        
    })
})
nav.addEventListener("mouseleave", ()=>{
    let tl = gsap.timeline()
    tl.to(".nav-pt2 h5 span", {
        y: 25,
        stagger:{
            amount: 0.2
        }
        
    })
    tl.to(".nav-pt2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom", {
        height: 0,
        duration: 0.2
    })
    
    
})
}

function page2Anim(){
    let rightElem = document.querySelectorAll(".right-elem")
rightElem.forEach((elem)=>{
elem.addEventListener("mouseenter", ()=>{
    gsap.to( elem.childNodes[3], {
        opacity: 1,
        scale: 1
    })
})
elem.addEventListener("mouseleave", ()=>{
     gsap.to( elem.childNodes[3], {
        opacity: 0,
        scale: 0
    })
})
elem.addEventListener("mousemove", (dets)=>{
    gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x-50,
        y: dets.y - elem.getBoundingClientRect().y-150
    })
})
})
}
// navAnimation()
// page2Anim()