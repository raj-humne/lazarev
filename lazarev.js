function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
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
function page3VideoAnim(){
    let page3Center = document.querySelector(".page3-center")
let video = document.querySelector(".page3 video")
page3Center.addEventListener("click", ()=>{
    video.play()
    gsap.to(video, {
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0
    })
})
video.addEventListener("click", ()=>{
    video.pause()
})
video.addEventListener("dblclick", ()=>{
    video.pause()
     gsap.to(video, {
        transform:"scaleX(.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px"
    })
})
}

let sections = document.querySelectorAll(".sec-right")
sections.forEach((elem)=>{
    elem.addEventListener("mouseenter", ()=>{

        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
     elem.addEventListener("mouseleave", ()=>{

        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})
var upArr = document.querySelectorAll(".arrow")
upArr.forEach(arrow=>{
arrow.addEventListener("click", ()=>{
arrow.children[1].classList.toggle("active")
})
})
function page8Animations(){

gsap.from(".btm8-p2 h4", {
    x:0,
    duration:1,
    scrollTrigger:{
        trigger: ".btm8-p2",
        scroller:"main",
        // markers: true,
        start:"top 80%",
        end: "top 10%",
        scrub:true
    }
})
}
locomotiveAnimation()
page8Animations()
page3VideoAnim()

// navAnimation()
page2Anim()
