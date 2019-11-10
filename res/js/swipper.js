var swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: false, 
    zoom: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
    cssMode: true,
  });