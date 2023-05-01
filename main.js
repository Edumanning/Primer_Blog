const iconMenuHTML = document.querySelector(".iconMenu");
const menuHTML = document.querySelector(".menu");
const iconTheme = document.querySelector(".iconTheme");
const contentNavbarHTML = document.querySelector(".content__navbar");
const navbarHTML = document.querySelector(".navbar")

iconMenuHTML.addEventListener('click', function(){
    menuHTML.classList.toggle("menu__show");
})

iconTheme.addEventListener('click', function() {
    document.body.classList.toggle("darkmode");
})

function animationScroll(){
    let y = window.scrollY;

    if(y > 200){
        contentNavbarHTML.classList.add(".content__navbar--scroll");
        navbarHTML.classList.add(".navbar--scroll");                
    } else{
        contentNavbarHTML.classList.remove(".content__navbar--scroll");
        navbarHTML.classList.remove(".navbar--scroll");                        
    }
}

window.onscroll = () => animationScroll();