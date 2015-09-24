function setupSlider() {
  $(document).ready(function(){
  $('.slider').slick({
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    arrows: true,
  });
});
$(document).ready(function(){
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    centerMode:true,
    focusOnSelect: true
  });
});
}
function addQuiz(){
  var quiz = jQuery('#quiz').quiz('0Arenb9rAosmbdG5GWHFXbWJlN1hTR2ZmN3lZMVZkOHc');
  setupSlider();
}
function addScroll(){
  jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
    addQuiz();
});
}
$(document).ready(function(){
  addScroll();
});
