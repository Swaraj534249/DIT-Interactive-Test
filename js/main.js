const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (){
  links.classList.toggle('show-links');
});

$(window).on('load', function (){
  $('.loader').fadeOut(1000);
  $('.content').fadeIn(1000);
  
});


$(document).ready(function (){

  $('.carousel').owlCarousel({
    margin: 0,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      800: {
        items: 2,
        nav: false,
      },
      
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  $('.carousel-2').owlCarousel({
    margin: 0,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
        nav: false,
      },
      550: {
        items: 4,
        nav: false,
      },
      1000: {
        items: 6,
        nav: false,
      },
    },
  });
  $('.carousel-3').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      950: {
        items: 2,
        nav: false,
      },
    },
  });
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

});






