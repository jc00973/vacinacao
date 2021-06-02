(function ($) {
  "use strict";

  $(function () {
    if ($('#slider1').length) {
      jQuery("#slider1").revolution({
        sliderType: "auto",
        sliderLayout: "fullscreen",
        autoHeight: 'on',
        delay: 7000,
        navigation: {
          arrows: {
            enable: true
          }
        },
        gridwidth: 1170
      });
    }

    // Elements position
    function itemPosition() {

      if ($(window).width() >= '992') {
        $('#mad_item_first').detach().insertAfter('#mad_item_second');
        $('#mad_item_first2').detach().insertAfter('#mad_item_second2');
      } else {
        $('#mad_item_second').detach().insertAfter('#mad_item_first');
        $('#mad_item_second2').detach().insertAfter('#mad_item_first2');
      }
    }

    $(window).load(itemPosition);
    $(window).resize(itemPosition);

    // ie9 placeholder
    if ($('html').hasClass('ie9')) {
      $('input[placeholder]').each(function () {
        $(this).val($(this).attr('placeholder'));
        var v = $(this).val();

        $(this).on('focus', function () {
          if ($(this).val() === v) {
            $(this).val("");
          }
        }).on("blur", function () {
          if ($(this).val() == "") {
            $(this).val(v);
          }
        });
      });
    }

    // popup
    $('.share_popup').on('click', function () {
      $('#share_popup_holder').fadeIn("slow");
    });

    $(document).mouseup(function (e) {
      var container = $("#share_popup_holder");
      if (container.has(e.target).length === 0) {
        container.fadeOut("slow");
      }
    });

    // Gallery carousel
    $.mad_global.mad_init_carousel();

    // tabs
    var tabs = $('.tabs-section');
    if (tabs.length) {
      tabs.tabs({
        beforeActivate: function (event, ui) {
          var hash = ui.newTab.children("li a").attr("href");
        },
        hide: {
          effect: "fadeOut",
          duration: 450
        },
        show: {
          effect: "fadeIn",
          duration: 450
        },
        updateHash: false
      });
    }

    if ($('ul.smooth_tabs').length) {
      $('ul.smooth_tabs li:first').addClass('ui-tabs-active');

      $('ul.smooth_tabs li a').on('click', function () {
        $('ul.smooth_tabs').find('li').removeClass('ui-tabs-active');
        $(this).parent('li').addClass("ui-tabs-active");

        var x = $(this).attr('href');
        $(".smooth_item").removeClass('current_catalog_item');
        $(".tabs_content ").children('h3').removeClass('current_catalog_item');
        $(x).addClass('current_catalog_item');
      });
    }

    // newsletter
    var subscribe = $('[id^="newsletter"]');
    subscribe.append('<div class="message_container_subscribe"></div>');
    var message = $('.message_container_subscribe'),
      text;

    subscribe.on('submit', function (e) {
      var self = $(this);

      if (self.find('input[type="email"]').val() == '') {
        text = "Please enter your e-mail!";
        message.html('<div class="alert_box warning"><p>' + text + '</p></div>')
          .slideDown()
          .delay(4000)
          .slideUp(function () {
            $(this).html("");
          });

      } else {
        self.find('span.error').hide();
        $.ajax({
          type: "POST",
          url: "bat/newsletter.php",
          data: self.serialize(),
          success: function (data) {
            if (data == '1') {
              text = "Your email has been sent successfully!";
              message.html('<div class="alert_box success"><p>' + text + '</p></div>')
                .slideDown()
                .delay(4000)
                .slideUp(function () {
                  $(this).html("");
                })
                .prevAll('input[type="email"]').val("");
            } else {
              text = "Invalid email address!";
              message.html('<div class="alert_box error"></i><p>' + text + '</p></div>')
                .slideDown()
                .delay(4000)
                .slideUp(function () {
                  $(this).html("");
                });
            }
          }
        });
      }
      e.preventDefault();
    });

    // open dropdown
    $('#sort_button').css3Animate($('#sort_button').next('.sort_list'));

    // load more
    $("#load_more").on('click', function () {
      $(".load_more_block").slideToggle("slow");
      $(this).toggleClass("active");
      return false;
    });

    // Loader
    $("body").queryLoader2({
      backgroundColor: '#fff',
      barColor: '#df092f',
      barHeight: 4,
      deepSearch: true,
      minimumTime: 1000,
      onComplete: function () {
        $(".loader").fadeOut('200');
      }
    });

    // Price Scale
    var slider;
    if ($('#price').length) {
      slider = $('#price').slider({
        orientation: "horizontal",
        range: true,
        values: [0, 250],
        min: 0,
        max: 250,
        slide: function (event, ui) {
          $(this).next().find('.first_limit').val('$' + ui.values[0]);
          $(this).next().find('.last_limit').val('$' + ui.values[1]);
        }
      });
    }

    // Appointment
    if ($('#helpdeskform').length) {

      $('.app_next').on("click", function () {
        $('.app_selected').removeClass('app_selected').hide().next().show().addClass('app_selected');
        $('#progressbar li.app_active').next().addClass('app_active');
        if ($('#progress')) {};
      });

      $('.app_prev').on("click", function () {
        $('.app_selected').removeClass('app_selected').hide().prev().show().addClass('app_selected');
        $('#progressbar li.app_active').removeClass('app_active').prev().addClass('app_active');
      });
    }

    // Nav_List
    jQuery(document).ready(function ($) {
      $('.navigation_grid .hasTooltip , #product_list.v_grid .hasTooltip').tooltip('hide');
      var cc = $('list_grid');
      if (cc == 'g') {
        $('#product_list').addClass('v_list');
        $('#product_list').removeClass('v_grid');
        $('.Clist').addClass('active');
        $('.Cgrid').removeClass('active');
      } else {
        $('#product_list').removeClass('v_list');
        $('#product_list').addClass('v_grid');
        $('.Cgrid').addClass('active');
        $('.Clist').removeClass('active');
      }

      $('.cgrid').on('click', function () {
        console.log(1);
        $(this).addClass('active');
        $('.clist').removeClass('active');
        $('#product_list').fadeOut(300, function () {
          $(this).addClass('v_grid').removeClass('v_list').fadeIn(300);
        });
        return false;
      });

      $('.clist').on('click', function () {
        console.log(2);
        $(this).addClass('active');
        $('.cgrid').removeClass('active');
        $('#product_list').fadeOut(300, function () {
          $(this).removeClass('v_grid').addClass('v_list').fadeIn(300);
        });
        return false;
      });
    });

    // Sticky menu
    $('body').Temp({
      sticky: true
    });

    // SmoothScroll
    try {
      $.browserSelector();
      var $html = $('html');
      if ($html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10')) {
        $.smoothScroll();
      }
    } catch (err) {}

    // fancybox
    if ($('a.gallery').length) {
      $('a.gallery').fancybox();
    }

    if ($('a.video').length) {
      $("a.video").on("click", function () {
        $.fancybox({
          href: this.href,
          type: $(this).data("type")
        }); // fancybox
        return false
      }); // on
    }

    // custom select
    if ($('.custom_select').length) {
      $('.custom_select').mad_custom_select();
    }

    // accordion & toggle
    var aItem = $('.accordion:not(.toggle) .accordion_item'),
      link = aItem.find('.a_title'),
      $label = aItem.find('label'),
      aToggleItem = $('.accordion.toggle .accordion_item'),
      tLink = aToggleItem.find('.a_title');

    aItem.add(aToggleItem).children('.a_title').not('.active').next().hide();

    function triggerAccordeon($item) {
      $item
        .addClass('active')
        .next().stop().slideDown()
        .parent().siblings()
        .children('.a_title')
        .removeClass('active')
        .next().stop().slideUp();
    }

    if ($label.length) {
      $label.on('click', function () {
        triggerAccordeon($(this).closest('.a_title'))
      });
    } else {
      link.on('click', function () {
        triggerAccordeon($(this))
      });
    }

    tLink.on('click', function () {
      $(this).toggleClass('active')
        .next().stop().slideToggle();

    })

    // contact form
    if ($('#contact_form').length) {

      var cf = $('#contact_form');
      cf.append('<div class="message_container"></div>');

      cf.on("submit", function (event) {

        var self = $(this),
          text;

        var request = $.ajax({
          url: "bat/mail.php",
          type: "post",
          data: self.serialize()
        });

        request.then(function (data) {
          if (data == "1") {

            text = "Your message has been sent successfully!";

            cf.find('input:not([type="submit"]),textarea').val('');

            $('.message_container').html('<div class="alert_box success"><i class="icon-smile"></i><p>' + text + '</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300, function () {
                $(this).html("");
              });

          } else {
            if (cf.find('textarea').val().length < 20) {
              text = "Message must contain at least 20 characters!"
            }
            if (cf.find('input').val() == "") {
              text = "All required fields must be filled!";
            }
            $('.message_container').html('<div class="alert_box error"><i class="icon-warning"></i><p>' + text + '</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300, function () {
                $(this).html("");
              });
          }
        }, function () {
          $('.message_container').html('<div class="alert_box error"><i class="icon-warning"></i><p>Connection to server failed!</p></div>')
            .delay(150)
            .slideDown(300)
            .delay(4000)
            .slideUp(300, function () {
              $(this).html("");
            });
        });
        event.preventDefault();
      });
    }

    if ($('#contact_form2').length) {
      var cf = $('#contact_form2');
      cf.append('<div class="message_container2"></div>');
      cf.on("submit", function (event) {

        var self = $(this),
          text;

        var request = $.ajax({
          url: "bat/mail.php",
          type: "post",
          data: self.serialize()
        });

        request.then(function (data) {
          if (data == "1") {

            text = "Your message has been sent successfully!";

            cf.find('input:not([type="submit"]),textarea').val('');

            $('.message_container2').html('<div class="alert_box success"><i class="icon-smile"></i><p>' + text + '</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300, function () {
                $(this).html("");
              });

          } else {
            if (cf.find('textarea').val().length < 20) {
              text = "Message must contain at least 20 characters!"
            }
            if (cf.find('input').val() == "") {
              text = "All required fields must be filled!";
            }
            $('.message_container2').html('<div class="alert_box error"><i class="icon-warning"></i><p>' + text + '</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300, function () {
                $(this).html("");
              });
          }
        }, function () {
          $('.message_container2').html('<div class="alert_box error"><i class="icon-warning"></i><p>Connection to server failed!</p></div>')
            .delay(150)
            .slideDown(300)
            .delay(4000)
            .slideUp(300, function () {
              $(this).html("");
            });
        });

        event.preventDefault();
      });
    }

    if ($('#contact_form3').length) {
      var cf = $('#contact_form3');
      cf.append('<div class="message_container3"></div>');
      cf.on("submit", function (event) {

        var self = $(this),
          text;

        var request = $.ajax({
          url: "bat/mail.php",
          type: "post",
          data: self.serialize()
        });

        request.then(function (data) {
          if (data == "1") {

            text = "Your message has been sent successfully!";

            cf.find('input:not([type="submit"]),textarea').val('');

            $('.message_container3').html('<div class="alert_box success"><i class="icon-smile"></i><p>' + text + '</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300, function () {
                $(this).html("");
              });

          } else {
            if (cf.find('textarea').val().length < 20) {
              text = "Message must contain at least 20 characters!"
            }
            if (cf.find('input').val() == "") {
              text = "All required fields must be filled!";
            }
            $('.message_container3').html('<div class="alert_box error"><i class="icon-warning"></i><p>' + text + '</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300, function () {
                $(this).html("");
              });
          }
        }, function () {
          $('.message_container3').html('<div class="alert_box error"><i class="icon-warning"></i><p>Connection to server failed!</p></div>')
            .delay(150)
            .slideDown(300)
            .delay(4000)
            .slideUp(300, function () {
              $(this).html("");
            });
        });

        event.preventDefault();
      });
    }

    // Isotope
    $(window).load(function () {

      var $container = $('.isotope');
      // filter buttons
      $('#filters button').on('click', function () {
        var $this = $(this);
        // don't proceed if already selected
        if (!$this.hasClass('is-checked')) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({
          itemSelector: '.item',
          filter: selector
        });
        return false;
      });
    });

    $(window).load(function () {
      $.mad_core.isotope();
    });

    // Price Scale
    var slider;
    if ($('#price').length) {
      slider = $('#price').slider({
        orientation: "horizontal",
        range: true,
        values: [0, 250],
        min: 0,
        max: 250,
        slide: function (event, ui) {
          $(this).next().find('.first_limit').val('$' + ui.values[0]);
          $(this).next().find('.last_limit').val('$' + ui.values[1]);
        }
      });
    }

    // Quantity
    var q = $('.quantity');
    q.each(function () {
      var $this = $(this),
        button = $this.children('button'),
        input = $this.children('input[type="text"]'),
        val = +input.val();

      button.on('click', function () {
        if ($(this).hasClass('minus')) {
          if (val === 1) return false;
          input.val(--val);
        } else {
          input.val(++val);
        }
      });
    });

    // appear animation
    function animate() {

      $("[data-appear-animation]").each(function () {
        var self = $(this);
        self.addClass("appear-animation");

        if ($(window).width() > 800) {
          self.appear(function () {
            var delay = (self.attr("data-appear-animation-delay") ? self.attr("data-appear-animation-delay") : 1);

            if (delay > 1) self.css("animation-delay", delay + "ms");
            self.addClass(self.attr("data-appear-animation"));

            setTimeout(function () {
              self.addClass("appear-animation-visible");
            }, delay);
          }, {
            accX: 0,
            accY: -150
          });
        } else {
          self.addClass("appear-animation-visible");
        }
      });
    }

    animate();
    $(window).on('resize', animate);

    $('.listagem-dicas').owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      URLhashListener: false,
      navSpeed: 500,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      navText: false
    });

    $('.listagem-clientes').owlCarousel({
      items: 3,
      margin: 4,
      URLhashListener: false,
      navSpeed: 800,
      nav: false,
      loop: true,
      autoplay: true,
      navText: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        481: {
          items: 3
        },
        980: {
          items: 3
        }
      }
    });

    $('.listagem-highlights').owlCarousel({
      items: 3,
      margin: 15,
      URLhashListener: false,
      navSpeed: 800,
      nav: true,
      loop: false,
      autoplay: false,
      navText: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        481: {
          items: 3
        },
        980: {
          items: 3
        }
      }
    });

    //elevate zoom
    (function () {

      if ($('#thumbnails').length) {
        $('#thumbnails').each(function () {

          /* Max items counting */
          var data = $(this).data();
          console.log(data);
          var max_items = $(this).data('max-items');
          var tablet_items = max_items;
          if (max_items > 1) {
            tablet_items = max_items - 1;
          }

          var mobile_items = 1;
          var autoplay_carousel = $(this).data('autoplay');

          $('#thumbnails').owlCarousel({
            items: max_items,
            margin: 30,
            URLhashListener: false,
            navSpeed: 800,
            nav: true,
            navText: false,
            responsive: {
              0: {
                items: tablet_items
              },
              400: {
                items: max_items
              },
              481: {
                items: tablet_items
              },
              980: {
                items: max_items
              }
            }
          });
        });
      }

      if ($('[data-zoom-image]').length) {
        var button = $('.qv_preview');
        $("#zoom_image").elevateZoom({
          gallery: 'thumbnails',
          galleryActiveClass: 'active',
          zoomType: "inner",
          cursor: "crosshair",
          responsive: true,
          zoomWindowFadeIn: 500,
          zoomWindowFadeOut: 500,
          easing: true,
          lensFadeIn: 500,
          lensFadeOut: 500
        });

        button.on("click", function (e) {
          var ez = $('#zoom_image').data('elevateZoom');
          $.fancybox(ez.getGalleryList());
          e.preventDefault();
        });
      }
    })();

    // social widgets
    $('.sw_button').on('click', function () {
      $(this).parent().toggleClass('opened').siblings().removeClass('opened')
    });

    // countdown
    if ($('#countdown').length) {
      var newYear = new Date();
      newYear = new Date(newYear.getFullYear() + 2, -7, 1);
      $('#countdown').countdown({
        until: newYear,
        layout: '<div class="row"><div class="col-sm-3 col-xs-6">' +
          '<dl class="count_item"><dt class="main_title">{d<}{dn}</dt><dd><h5>{dl}</h5></dd></dl></div> {d>}' +
          '<div class="col-sm-3 col-xs-6">' +
          '<dl class="count_item"><dt class="main_title">{hn}</dt><dd><h5>{hl}</h5></dd></dl></div>' +
          ' <div class="col-sm-3 col-xs-6"><dl class="count_item"><dt class="main_title">{mn}</dt><dd><h5>{ml}</h5></dd></dl></div>' +
          ' <div class="col-sm-3 col-xs-6"><dl class="count_item"><dt class="main_title">{sn}</dt><dd><h5>{sl}</h5></dd></dl></div></div>'
      });
    }

    // Google Maps
    if ($('#googleMap').length) {

      $(document).ready(function () {
        var myCenter = new google.maps.LatLng(17.433053, 78.412172);

        function loadMap() {
          var mapProp = {
            center: myCenter,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                "stylers": [{
                  "visibility": "simplified"
                }]
              },
              {
                "stylers": [{
                  "color": "#131314"
                }]
              },
              {
                "featureType": "water",
                "stylers": [{
                    "color": "#131313"
                  },
                  {
                    "lightness": 7
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                  },
                  {
                    "lightness": 25
                  }
                ]
              }
            ]
          };
          var map = document.getElementById('googleMap');
          if (map !== null) {
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
          }

          var marker = new google.maps.Marker({
            position: myCenter,
            map: map,
            icon: 'images/map_marker.png'
          });
          marker.setMap(map);

          //Zoom to 7 when clicked on marker
          google.maps.event.addListener(marker, 'click', function () {
            map.setZoom(9);
            map.setCenter(marker.getPosition());
          });
        }
        google.maps.event.addDomListener(window, 'load', loadMap);
      });
    }

    if ($('#googleMap2').length) {

      $(document).ready(function () {
        var myCenter = new google.maps.LatLng(17.433053, 78.412172);

        function loadMap2() {
          var mapProp = {
            center: myCenter,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = document.getElementById('googleMap2');
          if (map !== null) {
            var map = new google.maps.Map(document.getElementById("googleMap2"), mapProp);
          }
          var marker = new google.maps.Marker({
            position: myCenter,
            map: map,
            icon: 'images/map_marker.png'
          });
          marker.setMap(map);

          //Zoom to 7 when clicked on marker
          google.maps.event.addListener(marker, 'click', function () {
            map.setZoom(9);
            map.setCenter(marker.getPosition());
          });
        }
        google.maps.event.addDomListener(window, 'load', loadMap2);
      });
    }

    // Responsive menu	
    $.mad_core.run();
  });

  $('#blog .mad_post_info p').each(function (e) {
    var str = $(this).text();
    $(this).text(trunc(str, 100)).attr('data-text', str);
  });

  $('.listagem-blog .mad_post_info p').each(function (e) {
    var str = $(this).text();
    $(this).text(trunc(str, 256)).attr('data-text', str);
  });

  $(window).scroll(function () {
    var sticky = $('#header'),
      scroll = $(window).scrollTop();

    if (scroll >= 128) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
})(jQuery);

function trunc(text, max) {
  return text.substr(0, max - 1) + (text.length > max ? '...' : '');
}