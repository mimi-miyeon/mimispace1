(function ($) {
  $(function () {

    var $family = $('.family'),
      $site = $family.find('.f-site'),

      $header = $('header'),
      $gnb = $header.find('.gnb-wrap'),
      $tnb = $header.find('.tnb'),
      $open = $header.find('.fa-bars'),
      $close = $header.find('.fa-times-circle'),

      $main = $('main'),
      $select1 = $main.find('.select1'),
      $select2 = $main.find('.select2'),
      $option = $main.find('.opt');

    $family.on('click', function () {
      $site.stop().slideToggle();
    }); //family

    $open.on('click', function () {
      $gnb.stop().addClass('on');
      $tnb.stop().addClass('on');
      $open.hide();
      $close.show();
    }); //open-function

    $close.on('click', function () {
      $gnb.stop().removeClass('on');
      $tnb.stop().removeClass('on');
      $open.show();
      $close.hide();
    }); //close-function

    $select2.on('click', function () {
      $(this).find($option).stop().slideToggle();
      $select1.find($option).stop().hide();
    }); //opt-function

    $select1.on('click', function () {
      $(this).find($option).stop().slideToggle();
      $select2.find($option).stop().hide();
    }); //opt-function

  }); //function
})(jQuery);
