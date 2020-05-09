$(document).ready(function() {
  $(".header__burger").click(function(event) {
    $(".header__burger,.header__menu").toggleClass("active");
  });

  $(".slider__body").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    infinite: true,
    variableWidth: true,
    variableHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
        breakpoint: 382,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true
        }
      }
    ]
  });

  $(".tabs__slider").slick({
    slidesToShow: 3,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".news__slider__body").slick({
    slidesToShow: 1,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          centerMode: true
        }
      }
    ]
  });

  $(".tabs__item").on("click", function() {
    var tabName = $(this).data("tab");
    tab = $('.tabs__slider[data-tab="' + tabName + '"]');

    $(".tabs__slider.active__tab").removeClass("active__tab");

    tab.addClass("active__tab");
  });

});
