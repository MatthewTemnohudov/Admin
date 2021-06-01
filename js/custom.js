$('.main .settings__icon').on('click', function () {
  $('.main .settings__icon').removeClass("active");
  $(this).addClass("active");
  $('.main .content-wrap').addClass("active");
  $('.main .content .content__item').removeClass('active');
  $('.main .content-wrap .content').removeClass("active");
  $('.main .content .content__button').removeClass("disable");
  

  if ($(this).hasClass('settings__icon_adress')) {
    $('.main .content .content__item.adress').addClass('active');
  } else if ($(this).hasClass('settings__icon_rest-type')) {
    $('.main .content .content__item.rest-type').addClass('active');
  } else if ($(this).hasClass('settings__icon_kashrut')) {
    $('.main .content .content__item.kashrut').addClass('active');
  } else if ($(this).hasClass('settings__icon_work-time')) {
    $('.main .content .content__item.work-time').addClass('active');
  } else if ($(this).hasClass('settings__icon_phone-number')) {
    $('.main .content .content__item.phone-number').addClass('active');
  } else if ($(this).hasClass('settings__icon_story')) {
    $('.main .content .content__item.story').addClass('active');
  } else if ($(this).hasClass('settings__icon_azaot')) {
    $('.main .content .content__item.azaot').addClass('active');
  } else if ($(this).hasClass('settings__icon_photo')) {
    $('.main .content .content__item.photo').addClass('active');
  } else if ($(this).hasClass('settings__icon_menu')) {
    $('.main .content .content__item.menu').addClass('active');
    if ($('.main .content .content__item.menu').hasClass('active')) {
      $('.main .content-wrap .content').addClass("active");
      $('.main .content .content__button').addClass("disable");
    }
  } else if ($(this).hasClass('settings__icon_day-goal')) {
    $('.main .content .content__item.day-goal').addClass('active');
  } else if ($(this).hasClass('settings__icon_statistic')) {
    $('.main .content .content__item.statistic').addClass('active');
    if ($('.main .content .content__item.statistic').hasClass('active')) {
      $('.main .content-wrap .content').addClass("active");
      $('.main .content .content__button').addClass("disable");
    }
  }
});

$('.main .phone-number .phone-number__more-btn').on('click', function () {
  $('.main .phone-number .phone-number__item').toggle(500);
});

//toltip
$(".main .search .button-base").on('click', function(){
  $(".main .search .toltip").slideToggle(500);
});

$(".menu .toltip-show").on('click', function(){
  $(".menu .toltip").toggleClass('active');
});

//Dropdown
$(".dropdown__header").on('click', function(){
  $(this).next('.dropdown__wrap-content').stop().slideToggle(500);
  $(".dropdown__header-img", this).toggleClass("active");
});

//CheckBox
$('#future-order').on('click', function () {
  if ($(this).is(':checked')){
    $('.checkbox-hide').css("display", "flex");
  } else {
    $('.checkbox-hide').css("display", "none");
  }
});

$('#shipping').on('click', function () {
  if ($(this).is(':checked')){
    $('.checkbox-hide_shipping').css("display", "flex");
  } else {
    $('.checkbox-hide_shipping').css("display", "none");
  }
});

$('#credit').on('click', function () {
if ($(this).is(':checked')){
  $('.credit-split').css("display", "flex");
  $('.terms-of-use').css("display", "none");
  if ($('#credit-split-1').is(':checked')){
    $('#form-credit-1').css("display", "block");
  }
}
});

$('#credit-split-1').on('click', function () {
if ($(this).is(':checked')) {
  $('#form-credit-2').css("display", "none");
}
});

$('#credit-split-2').on('click', function () {
if ($(this).is(':checked')) {
  $('#form-credit-2').css("display", "block");
}
});

$('#cash').on('click', function () {
  $('.credit-split').css("display", "none");
  $('#form-credit-1').css("display", "none");
  $('#form-credit-2').css("display", "none");
  $('.terms-of-use').css("display", "block");
});

//popup
$('.popup-bone-edit_btn').on('click', function () {
  $('.popup-bone-edit').toggleClass('active');
});
$('.popup-bone-edit .popup__icon-close').on('click', function () {
  $('.popup-bone-edit').removeClass('active');
});

$('.popup-bone-edit_btn2').on('click', function () {
  $('.popup-bone-edit2').toggleClass('active');
});
$('.popup-bone-edit2 .popup__icon-close').on('click', function () {
  $('.popup-bone-edit2').removeClass('active');
});

$('.coupons .show-popup').on('click', function () {
  $('.popup_coupons').toggleClass('active');
});
$('.coupons .popup__icon-close').on('click', function () {
  $('.popup_coupons').removeClass('active');
});

$('.sidebar-swipe .sign-up').on('click', function () {
  $('.sidebar-swipe .popup_sing-up').toggleClass('active');
});
$('.sidebar-swipe .popup__icon-close').on('click', function () {
  $('.sidebar-swipe .popup_sing-up').removeClass('active');
});

$('.popup_order-show').on('click', function () {
  $('.popup_order').toggleClass('active');
});
$('.popup_order .popup__icon-close').on('click', function () {
  $('.popup_order').removeClass('active');
});

$('.popup_qr-code_show').on('click', function () {
  $('.popup_qr-code').toggleClass('active');
});
$('.popup_qr-code .popup__icon-close').on('click', function () {
  $('.popup_qr-code').removeClass('active');
});

//Swipe
$(function() {
  $("body").swipe( {
    swipeLeft:function() {
      $('.sidebar-swipe').addClass('active');
      $('.sidebar-swipe').fadeIn(500);
    },
    swipeRight:function() {
      $('.sidebar-swipe').fadeOut(500);
    }
  });
});


// $('.work-time__input').styler();