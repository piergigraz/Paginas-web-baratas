const p = document.querySelector('#mobile-menu');
const ul = document.querySelector('.nav-links');


const mobileMenu = () => {
ul.classList.toggle('hide');
p.classList.toggle('rotated');
}

p.addEventListener('click', mobileMenu)