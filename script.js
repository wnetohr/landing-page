const menu = document.querySelector('.menu');
const menuNavi = document.querySelector('.menu-navi');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    menuNavi.classList.toggle('ativo');
})