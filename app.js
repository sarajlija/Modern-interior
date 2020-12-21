//JAVASCRIPT
const menu = document.getElementById("menu-open"),
    navMobile = document.getElementById("nav-mobile"),
    section = document.getElementById("section"),
    footer = document.getElementById("footer"),
    menuClose = document.getElementById("menu-close");

menu.addEventListener('click', () => {
    
    navMobile.style.display = 'flex';
    footer.style.display = 'none';
    section.style.display = 'none'
});

menuClose.addEventListener('click', () => {
    navMobile.style.display = 'none';
    section.style.display = 'flex';
    footer.style.display = 'block';
});