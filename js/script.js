// <!-- モーダル -->
$(function () {
  let scrollPosition;
  $('.js-modalOpen').on('click', function () {
    const $this = $(this);
    const $index = $this.index();
    $('.js-modal').addClass('show_modal');
    showImage($index);
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition1 });
    return false;
  });
  $('.js-modalClose').on('click', function () {
    $('.js-modal').removeClass('show_modal');
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition);
  });
});

// <!-- swiper -->
function showImage($index) {
  const swiper = new Swiper('.swiper-container', {
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


