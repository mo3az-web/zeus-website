
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const socialMedia = document.querySelector('.social-media');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    socialMedia.classList.toggle('nav-active');
    
    burger.classList.toggle('toggle');
});

f