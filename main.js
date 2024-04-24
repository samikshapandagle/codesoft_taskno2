let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top > offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
    }
  });

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
});

ScrollReveal({ 
    distance: '800px',
    duration:2000,
    delay:200,

});

ScrollReveal().reveal('.home-content',{origin:'top'});
ScrollReveal().reveal('.home-img, .skill-container, .myproject-box, .contact-form' , {origin: 'buttom'});
ScrollReveal().reveal('home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('home-content p. .about-content',{origin: 'right'})


