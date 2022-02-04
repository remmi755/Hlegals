var swiperAchievement = new Swiper('.achievement-slider', {
  // Optional parameters
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 40,
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2
      },
      // when window width is >= 680px
      680: {
        slidesPerView: 3
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        
      }
    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
 
});
var swiper = new Swiper(".vert-right", {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesProgress: true,
  direction: "vertical",
  autoplay: {
    delay: 10000,
  },
  thumbs: {
    swiper: swiper2,
  },
  mousewheel: true,
  
});
var swiper2 = new Swiper(".vert-left", {
  spaceBetween: 10,
  slidesPerView: "auto",
  slideToClickedSlide:true,
  direction: "vertical",
  autoplay: {
    delay: 10000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
});
$(".intro-scroll-down").click(function() {
  console.log("click");
$("html, body").animate({
  scrollTop: $("#team").offset().top
}, 300)
})

$(".publications-more").click(function() {
  $(".publications-container").addClass("publications-open");
  $(this).hide();
})

$.ajax({
  url: 'https://api.flaticon.com/v2/items/icons',
  method: 'get',
  
  headers: headers,
  success: function(data) {
  console.log(JSON.stringify(data));
  }
  })