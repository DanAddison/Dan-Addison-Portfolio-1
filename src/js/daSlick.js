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
    $imageThumb = $(this);
    slideIndex = $imageThumb.index();
    $imageThumbContainer = $imageThumb.parent();
    $sliderContainer = $imageThumbContainer.prev( '.project__gallery-image' );

    $sliderContainer.slick('slickGoTo', slideIndex);

    // $galleryImage = $this.parent().prev( '.project__gallery-image' ).slick('slickGoTo', slideIndex);
    // $('.project__gallery-image').slick('slickGoTo', slideIndex);
  });
});