// === SHOW MENU ===
const showMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    // validate elements exist
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// === Hide Nav Menu on Nav Menu link click ===
const hideMenu = () => {
    const links = document.querySelectorAll('.nav__link');
    const navMenu = document.getElementById('nav-menu');

    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        })    
    });
}

hideMenu();

/*==================== ADD SHADOW TO HEADER WHEN SCROLLED ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '50px',
    reset: true,
    interval: 200,
    duration: 1500
})

sr.reveal(`.home__data, .home__img,
     .economy__data, .installation__content,
     .appointment__content, .footer__content`, {
         duration: 1500,
         origin: 'top',
         scale: 0.85,
     }
);

sr.reveal(`.installation__img`, {
    distance: 0,
    opacity: 0,
    reset: false
});

sr.reveal(`.economy__img, .appointment__img`, {
    scale: 0.5,
    origin: 'bottom',
    delay: 200
});

sr.reveal(`.appointment__content`, { 
    distance: '200px',
    origin: 'left'
});
sr.reveal(`.appointment__img`, { 
    origin: 'right',
    opacity: 0.3,
    distance: '50px',
    scale: 1
});