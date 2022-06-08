$('.hot-bid-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: $('#hot-bid-slick-prev'),
  nextArrow: $('#hot-bid-slick-next'),
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
});
