// nav menu open/close
$(document).ready(function(){
  $(".menu-button").click(function(event){
    event.preventDefault();
    $("nav").toggleClass("is-active-menu");
  });
});

$(document).on('click',function(e) {
  var container = $(".main-nav");
  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $("nav").removeClass("is-active-menu");
  }
});

// fancybox lightbox
$("[data-fancybox]").fancybox({
  slideShow : false,
  thumbs : false,
  loop : true,
  infobar : true,

});

// slick slider
$(document).ready(function(){
  $('.project__gallery-image').slick({
    adaptiveHeight: false,
    infinite: true,
    arrows: false,
    dots: false,
  });

  $('.project__gallery-thumbs a').click(function(e){
    e.preventDefault();
    slideIndex = $(this).index();
    $('.project__gallery-image').slick('slickGoTo', slideIndex);
  });
});