import "./index.scss";

const nav = document.querySelector('.header__navigation');

if (window.screen.width >= 992) {
  window.addEventListener('scroll', function() {
    const navHeight = nav.offsetHeight;
    const pageHeight = window.scrollY;
    const headerTitle = document.querySelector('.header__container');
    
    if (pageHeight > navHeight) {
      nav.classList.add('fixed');  
      headerTitle.style.marginTop = navHeight + 'px';
    } else {
      nav.classList.remove('fixed');
      headerTitle.style.marginTop = '0px';
    }
  });
}

const button = document.querySelector('.hamburger__button');
const navVisible = 'header__navigation--visible';

button.addEventListener('click', event => { 
  nav.classList.toggle(navVisible);
  stopScroll();
});

function stopScroll() {
  if (nav.classList.contains(navVisible)) {
    document.documentElement.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
  }
}

const links = document.querySelectorAll('.navigation__list__item');
const linksArray = [...links];

for (let i = 0; i < linksArray.length; i++) {
  linksArray[i].addEventListener("click", function() {
    document.documentElement.classList.remove("no-scroll");
    nav.classList.remove(navVisible);
  });
}


