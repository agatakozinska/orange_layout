import "./index.scss";

window.addEventListener('scroll', function() {
  const nav = document.querySelector('.header__navigation');
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