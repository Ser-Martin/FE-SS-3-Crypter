$('.top-5-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: $('#top-5-laptop-slider-prev'),
  nextArrow: $('#top-5-laptop-slider-next'),
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        prevArrow: $('#top-5-tab-mob-slider-prev'),
        nextArrow: $('#top-5-tab-mob-slider-next'),
      },
    },
  ],
});
