const hamburger = document.querySelector(
  '.header .nav-bar .nav-list .hamburger'
);
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items = document.querySelectorAll(
  '.header .nav-bar .nav-list ul li a'
);
const header = document.querySelector('.header.container');

const headerLinks = document.querySelectorAll('.nav-link');

const brand = document.querySelector('.main h1');

const hambars = document.querySelectorAll('#header .hamburger .bar');
const hambafter = document.querySelector('#header.hamburger.bar::after');
const hambefore = document.querySelector('#header .hamburger .bar::before');
const hambur = document.querySelector('#header .hamburger');
const hamburafter = document.querySelector('#header .hamburger:after');

console.log(hamburafter);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
    headerLinks.forEach((link) => {
      link.style.color = '#fff';
    });
    brand.style.color = '#fff';

    hambars.forEach((bar) => {
      bar.style.backgroundColor = '#fff';
    });

    hambur.style.border = '3px solid #fff';
    hamburafter.style.border = '3px solid #fff';
    hambafter.style.backgroundColor = '#fff';
    hambefore.style.backgroundColor = '#fff';
  } else {
    header.style.backgroundColor = 'transparent';
    headerLinks.forEach((link) => {
      link.style.color = 'rgb(128, 128, 128)';
    });
    brand.style.color = 'rgb(128, 128, 128)';

    hambars.forEach((bar) => {
      bar.style.backgroundColor = 'rgb(128, 128, 128)';
    });

    hambur.style.border = '3px solid rgb(128, 128, 128)';
    hambafter.style.backgroundColor = 'rgb(128, 128, 128)';
    hambefore.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

menu_items.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
