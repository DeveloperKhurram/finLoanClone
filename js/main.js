AOS.init({
  duration: 2500,
  once: true,
});

const dropdowns = document.querySelectorAll(".nav-item.dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  let hideDropdownTimeout;

  dropdown.addEventListener("mouseenter", function () {
    clearTimeout(hideDropdownTimeout);
    dropdownMenu.style.display = "block";
    dropdownMenu.style.opacity = "1";
    dropdownMenu.style.visibility = "visible";
    dropdownMenu.style.transform = "translateY(20px)";
  });

  dropdown.addEventListener("mouseleave", function () {
    hideDropdownTimeout = setTimeout(function () {
      dropdownMenu.style.display = "none";
      dropdownMenu.style.opacity = "0";
      dropdownMenu.style.visibility = "hidden";
      dropdownMenu.style.transform = "translateY(40px)";
    }, 200);
  });
});

$(document).ready(function () {
  $("select").niceSelect();

  var brand = $(".brand_carousel");
  if (brand.length) {
    brand.owlCarousel({
      loop: true,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 2,
          nav: false,
        },
        767: {
          items: 4,
        },
        992: {
          items: 5,
        },
      },
    });
  }

  if ($.fn.slicknav) {
    $("#menu").slicknav({
      label: "",
      duration: 800,
    });
  } else {
    console.error("SlickNav is not initialized");
  }
});
