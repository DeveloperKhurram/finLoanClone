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

  $(".owl-carousel").owlCarousel();

  if ($.fn.slicknav) {
    $('#menu').slicknav({
       label: '',
       duration: 800,
    });
 } else {
    console.error('SlickNav is not initialized');
 }
});
