const p = document.querySelector('#mobile-icon');
const ul = document.querySelector('#menu-mobile');


const mobileMenu = () => {
ul.classList.toggle('hide');
p.classList.toggle('rotated');
}

p.addEventListener('click', mobileMenu)