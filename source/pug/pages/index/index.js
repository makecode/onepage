import './../../../styles/main.sass';

const isMobile = 768;

$( document ).ready(function() {
  const topOffset = 500;
  const pageWidth = window.innerWidth;

  // get elements by jQuery
  const $header = $('#header');
  const $hamburger = $('#hamburger');

  //hamburger-menu
  $($hamburger).on('click',function() {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('is-open')
  });

  if ($header.length && pageWidth > isMobile) {
    // on scroll page callback
    const onScroll = (event) => {
      if (window.pageYOffset >= topOffset) {
        $header.addClass('withButton');
      } else {
        $header.removeClass('withButton');
      }
    };

    // run all what we need
    window.addEventListener('scroll', onScroll);
  }
});
