const menu = document.querySelector('.menu');
const menuNavi = document.querySelector('.menu-navi');
const btnHome = document.querySelector('.btnHome');
const btnProject = document.querySelector('.btnProject');
const btnContact = document.querySelector('.btnContact');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    menuNavi.classList.toggle('ativo');
});
btnHome.addEventListener('click', () => {
    menu.classList.remove('ativo');
    menuNavi.classList.remove('ativo');
});
btnProject.addEventListener('click', () => {
    menu.classList.remove('ativo');
    menuNavi.classList.remove('ativo');
});
btnContact.addEventListener('click', () => {
    menu.classList.remove('ativo');
    menuNavi.classList.remove('ativo');
});