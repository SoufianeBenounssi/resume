const header = document.querySelector("header");
const hero = document.querySelector(".hero_bg");

const heroOptions = {};

const heroObserver = new IntersectionObserver(function(entries, heroObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

}, heroOptions);

heroObserver.observe(hero);


window.addEventListener('scroll', function(){
    var value = window.scrollY;

    document.getElementById("home_bg").style.transform = `translateY(${value * .24}px)`;
});

function dark(){
    let hdrColor = document.querySelector("header") 
    document.getElementById("home_bg").classList.toggle("hero_bg-dark")
    hdrColor.classList.toggle("header_dark")
    document.getElementById("darkMode").classList.toggle("lightMode")
};



