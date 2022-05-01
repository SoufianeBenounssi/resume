const header = document.querySelector('header');
const hero = document.querySelector('.hero');

const heroOptions = {};

const heroObserver = new IntersectionObserver(function(entries, heroObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

}, heroOptions);

heroObserver.observe(hero);
