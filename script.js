let crsr = document.querySelector(".cursor")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})
let crsr_blur = document.querySelector(".cursor_blur")

document.addEventListener("mousemove", function(dets){
    crsr_blur.style.left = dets.x-200+"px";
    crsr_blur.style.top = dets.y-200+"px";
})

let h4all=document.querySelectorAll(".nav h4")
    h4all.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            crsr.style.scale = 3;
            crsr.style.border = "1px solid #fff";
            crsr.style.backgroundColor = "transparent";
            // e.style.Color = "#95c11e";
        })
        e.addEventListener("mouseleave",function(){
            // e.style.color="#95c11e";
            crsr.style.scale = 1;
            crsr.style.border = "0px solid #95c11e";
            crsr.style.backgroundColor = "#95c11e";
        })
    })

gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    delay:1,
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
});

gsap.from(".about-us img, .about-us-in" ,{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 48%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:-70,
    x:-60,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})

