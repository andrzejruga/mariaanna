// nav menu items underline

const navLink = document.querySelectorAll('.nav__link');

const addUnderline = (e) => {
    e.target.classList.add('nav__link--underline');
}

const removeUnderline = (e) => {
    e.target.classList.remove('nav__link--underline');
}

navLink.forEach(item => item.addEventListener('mouseover', addUnderline));
navLink.forEach(item => item.addEventListener('mouseout', removeUnderline));


// nav menu toggle for mobile devices

const navList = document.querySelector('.nav__list');
const navToggle = document.querySelector('.nav__toggle');
const navHamburger = document.querySelector('.nav__hamburger');

const toggleClass = () => {
    navList.classList.toggle('nav__list--is-open');
    navHamburger.classList.toggle('nav__hamburger--is-open');
}

navToggle.addEventListener('click', toggleClass);


// nav sticky

const navBar = document.querySelector('.nav');
const navTop = navBar.offsetTop;

const fixNav = () => {
    if (window.scrollY >= navTop) {
        navBar.classList.add('nav--fixed');
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
    } else {
        navBar.classList.remove('nav--fixed');
        document.body.style.paddingTop = 0;
    };
}

window.addEventListener('scroll', fixNav);


// slider - click a dot to change slide

const dotsNumber = 3;
const slider = document.querySelector('.slider');
const dots = slider.querySelectorAll('.slider__dot');
const indicator = slider.querySelector('.slider__indicator');
let counter = 0;

const changeDot = (e) => {
    const newPosition = parseInt(e.target.getAttribute('data-pos'));
    slider.setAttribute('data-pos', newPosition);
    resetInterval();
    counter = newPosition;
};

dots.forEach(dot => {
    dot.addEventListener('click', changeDot);
});


// slider - change slides automatically

const changeSlide = () => {
    counter++;
    if (counter >= dotsNumber) {
        counter = 0;
    }
    slider.setAttribute('data-pos', counter);
}

let slideInterval;

const startInterval = () => {
    slideInterval = setInterval(changeSlide, 5000);
}
startInterval();

const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
}
