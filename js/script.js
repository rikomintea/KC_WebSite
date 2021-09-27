$(function() {
    $(window).scroll(function() {
      $(".worship h5").each(function() {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 500) {
          $(this).addClass("blockIn");
        }
      });
    });
  });