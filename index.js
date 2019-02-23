import "./index.scss";

const nav = document.querySelector('.header__navigation');

  window.addEventListener('scroll', () => {
    const navHeight = nav.offsetHeight;
    const pageHeight = window.scrollY;

    if (window.screen.width >= 992 && (pageHeight > navHeight)) {
      nav.classList.add('fixed');  
    } else {
      nav.classList.remove('fixed');
    }
});

const button = document.querySelector('.hamburger__button');
const navVisible = 'header__navigation--visible';

const stopScroll = () => {
  if (nav.classList.contains(navVisible)) {
    document.documentElement.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
  }
}

button.addEventListener('click', () => { 
  nav.classList.toggle(navVisible);
  stopScroll();
});

const links = document.querySelectorAll('.navigation__list__item');
const linksArray = [...links];

for (let i = 0; i < linksArray.length; i++) {
  linksArray[i].addEventListener("click", function() {
    document.documentElement.classList.remove("no-scroll");
    nav.classList.remove(navVisible);
  });
}


