import "./index.scss";

window.addEventListener('scroll', function() {
  const nav = document.querySelector('.header__navigation');
  const navHeight = nav.offsetHeight;
  const pageHeight = window.scrollY;
  if (pageHeight > navHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
});