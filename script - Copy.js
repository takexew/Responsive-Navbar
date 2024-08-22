var menu = document.querySelector("#menu")
var close = document.querySelector("#close")

var tl = gsap.timeline()
tl.to(".menusidebar",{
    right:0,
    duration:0.8,
})
tl.from(".menusidebar h4",{
    x:150,
    stagger:0.3,
    opacity:0,
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})
