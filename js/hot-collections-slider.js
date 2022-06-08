$('.collect-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: true,
  arrows: false,
  prevArrow: $('#hot-bid-slick-prev'),
  nextArrow: $('#hot-bid-slick-next'),
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#collect-tab-prev'),
        nextArrow: $('#collect-tab-next'),
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: $('#collect-mob-prev'),
        nextArrow: $('#collect-mob-next'),
      },
    },
  ],
});
