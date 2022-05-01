const header = document.querySelector("header");
const hero = document.querySelector(".hero_bg");

const sticky = {
    rootMargin: "-760px 0px 0px 0px"
};

const stickyObserver = new IntersectionObserver(function(entries, stickyObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
}, sticky);

stickyObserver.observe(hero);
/*
*/
const offset = {
    rootMargin: "-500px 0px 0px 0px"
};

const offsetObserver = new IntersectionObserver(function(entries, offsetObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.add("offset");
        } else {
            header.classList.remove("offset");
        }
    });
}, offset);

offsetObserver.observe(hero);


/*
*/
const scrolled = {
    rootMargin: "-5px 0px 0px 0px"
};

const scrolledObserver = new IntersectionObserver(function(entries, scrolledObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.remove("offset");
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}, scrolled);

scrolledObserver.observe(hero);




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



