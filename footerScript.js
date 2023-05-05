

//Scroll nav bar collaps

$(document).ready(function() {
  var scrollTop = 0;
  $(window).scroll(function() {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $('nav').addClass('scrolled');
    } else if (scrollTop < 100) {
      $('nav').removeClass('scrolled');
    } 
  });
});

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('open');
  navbarCollapse.classList.toggle('open');
});