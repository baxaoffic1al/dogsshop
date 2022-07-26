let burger = document.querySelector('.navbar-button');
let burgerMenu = document.querySelector('.navbar__list');
let menu = document.querySelector('.menu');
let menu_img = document.querySelector('.navbar-button img');
let menu_x = document.querySelector('.menu_x');

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
})
menu_x.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
})

let cards = document.querySelector('.cards'),
    card = document.querySelectorAll('.card'),
    cardss = document.querySelector('.cardss');

window.addEventListener('scroll', () => {
    if (window.scrollY > cards.offsetTop - cards.clientHeight) {
        for (let i = 0; i < card.length; i++) {
            const el = card[i];
            el.style = `animation: a 1.5s linear 0s 1;   opacity: 1;`
        }
    }
    // if (window.scrollY > cardss.offsetTop - 1000) {
    //     cardss.style = `animation: card2 1.5s linear 0s 1;`
    // }
})

let a = document.querySelector(':root'),
    color = document.querySelector('.color'),
    header = document.querySelector('header'),
    navbar = document.querySelector('.navbar__list'),
    logoBtn = document.querySelector('.logo_img'),
    logoBtn2 = document.querySelector('.logo_img2');
intro_center = document.querySelector('.intro_center');


color.addEventListener('click', () => {
    color.classList.toggle('green')
    if (color.classList.contains('green')) {
        header.style = `background:green;`
        navbar.style = `background:green;`
        a.style.setProperty('--yellow', 'green')
        logoBtn.setAttribute('src', './images/logo_green.png')
        logoBtn2.setAttribute('src', './images/logo2_green.png')
        intro_center.style = `background: rgba(12, 121, 55, 0.5);`
    } else {
        header.style = `background:var(--yellow);`
        navbar.style = `background:var(--yellow);`
        a.style.setProperty('--yellow', '#F4CB38')
        logoBtn.setAttribute('src', './images/logo.png')
        logoBtn2.setAttribute('src', './images/logo2.png')
        intro_center.style = `background: rgba(166, 121, 55, 0.5);`
    }
})

const heart_icons = document.querySelectorAll('.h')

for (let i = 0; i < heart_icons.length; i++) {
    const heart_icon = heart_icons[i];
    heart_icon.addEventListener('click', function on() {
        heart_icon.classList.add('fa-solid')
        heart_icon.classList.remove('fal')
    })
    heart_icon.addEventListener('dblclick', () => {
        heart_icon.classList.add('fal')
        heart_icon.classList.remove('fa-solid')
    })
}
const never = document.querySelector('.never')
never.addEventListener('click', () => {
    location.reload()
})

let modalWindow = document.querySelector('.intro_center');
let modalClose = modalWindow.querySelector('.x');
let modal = modalWindow.querySelector('.subs');
logoBtn.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    setTimeout(() => {
        modalWindow.classList.add('active')
        modal.classList.add('active')
    }, 500);
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('active')
    setTimeout(() => {
        modalWindow.style.display = 'none'
    }, 200);
})