function setupSlider() {
  $(document).ready(function(){
  $('.slider-main').slick({
    speed: 600,
    slidesToShow: 1,
    swipeToSlide: true,
    fade: true,
    mobileFirst: true,
    adaptiveHeight: true,
    arrows: true
  });
});$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-main',
  centerMode: true,
  focusOnSelect: true,
  mobileFirst: true,
  arrows: false
})};
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

