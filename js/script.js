function setupSlider() {
  $(document).ready(function(){
  $('.slider-main').slick({
    speed: 600,
    slidesToShow: 1,
    fade: true,
    mobileFirst: true,
    adaptiveHeight: true,
    arrows: false
  });
});$('.slider-nav').slick({
  slidesToShow: 4,
  asNavFor: '.slider-main',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 3,
        centerMode:true,
        centerPadding: '20px',
        focusOnSelect: true,
      }
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
      }
    }
  ]
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

