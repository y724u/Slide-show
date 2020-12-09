var swiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
});

// // <!-- モーダル -->
$(function() {
  $('.js-modalOpen').on('click',function(){
    $('.slide__modal').addClass('show_modal');
  });
  $('.js-modalClose').on('click',function(){
    $('.slide__modal').removeClass('show_modal');
  });
});

