// === подключение библиотек === //
let viewport = $(document).width();
// === главная страница === //
// открывание мобильного меню
$('.header__mobile-btn').click(function () {
  $('.header__navigation').slideToggle();
  if (viewport < 768) {
    $('.header__user').fadeToggle();
    $('.header__languages').fadeToggle().css('display', 'flex');
  }
});
// появление фильтра
$('.filters__detail').click(function() {
  $(this).css('display', 'none');
  $('.filters__form-middle-wrapper').fadeToggle().css('display', 'flex');
  $('.filters__form-bottom-wrapper').fadeToggle().css('display', 'flex');
});
//  попап регистрации
$('.header__user-link--registration').click(function() {
  $('.registration').fadeIn();
});

$('.filters__detail-back').click(function() {
  $('.filters__detail').fadeIn();
  $('.filters__form-middle-wrapper').fadeToggle();
  $('.filters__form-bottom-wrapper').fadeToggle();
});

$('.header__user-link--enter').click(function() {
  $('.login').fadeIn();
  $('.login__registration-btn').click(function() {
    $(this).parent().fadeOut(100);
    $('.registration').fadeIn(500);
  })
});

$('.popup__btn').click(function() {
  $(this).parent().fadeOut();
});

$(document).keydown(function(evt) {
  console.log($(evt.keyCode))
  if ($(evt.keyCode)[0] == 27) {
    if ($('.popup')) {
      $('.popup').fadeOut();
    }
  }
});
