//
// ANIMATED BACKGROUND FADE ANIMATION
//

const colorBackground = document.getElementById('colorBackground');
const homeTitle = document.getElementById('homeTitle');
let y = window.scrollY;
let homeTitleFade = () => homeTitle.style.opacity = 'calc(1 - ' + y/300 + ')';
homeTitleFade()

window.onscroll = () => {
    y = window.scrollY;
    colorBackground.style.opacity = 'calc(0 + ' + y/1600 + ')';
    homeTitleFade()
}

//
// SCROLL-INTO-VIEW ANIMATIONS 
//
const viewportWidth = window.innerWidth

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target.classList.contains('animate') && !entry.target.classList.contains('animated')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animating');
                entry.target.classList.add('animated');
            }
            else return;
        } else return;
    });
});

const elementsToAnimate = document.querySelectorAll('.animate');
elementsToAnimate.forEach((el) => observer.observe(el));