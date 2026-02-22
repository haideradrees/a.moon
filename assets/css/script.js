// AOS
AOS.init();
// AOS

// owl-carousel
$("#owl-slider-one").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 10000,
  slideTransition: "linear",
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
  },
});
// owl-carousel-two
$("#owl-slider-two").each(function () {
  var $slider = $(this);

  // Init carousel
  $slider.owlCarousel({
    loop: true,
    margin: 10,
    stagePadding: 10,
    nav: false, // default arrows off
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    slideTransition: "linear",
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 2.1,
      },
    },
  });

  // Next arrow (sirf isi slider ke liye)
  $slider
    .closest("section, .slider-wrapper, body") // nearest parent
    .find(".owl-next-btn")
    .on("click", function () {
      $slider.trigger("next.owl.carousel");
    });

  // Prev arrow (sirf isi slider ke liye)
  $slider
    .closest("section, .slider-wrapper, body")
    .find(".owl-prev-btn")
    .on("click", function () {
      $slider.trigger("prev.owl.carousel");
    });
});
// owl-carousel-two
