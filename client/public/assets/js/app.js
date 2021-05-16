(function ($) {
  "use strict";

  var fn = {

    // launch functions
    Launch: function () {
      fn.Header();
      fn.ImageView();
      fn.Masonry();
      fn.Filetree();
      fn.Carousel();
      fn.Apps();
    },


    Header: function () {
      $(document.body).headroom({
        tolerance : 10
      });
    },


    ImageView: function() {
      $('.lightbox').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        }
      });

      $('.gallery').each(function() { // the containers for all your galleries
          $(this).magnificPopup({
              delegate: '.figure > a', // the selector for gallery item
              type: 'image',
              mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
              gallery: {
                enabled:true
              }
          });
      });
      
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
      });
    },


    Masonry: function () {
      var $grid = $('.masonry').masonry({
        itemSelector: '.masonry > *',
      });

      $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
      });
    },


    // File Tree
    Filetree: function() {
      var folder = $('.file-tree li.file-tree-folder'),
          file = $('.file-tree li');

      folder.on("click", function(a) {
          $(this).children('ul').slideToggle(400, function() {
              $(this).parent("li").toggleClass("open")
          }), a.stopPropagation()
      })

      file.on('click', function(b){
        b.stopPropagation();
      })
    },


    // carousel
    Carousel: function() {

      $('.carousel').each(function() {
        var a = this,
            b = JSON.parse(this.getAttribute('data-carousel'));

            b.container = a;
            b.navPosition = "bottom";
            b.speed = 1000;
            b.mouseDrag = true;
            b.autoplayButtonOutput = false;
            b.controlsText = [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
            ];

        var slider = tns(b);
      });

    },


    // apps
    Apps: function () {

      // video
      (function($){
        var player = new Plyr('#player');
      })(jQuery);


      // sticky kit
      (function($){
          var window_width = jQuery( window ).width();

          if (window_width < 768) {
            $(".sticky").trigger("sticky_kit:detach");
          } else {
            make_sticky();
          }


          $( window ).resize(function() {

            window_width = jQuery( window ).width();

            if (window_width < 768) {
              $(".sticky").trigger("sticky_kit:detach");
            } else {
              make_sticky();
            }

          });


          // recalc on collapse
          $('.nav-item .collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
            $(".sticky").trigger("sticky_kit:recalc");
          });

          function make_sticky() {
            $(".sticky").stick_in_parent();
          }


          // inpout group focus
          $(document).ready(function() {
              $(".form-control").focus(function(e){
                  $(this).parent().addClass("form-control-focus");
              }).blur(function(e){
                  $(this).parent().removeClass("form-control-focus");
              });
          });

      })(jQuery);



      // popovers & tooltips
      (function ($) {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
        $('.toast').toast();
      })(jQuery);



      // animate on scroll
      (function ($) {
        AOS.init({
          disable:  function msieversion() {
              return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(
                  /Trident.*rv\:11\./))
          }
        });
      })(jQuery);




      // smooth scroll
      (function ($) {
        var scroll = new SmoothScroll('[data-scroll]');
      })(jQuery);


      // navbar acive
      (function($) {
        $('#navbarSupportedContent').on('show.bs.collapse', function () {
          $('body').addClass('navbar-expanded');
        })
        $('#navbarSupportedContent').on('hide.bs.collapse', function () {
          $('body').removeClass('navbar-expanded');
        })
      })(jQuery);


      // overlay
      (function($) {
        const $toggler = $('.overlay-toggler'),
              $sidebar = $('.overlay'),
              $body = $('body');

        $toggler.on('click', function() {
          $body.toggleClass("overlay-expanded");
        });

        $(document).on("click", function(event){
            if(!$(event.target).closest(".overlay, .overlay-toggler").length){
                $body.removeClass("overlay-expanded");
            }
        });
      })(jQuery);

    }
  };

  $(document).ready(function () {
    fn.Launch();
  });

  window.onload = function () {
    // parallax
    skrollr.init({  
        forceHeight: false,        
        mobileCheck: function() {
            return false;
        }
    });
  };


})(jQuery);