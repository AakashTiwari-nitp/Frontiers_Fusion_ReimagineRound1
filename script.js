document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  // Hide preloader and show content after 2 seconds
  setTimeout(function () {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 2000); // Adjust the timeout (in milliseconds) as needed
});
//first page
function navAnimation() {
  var menu = document.querySelector("#nleft #menu");

  menu.addEventListener("mousedown", function (e) {
    console.log("menu");
    gsap.to("#menuhover", {
      x: 300,
      opacity: 1,
      duration: 0.5,
    });
  });
  menu.addEventListener("mouseleave", function (e) {
    console.log("menu");
    gsap.to("#menuhover", {
      x: -300,
      opacity: 0,
      duration: 2,
      delay: 0.1,
    });
  });
}
navAnimation();

(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery

// This is a function to add locomaotive JS for Scrolling
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotive();

// This is a function to add animation in accessories
function animateAccessories() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers: true,
      start: "top 90%",
      end: "top -85%",
      scrub: 1,
    },
  });
  tl.from(
    ".line1.left",
    {
      opacity: 0,
      x: -250,
      duration: 0.5,
    },
    "#page2 .line1"
  );
  tl.from(
    ".line1.right",
    {
      opacity: 0,
      x: 250,
      duration: 0.5,
    },
    "#page2 .line1"
  );
  tl.from(
    ".line2.left",
    {
      opacity: 0,
      x: -250,
      duration: 0.5,
    },
    "#page2 .line2"
  );
  tl.from(
    ".line2.right",
    {
      opacity: 0,
      x: 250,
      duration: 0.5,
    },
    "#page2 .line2"
  );
  tl.from(
    ".line3.left",
    {
      opacity: 0,
      x: -250,
      duration: 0.5,
    },
    "#page2 .line3"
  );
  tl.from(
    ".line3.right",
    {
      opacity: 0,
      x: 250,
      duration: 0.5,
    },
    "#page2 .line3"
  );
  tl.from(
    ".line4.left",
    {
      opacity: 0,
      x: -250,
      duration: 0.5,
    },
    "#page2 .line4"
  );
  tl.from(
    ".line4.right",
    {
      opacity: 0,
      x: 250,
      duration: 0.5,
    },
    "#page2 .line4"
  );
}
animateAccessories();

////////////////////////////////
// DELL TECHNOLOGY SHOWCASE///
////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll('input[name="slider-control"]');
  const indicators = document.querySelectorAll(".js-slider-indi");
  let currentIndex = 0;
  const slideInterval = 4000;

  // Function to go to a specific slide
  function goToSlide(index) {
    controls[index].checked = true;
    currentIndex = index;
  }

  // Function to go to the next slide
  function nextSlide() {
    let newIndex = currentIndex + 1;
    if (newIndex >= controls.length) {
      newIndex = 0;
    }
    goToSlide(newIndex);
  }

  // Set up automatic slide cycling
  let autoSlide = setInterval(nextSlide, slideInterval);

  // Pause auto sliding when mouse is over the slider
  document
    .querySelector(".js-slider")
    .addEventListener("mouseenter", function () {
      clearInterval(autoSlide);
    });

  // Resume auto sliding when mouse leaves the slider
  document
    .querySelector(".js-slider")
    .addEventListener("mouseleave", function () {
      autoSlide = setInterval(nextSlide, slideInterval);
    });

  // Add keyboard navigation
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = controls.length - 1;
      }
      goToSlide(newIndex);
    }
  });
});

// Video Animation
function videoAnimation() {
  document
    .querySelector("#page4 #ftext button")
    .addEventListener("mouseover", function (e) {
      gsap.to("#page4 #future video", {
        opacity: 1,
        duration: 1,
        ease: Power4,
      });
      gsap.to("#page4 #future #ftext h1", {
        opacity: 0,
        // display: "none",
        duration: 0.2,
        ease: Power4,
      });
      gsap.to("#page4 #future #ftext", {
        backgroundColor: "transparent",
        duration: 0.2,
        // ease: Power4,
      });
    });

  document
    .querySelector("#page4 #ftext button")
    .addEventListener("mouseleave", function (e) {
      gsap.to("#page4 #future video", {
        opacity: 0,
        duration: 1,
        ease: Power4,
      });
      gsap.to("#page4 #future #ftext h1", {
        opacity: 1,
        duration: 0.2,
        ease: Power4,
      });
      gsap.to("#page4 #future #ftext", {
        backgroundColor: "#fff",
        duration: 0.2,
        // ease: Power4,
      });
    });
}

videoAnimation();

function footerAnimation() {
  gsap.from("footer .footer-section h3", {
    x: -100,
    opacity: 0,
    delay: 0.6,
    scrollTrigger: {
      scroller: "#main",
      trigger: "footer .footer-section",
      duration: 1,
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });

  gsap.from("footer .footer-section ul li", {
    y: 100,
    opacity: 0,
    delay: 2.6,
    scrollTrigger: {
      scroller: "#main",
      trigger: "footer .footer-section h3",
      duration: 2,
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
    stagger: 0.2,
  });
}
footerAnimation();

// Hero page image slider
function heroSliderAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    const slides = [
      "./content/alienware.png",
      "./content/support.png",
      "./content/dellOffer.png",
    ];
    const overH1text = [
      "Gaming Dominance <br> with Alienware",
      "Our 24X7 <br> Helpdesk",
      "Unbeatable Dell Prices",
    ];
    let currentSlide = 0;
    const heroImg = document.getElementById("hero-img");
    const leftArrow = document.getElementById("l");
    const rightArrow = document.getElementById("r");
    const slideNumber = document.querySelector("#over1 h2");
    const overH1 = document.querySelector("#over1 h1");
    function updateSlide() {
      heroImg.style.backgroundImage = `url(${slides[currentSlide]})`;
      slideNumber.textContent = `0${currentSlide + 1}`;
      overH1.innerHTML = `${overH1text[currentSlide]}`;
    }

    leftArrow.addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide();
    });

    rightArrow.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    });
    // Automatic slide change every 5 seconds
    setInterval(function () {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    }, 5000);
    updateSlide();
  });
}
heroSliderAnimation();
