


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









/* -------------------------------------------------------
** Parallax effect function
**-------------------------------------------------------- 
*/

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    document.getElementById("home_bg").style.transform = `translateY(${value * .24}px)`;

});



/* -------------------------------------------------------
** Moving header function
**-------------------------------------------------------- 
*/

const hdr = document.querySelector('header');
const hero = document.querySelector('.hero');
let triggerHeight;

setTimeout(function(){
    triggerHeight = hero.offsetHeight -300;
}, 300);

window.addEventListener('scroll', function (){

    let loc = window.scrollY;
           

    
    if (loc > triggerHeight -50) {
        hdr.classList.add('offset');
    } else {
        hdr.classList.remove('offset');
    }
    if (loc > triggerHeight + 120) {
        hdr.classList.remove('offset');
        hdr.classList.add('scrolled');
    } else {
        hdr.classList.remove('scrolled');
    }

});


/* -------------------------------------------------------
** darkMode function
**-------------------------------------------------------- 
*/

function darkSwitch(){
    var mode = document.getElementsByTagName("link")[0];

    if(mode.getAttribute("href") == "css/styles.css"){
        mode.setAttribute("href", "css/dark.css");
    }else {
        mode.setAttribute("href", "css/styles.css");
    };
}


/* -------------------------------------------------------
** Skills progress bar animation
**-------------------------------------------------------- 
*/
const skills = document.getElementById("skills");
const skill = document.querySelectorAll(".HardSkills .skill");

if(window.matchMedia('(min-width: 1903px)').matches){
    const options = { 
        rootMargin: "0px 0px -300px"
    };

    const skillsObserver = new IntersectionObserver(
        function(entries, skillsObserver) {
            entries.forEach( entry => {

                if(entry.isIntersecting){
                    skill.forEach(function(div){
                        div.classList.add("animate");
                    }
                    )
                }else{
                    skill.forEach(function(div){
                        div.classList.remove("animate");
                    }
                    )
                }
            });
        }, 
        options
    );
    skillsObserver.observe(skills);
}

if(window.matchMedia('(max-width: 420px)').matches){
    const options = { 
        rootMargin: "0px 0px -200px"
    };

    const skillsObserver = new IntersectionObserver(
        function(entries, skillsObserver) {
            entries.forEach( entry => {


                
                if(entry.isIntersecting){
                    skill.forEach(function(div){
                        div.classList.add("animate");
                    }
                    )
                }else{
                    skill.forEach(function(div){
                        div.classList.remove("animate");
                    }
                    )
                }


            });
        }, 
        options
    );
    skillsObserver.observe(skills);
}


/* Skills progress bar animation end */


/* -------------------------------------------------------
** mobile header toggle function
**-------------------------------------------------------- 
*/


const toggleButton = document.querySelector('.header_menu-toggle');
const headerWrap = document.querySelector('.header_nav-wrap');
const body = document.querySelector("body");

if(window.matchMedia("(max-width: 800px)").matches){
    document.getElementById("position").innerHTML = "bottom";
}


toggleButton.addEventListener('click', function(event){
    event.preventDefault();
    toggleButton.classList.toggle('is-clicked');
    body.classList.toggle('menu-is-open');
});

headerWrap.querySelectorAll('.header_nav a').forEach(function(link){
    link.addEventListener('click', function(evt){

        //800px and bellow
        if (window.matchMedia('(max-width: 800px)').matches){
            toggleButton.classList.toggle('is-clicked');
            body.classList.toggle('menu-is-open');
            
        }
    });
});

window.addEventListener('resize', function(){

    //800px and above
    if(window.matchMedia('(min-width: 801px)').matches) {
        if(body.classList.contains("menu-is-open")) body.classList.remove("menu-is-open");
        if(toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked');
    }
});



/* -------------------------------------------------------
** section tracking function
**-------------------------------------------------------- 
*/


const ScrollSpy = function() {

    const sections = document.querySelectorAll(".target-section");

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlight);

    function navHighlight() {
    
        // Get current scroll position
        let scrollY = window.scrollY;
    
        // Loop through sections to get height(including padding and border), 
        // top and ID values for each
        sections.forEach(function(current) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
        
           /* If a section enters the window it will get its link's parent tag "li" 
            * will get a ClassID of "current". Else if it leaves the screen 
            * the ClassID of "current" will get removed from that link's parent tag*/
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".header_nav a[href*=" + sectionId + "]").parentNode.classList.add("current");
            } else {
                document.querySelector(".header_nav a[href*=" + sectionId + "]").parentNode.classList.remove("current");
            }
        });
    }

};




(function ssInit() {

    
    ScrollSpy();

})();