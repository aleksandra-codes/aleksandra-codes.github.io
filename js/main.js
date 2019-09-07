//jQuery Smooth scroll
$('.nav a').on('click', function(e){
    if(this.hash !== '') {
        e.preventDefault();
        // Hash value into a variable
        const hash = this.hash;
        // target body and call animate method
        //animate method is taking an object with animate property
        // offset method 
        //second parameter is speed, which is 800 mlseconds
        $('html, body').animate({
            scrollTop: $(hash).offset().top},
            800
        );
    }
});

//jQuery Smooth scroll from "view my work button"
$('.welcome a').on('click', function(e){
    if(this.hash !== '') {
        e.preventDefault();
        // Hash value into a variable
        const hash = this.hash;
        // target body and call animate method
        //animate method is taking an object with animate property
        // offset method 
        //second parameter is speed, which is 800 mlseconds
        $('html, body').animate({
            scrollTop: $(hash).offset().top},
            800
        );
    }
});

// Option 3 to implement smooth scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]');


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

    }
  });
  
  $('.navbar ul li').on('click', function(e) {                
    var w = $(window).width(); if(w < 580 ) {
      menu.slideToggle(); 
    }
  });

});

