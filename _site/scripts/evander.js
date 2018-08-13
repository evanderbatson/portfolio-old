console.log("Hello, nice to meet you. I'm Evander. Want to work together? Email me at evanderbatson@gmail.com");

$("img").error(function () { 
    $(this).hide();
    $(this).css({visibility:"hidden"}); 
});

//smooth scroll

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});