let counter = document.querySelector(".counter")
let count = 0
let menu_bg = document.querySelector(".menu_bg")

function constr(){
count++
counter.innerHTML = count 
if(count == counter.dataset.number ){
    clearInterval(stop)
}else {
}
}
 
let stop = setInterval(function (){
    constr()
},counter.dataset.speed)



window.addEventListener("scroll",()=>{
    let scrolling = this.window.scrollY
    if(scrolling>50){
        menu_bg.classList.add("lsd")
    }else{
        menu_bg.classList.remove("lsd")
    }
})

let type =document.querySelector(".type")
let typetext= type.innerHTML ;
let typearr= typetext.split("")
type.innerHTML= ""
let typing = "0";

function typejs (){
if(typing < typetext.length){
    type.innerHTML += typetext.charAt(typing)
    typing++
    typearr= typetext.split("")
}else{
    typearr.pop()
    type.innerHTML=typearr.join("")
    if(typearr.length == 1){
        typing="1"
    }
}
}
setInterval(()=>{
    typejs() 
},300)




let bttop =document.querySelector(".bttop")
bttop.addEventListener("click",function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
window.addEventListener("scroll",()=>{
    if(document.body.scrollTop >20 || ocument.documentElement.scrollTop >20){
        bttop.style.display = "block"
    }else{
        bttop.style.display = "none"
    }

})