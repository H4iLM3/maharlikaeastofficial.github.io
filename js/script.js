//scroll toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');   
            });
            };
    });
    //sticky navbar
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
    
    //remove toggle icon and navbar link scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};

//scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container2, .lowlights-container, .highlights-container, .about-img, .services-box, .mahabout', { origin: 'bottom' });


// SOON TO BE A STATIC TEXT
                     
const typed = new Typed('.multiple-text', {
    strings: ['ACTIVE AND PRO MEMBERS!'],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// BUTTON POPUP LOGIN SECTOPN XD

// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

// registerLink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', ()=> {
//     wrapper.classList.remove('active');
// });

// btnPopup.addEventListener('click', ()=> {
//     wrapper.classList.add('active-popup');
// });

// iconClose.addEventListener('click', ()=> {
//     wrapper.classList.remove('active-popup');
// });