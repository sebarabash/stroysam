
// ////////////////////// slider //////////////////////////////
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
  });
});
/////////////////// brands_slider ////////////////////////////
$(document).ready(function () {
  $(".brands__slider").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 5000,
  });
});
