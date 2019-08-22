// jQuery Smooth scroll
// $('.navbar a').on('click', function(e){
//     if(this.hash !== '') {
//         e.preventDefault();
//         // Hash value into a variable
//         const hash = this.hash;
//         // target body and call animate method
//         //animate method is taking an object with animate property
//         // offset method 
//         //second parameter is speed, which is 800 mlseconds
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top},
//             800
//         );
//     }
// });



// Option 3 to implement smooth scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]');

//Slide for projects

// $(function() {   
//     $('.slide').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 200,
//         prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
//           // next arrow
//           nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
//           centerMode: true,
//           // Side padding when in center mode. (px or %)
//           centerPadding: '50px',
//           // CSS3 easing
//           cssEase: 'ease',
//           // Current slide indicator dots
//           dots: true,
//           // Class for slide indicator dots container
//           dotsClass: 'slick-dots',
//             // Enables desktop dragging
//             draggable: true,
//             // animate() fallback easing
//             easing: 'linear',




//      });
//    });

// Responsive nav
$(function() {
	menu = $('.navbar ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); 
    menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 580 && menu.is(':hidden')) {
      menu.removeAttr('style');
      menu.slideToggle(); 
    }
  });
  
  $('.navbar ul li').on('click', function(e) {                
    var w = $(window).width(); if(w < 580 ) {
      menu.slideToggle(); 
    }
  });

});