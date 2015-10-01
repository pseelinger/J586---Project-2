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
      $('.q-site').qtip({
    content: $('<iframe src="http://iwsf.com" />'),
    hide: {
      delay: 500,
      fixed: true
    }
});
       $('.q-site-two').qtip({
    content: $('<iframe src="https://en.m.wikipedia.org/wiki/Cable_skiing" />'),
    hide: {
      delay: 500,
      fixed: true
    }
});
       $('.q-site-three').qtip({
    content: $('<iframe src="https://en.m.wikipedia.org/wiki/Compression_molding" />'),
    hide: {
      delay: 500,
      fixed: true
    },
    position:{
      my: 'top right',
      at: 'bottom right'
    }
});
})
}
$(document).ready(function(){
  addScroll();
});

