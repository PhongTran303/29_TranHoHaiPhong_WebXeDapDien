(function ($) {
  "use strict";

  /*--
        Off Canvas Menu
    -----------------------------------*/
  /*Variables*/
  var $offCanvasNav = $(".offcanvas-menu"),
    $offCanvasNavSubMenu = $offCanvasNav.find(
      ".sub-menu, .mega-menu, .menu-item "
    );

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="mobile-menu-expand"></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on(
    "click",
    "li a, li .mobile-menu-expand, li .menu-title",
    function (e) {
      var $this = $(this);
      if (
        $this
          .parent()
          .attr("class")
          .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
        ($this.attr("href") === "#" || $this.hasClass("mobile-menu-expand"))
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active-expand");
          $this.siblings("ul").slideUp();
        } else {
          $this.parent("li").addClass("active-expand");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.closest("li").siblings("li").removeClass("active-expand");
          $this.siblings("ul").slideDown();
        }
      }
    }
  );

  $(".sub-menu, .mega-menu, .menu-item")
    .parent("li")
    .addClass("menu-item-has-children");

  /*----------------------------
        Main Slider
    ------------------------------ */

  $(".main-slider").owlCarousel({
    autoPlay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    slideSpeed: 1500,
    dots: true,
    nav: false,
    items: 1,
    pagination: false,
  });

  /*----------------------------
        Product Slider
    ------------------------------ */
  /*Product Slider 4 Column*/
  $(".product-slider").owlCarousel({
    autoPlay: false,
    slideSpeed: 2000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-double-left'></i>",
      "<i class='fa fa-angle-double-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
  /*Product Slider 2 Column (Deal Product)*/
  $(".product-slider-2").owlCarousel({
    autoPlay: false,
    slideSpeed: 2000,
    dots: true,
    nav: false,
    items: 2,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
  /*Product Slider 1 Column (Category Small Product)*/
  $(".product-slider-3").owlCarousel({
    items: 1,
    autoPlay: false,
    slideSpeed: 2000,
    dots: false,
    nav: false,
  });
  /*Product Slider 3 Column*/
  $(".product-slider-4").owlCarousel({
    autoPlay: false,
    slideSpeed: 2000,
    dots: false,
    nav: true,
    items: 3,
    navText: [
      "<i class='fa fa-angle-double-left'></i>",
      "<i class='fa fa-angle-double-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  /*Product Slider 1 Column (Category Small Product)*/
  $(".product-slider-5").owlCarousel({
    items: 1,
    autoPlay: false,
    slideSpeed: 2000,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 1,
      },
    },
  });
  /*Single Product Thumbnail Slider*/
  $(".thumb-slider").owlCarousel({
    items: 4,
    autoPlay: false,
    slideSpeed: 2000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    itemsDesktop: false,
    itemsDesktopSmall: [991, 3],
    itemsTablet: [767, 4],
    itemsMobile: false,
  });
  /*Single Product Thumbnail & Image Tab Function*/
  $(".thumb-slider").on("click", "a", function (e) {
    e.preventDefault();
    var $this = $(this),
      $target = $this.attr("href"),
      $image = $(".single-product-image").find($target);
    $image.addClass("active").siblings().removeClass("active");
  });

  /*----------------------------
        Testimonial Slider 
    ------------------------------ */
  $(".testimonial-slider").owlCarousel({
    autoPlay: false,
    slideSpeed: 2000,
    dots: true,
    nav: false,
    singleItem: true,
    items: 1,
  });

  /*----------------------------
        Brand Slider 
    ------------------------------ */
  $(".brand-slider").owlCarousel({
    autoPlay: false,
    slideSpeed: 2000,
    dots: false,
    nav: false,
    items: 6,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  });

  /*----------------------------
        Blog Slider 
    ------------------------------ */
  $(".blog-slider").owlCarousel({
    autoPlay: false,
    slideSpeed: 2000,
    dots: false,
    items: 3,
    nav: true,
    navText: [
      "<i class='fa fa-angle-double-left'></i>",
      "<i class='fa fa-angle-double-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  /*---------------------
        Countdown
    --------------------- */
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'
        )
      );
    });
  });

  /*--
    Back To Top
    -----------------------------------*/
  var toTopBtn = document.getElementById("scrollUp");

  toTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  //hide/show button on scroll up/down
  var scrollPos = 0;

  window.addEventListener("scroll", function () {
    // detects new state and compares it with the new one
    if (document.body.getBoundingClientRect().top > scrollPos) {
      toTopBtn.style.display = "none";
    } else {
      toTopBtn.style.display = "block";
    }
    // saves the new position for iteration.
    scrollPos = document.body.getBoundingClientRect().top;
  });

  /*----------------------------
        Price Range
    ------------------------------ */
  $("#price-range").slider({
    range: true,
    min: 40,
    max: 60000,
    values: [1000.0, 50000.0],
    slide: function (event, ui) {
      $(".price-amount").text("đ" + ui.values[0] + " - đ" + ui.values[1]);
    },
  });
  $(".price-amount").text(
    "đ" +
      $("#price-range").slider("values", 0) +
      " - đ" +
      $("#price-range").slider("values", 1)
  );

  /*--------------------------------
        Custom Toggle Function
    ---------------------------------*/
  $(".toggle-btn").on("click", function (e) {
    e.preventDefault();
    var $this = $(this),
      $target = $this.data("target");
    $($target).slideToggle();
  });

  /* ---------------------------------
        payment-accordion
    * ---------------------------------*/
  $(".payment-accordion").collapse({
    accordion: true,
    open: function () {
      this.slideDown(550);
    },
    close: function () {
      this.slideUp(550);
    },
  });

  /*---------------------
        Venobox
    --------------------- */
  $(".venobox").venobox();

  /*----------------------------
        Input Plus Minus Button
    ------------------------------ */
  $(".qtybtn").on("click", function () {
    var $btn = $(this),
      $oldValue = $btn.parent().find("input").val();
    if ($btn.text() == "+") {
      var $newVal = parseFloat($oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if ($oldValue > 1) {
        var $newVal = parseFloat($oldValue) - 1;
      } else {
        $newVal = 1;
      }
    }
    $btn.parent().find("input").val($newVal);
  });

  /*----------------------------
        Ajax Contact Form
    ------------------------------ */
  $(function () {
    // Get the form.
    var form = $("#contact-form");
    // Get the messages div.
    var formMessages = $(".form-message");
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();
      // Serialize the form data.
      var formData = $(form).serialize();
      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData,
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          formMessages.removeClass("error");
          formMessages.addClass("success");
          // Set the message text.
          formMessages.text(response);
          // Clear the form.
          $(
            '#contact-form input:not([type="submit"]), #contact-form textarea'
          ).val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          formMessages.removeClass("success");
          formMessages.addClass("error");
          // Set the message text.
          if (data.responseText !== "") {
            formMessages.text(data.responseText);
          } else {
            formMessages.text(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    });
  });
})(jQuery);
