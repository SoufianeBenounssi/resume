


/* *---*unneeded code but not to delete*---*
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

/*
function darkSwitch(){
    let hdrColor = document.querySelector("header") 
    document.getElementById("home_bg").classList.toggle("hero_bg-dark")
    hdrColor.classList.toggle("header_dark")
    document.getElementById("darkMode").classList.toggle("lightMode")
};
*/



/* *split the code here* */

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    document.getElementById("home_bg").style.transform = `translateY(${value * .24}px)`;

});





const hdr = document.querySelector('header');
const hero = document.querySelector('.hero');
let triggerHeight;

setTimeout(function(){
    triggerHeight = hero.offsetHeight -500;
}, 300);

window.addEventListener('scroll', function (){

    let loc = window.scrollY;
           

    if (loc > triggerHeight) {
        hdr.classList.add('offset');
    } else {
        hdr.classList.remove('offset');
    }
    if (loc > triggerHeight + 490) {
        hdr.classList.remove('offset');
        hdr.classList.add('scrolled');
    } else {
        hdr.classList.remove('scrolled');
    }

});


function darkSwitch(){
    var mode = document.getElementsByTagName("link")[0];

    if(mode.getAttribute("href") == "css/styles.css"){
        mode.setAttribute("href", "css/dark.css");
    }else {
        mode.setAttribute("href", "css/styles.css");
    };
}

/* Skills progress bar animation */
const skills = document.getElementById("skills");
const Java = document.querySelector(".Java");
const JS = document.querySelector(".JS");
const Py = document.querySelector(".Py");
const Kotlin = document.querySelector(".Kotlin");
const HTML = document.querySelector(".HTML");
const CSSanim = document.querySelector(".CSS");
const MSOffice = document.querySelector(".MSOffice");
const AndroidStudio = document.querySelector(".Android-Studio");


const options = {};

const skillsObserver = new IntersectionObserver(
    function(entries, skillsObserver) {
        entries.forEach( entry => {
            if(entry.isIntersecting){
                Java.classList.add("animate");
                JS.classList.add("animate");
                Py.classList.add("animate");
                Kotlin.classList.add("animate");
                HTML.classList.add("animate");
                CSSanim.classList.add("animate");
                MSOffice.classList.add("animate");
                AndroidStudio.classList.add("animate");
            }else{
                Java.classList.remove("animate");
                JS.classList.remove("animate");
                Py.classList.remove("animate");
                Kotlin.classList.remove("animate");
                HTML.classList.remove("animate");
                CSSanim.classList.remove("animate");
                MSOffice.classList.remove("animate");
                AndroidStudio.classList.remove("animate");
            }
        });
    }, 
    options
);
skillsObserver.observe(skills);
/* Skills progress bar animation end */