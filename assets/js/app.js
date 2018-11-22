(function($) {

  $('.dashboard__column--left').css({
    'width': '325px',
    'max-width': '325px'
  });

  $('.dashboard__column--right').css({
    'width': '330px',
    'max-width': '330px'
  });

  $(".dahsboard__main").css({ width: ($(window).width() - 655) + 'px' });

  console.log($(".dashboard__column--left"));

})(jQuery)
