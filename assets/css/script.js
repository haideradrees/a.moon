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

// SECTION COLLAPSE ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn-view-more");
  const content = document.querySelector(".hide");
  const contentSection = document.querySelector(".content-section");

  let isOpen = false;

  btn.addEventListener("click", function () {
    if (!isOpen) {
      // OPEN
      content.style.height = content.scrollHeight + "px";
      btn.textContent = "CLOSE";

      // show atukikun
      contentSection.classList.add("show-atukikun");
    } else {
      // CLOSE
      content.style.height = content.scrollHeight + "px";
      requestAnimationFrame(() => {
        content.style.height = "0px";
      });

      btn.textContent = "VIEW MORE";

      // hide atukikun
      contentSection.classList.remove("show-atukikun");
    }

    isOpen = !isOpen;
  });

  content.addEventListener("transitionend", () => {
    if (isOpen) {
      content.style.height = "auto";
    }
  });
});

// TOP BAR HIDE ANIMATION
// document.addEventListener("DOMContentLoaded", function () {
//   const topBar = document.querySelector(".top-bar");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 20) {
//       topBar.classList.add("hide");
//     } else {
//       topBar.classList.remove("hide");
//     }
//   });
// });


  // Set target date: March 11, 23:59 (local time)
  const targetDate = new Date(
    new Date().getFullYear(),
    2,   // March (0 = Jan, 1 = Feb, 2 = March)
    11,
    23,
    59,
    0
  ).getTime();

  const countdownItems = document.querySelectorAll(".count-down p");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      countdownItems[0].childNodes[0].nodeValue = "00";
      countdownItems[2].childNodes[0].nodeValue = "00";
      countdownItems[4].childNodes[0].nodeValue = "00";
      countdownItems[6].childNodes[0].nodeValue = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdownItems[0].childNodes[0].nodeValue = String(days).padStart(2, "0");
    countdownItems[2].childNodes[0].nodeValue = String(hours).padStart(2, "0");
    countdownItems[4].childNodes[0].nodeValue = String(minutes).padStart(2, "0");
    countdownItems[6].childNodes[0].nodeValue = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
