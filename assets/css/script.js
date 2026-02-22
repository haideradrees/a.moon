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
  var $wrapper = $slider.closest(".slider-wrapper");

  $slider.owlCarousel({
    loop: true,
    margin: 10,
    stagePadding: 10,
    nav: false,
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

  $wrapper.find(".owl-next-btn").on("click", function () {
    $slider.trigger("next.owl.carousel");
  });

  $wrapper.find(".owl-prev-btn").on("click", function () {
    $slider.trigger("prev.owl.carousel");
  });
});

// owl-carousel-3
$("#owl-slider-3").each(function () {
  var $slider = $(this);
  var $wrapper = $slider.closest(".slider-wrapper");

  $slider.owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 10000,
    slideTransition: "linear",
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1.2,
      },
    },
  });

  $wrapper.find(".owl-next-btn").on("click", function () {
    $slider.trigger("next.owl.carousel");
  });

  $wrapper.find(".owl-prev-btn").on("click", function () {
    $slider.trigger("prev.owl.carousel");
  });
});
// owl-carousel-4
$("#owl-slider-4").each(function () {
  var $slider = $(this);
  var $wrapper = $slider.closest(".slider-wrapper");

  $slider.owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 10000,
    slideTransition: "linear",
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1.2,
      },
    },
  });

  $wrapper.find(".owl-next-btn").on("click", function () {
    $slider.trigger("next.owl.carousel");
  });

  $wrapper.find(".owl-prev-btn").on("click", function () {
    $slider.trigger("prev.owl.carousel");
  });
});
// owl-carousel-5
$("#owl-slider-5").each(function () {
  var $slider = $(this);
  var $wrapper = $slider.closest(".slider-wrapper");

  $slider.owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    stagePadding: 15,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    slideTransition: "linear",
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1.1,
      },
    },
  });

  $wrapper.find(".owl-next-btn").on("click", function () {
    $slider.trigger("next.owl.carousel");
  });

  $wrapper.find(".owl-prev-btn").on("click", function () {
    $slider.trigger("prev.owl.carousel");
  });
});
// owl-carousel-6
$("#owl-slider-6").each(function () {
  var $slider = $(this);
  var $wrapper = $slider.closest(".slider-wrapper");

  $slider.owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    stagePadding: 15,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    slideTransition: "linear",
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1.1,
      },
    },
  });

  $wrapper.find(".owl-next-btn").on("click", function () {
    $slider.trigger("next.owl.carousel");
  });

  $wrapper.find(".owl-prev-btn").on("click", function () {
    $slider.trigger("prev.owl.carousel");
  });
});
// owl-carousel-7
$("#owl-slider-7").each(function () {
  var $slider = $(this);
  var $wrapper = $slider.closest(".slider-wrapper");

  $slider.owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    stagePadding: 30,
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

  $wrapper.find(".owl-next-btn").on("click", function () {
    $slider.trigger("next.owl.carousel");
  });

  $wrapper.find(".owl-prev-btn").on("click", function () {
    $slider.trigger("prev.owl.carousel");
  });
});
// owl-carousel-8
$("#owl-slider-8").each(function () {
  var $slider = $(this);
  var $wrapper = $slider.closest(".slider-wrapper");

  $slider.owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    stagePadding: 30,
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

  $wrapper.find(".owl-next-btn").on("click", function () {
    $slider.trigger("next.owl.carousel");
  });

  $wrapper.find(".owl-prev-btn").on("click", function () {
    $slider.trigger("prev.owl.carousel");
  });
});
