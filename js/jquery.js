$(document).ready(function(){
    $('.slider').slider({full_width: true, indicators: false, height: 700});
    $('.parallax').parallax();
    $('nav').pushpin({ top: $('nav').offset().top });
});
