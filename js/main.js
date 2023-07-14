const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.header-top__menu')

btn.addEventListener('click', function() {
    menu.classList.toggle('header-top__menu--active')
})