
$(document).ready(function () {
  $(".sidebar__burger-wrapper").click(function () {
    $(".sidebar__name").toggleClass("active");
    $(".content__sidebar").toggleClass("active");
    $(".sidebar__link").toggleClass("active");
    $(".sidebar__burger").toggleClass("burger__active");
  });
});
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
