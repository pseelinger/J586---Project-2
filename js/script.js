function setupSlider() {
  $(document).ready(function(){
  $('.slider-main').slick({
    speed: 600,
    slidesToShow: 1,
    fade: true,
    mobileFirst: true,
    adaptiveHeight: true,
    arrows: false,
    dots: true
  });
});};
function addQuiz(){
  var quiz = jQuery('#quiz').quiz('13OM8GsrccKhhbpNU_9wskCYqVDhkrrClrIOadVMihcY');
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

