

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    document.getElementById("home_bg").style.transform = `translateY(${value * .24}px)`;
});

function dark(){
    let hdrColor = document.getElementById("nav_wrap") 
    document.getElementById("home_bg").classList.toggle("hero_bg-dark")
    hdrColor.classList.toggle("header_dark-nav")
    document.getElementById("darkMode").classList.toggle("lightMode")
};


