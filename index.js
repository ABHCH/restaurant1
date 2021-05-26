let menu = document.querySelector('.menu')
let list = document.querySelector('ul')

const open = () =>{
    if(list.style.width == "200px"){
        list.style.width = "0px";
    }else{
        list.style.width = "200px";
    }
    
}

menu.addEventListener("click",open)


// for scrolling

window.addEventListener("scroll", function(){
    let myNav = document.querySelector('nav');
    myNav.classList.toggle("sticky", window.scrollY > 200);
})