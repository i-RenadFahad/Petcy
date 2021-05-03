$('.fa-angle-up').click(function() {
    var overlay = $('#overlay');
    var featured = $('#featured');
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      overlay.fadeOut(300);
      featured.animate({
        'height': '0px'
      }, 300);
    } else {
      $(this).addClass('active');
      overlay.fadeIn(300);
      featured.animate({
        'height': '360px'
      }, 300);
    }
  });