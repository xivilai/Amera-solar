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

/*=== Current visible section indicator === */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

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
// const sr = ScrollReveal({
//     distance: '30px',
//     duration: 1800,
//     reset: true,
// });

// sr.reveal(`.home__data, .home__img, 
//            .decoration__data,
//            .accessory__content,
//            .footer__content`, {
//     origin: 'top',
//     interval: 200,
// })

// sr.reveal(`.share__img, .send__content`, {
//     origin: 'left'
// })

// sr.reveal(`.share__data, .send__img`, {
//     origin: 'right'
// })