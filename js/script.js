// <!-- モーダル -->
$(function () {
  $('.js-modalOpen').on('click', function () {
    const $index = $(this).index();
    $('.slide__modal').addClass('show_modal');
    showImage($index);
  });
  $('.js-modalClose').on('click', function () {
    $('.slide__modal').removeClass('show_modal');
  });
});

// <!-- swiper -->
function showImage($index) {
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
    initialSlide: $index,
  });
}


