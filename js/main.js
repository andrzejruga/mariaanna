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