$(function() {
    $(window).scroll(function() {
      $(".worship").each(function() {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 500) {
          $(this).addClass("blockIn");
        }
      });
    });
  });