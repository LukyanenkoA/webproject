$(document).ready(function () {
  $(".review-slider").slick({
      infinite: true,
      speed: 300,
      prevArrow: $("#review-prev"),
      nextArrow: $("#review-next"),
      fade: true,
      swipe: false,
      draggable: false,
      slidesToShow: 1,
      adaptiveHeight: true
  });

  $(".review-slider").on(
      "afterChange",
      function (ignore, slick, currentSlide) {
          console.log(slick);
          $("#review-number").text("0" + (currentSlide + 1));
      }
  );
});
    $(document).on('ready', function() {
      $('.rewiews_slider').slick({
        infinite: true,
        adaptiveHeight: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    
      });
    });