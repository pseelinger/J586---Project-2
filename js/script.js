 function addScroll(){
  jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
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
 
   function addQuiz(){
  var quiz = jQuery('#quiz').quiz('13OM8GsrccKhhbpNU_9wskCYqVDhkrrClrIOadVMihcY');
  addScroll();
}

$(document).ready(function() {
    $('#fullpage').fullpage({
      slidesNavigation: true,
      navigation: true
      });
    addQuiz();
});

