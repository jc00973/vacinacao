// Titulo
// ==========================================================================
// (function () {
//   try {
//     if (!isInPage(".el"))
//       return false;
//   } catch (error) {
//     console.log(error.name + ": " + error.message);
//   }
// }());

jQuery(document).ready(function (e) {

  // Bootstrap Tooltip
  // ==========================================================================
  (function () {
    try {
      if (!isInPage("[data-toggle='tooltip']"))
        return false;

      $('[data-toggle="tooltip"]').tooltip({
        boundary: 'window'
      });
    } catch (error) {
      console.log(error.name + ": " + error.message);
    }
  }());

  // Styled Select
  // ==========================================================================
  (function () {
    try {
      if (!isInPage("select"))
        return false;

      $('select').each(function () {
        $(this).wrap('<div class="styled-select" role="presentation"></div>');
      });
    } catch (error) {
      console.log(error.name + ": " + error.message);
    }
  }());


  // Gerar o menu para a versão mobile
  // ==========================================================================
  (function () {
    try {
      if (!isInPage("#mobileMenu"))
        return false;

      $("#mobileMenu").mmenu({
        extensions: ["pagedim-black", "position-left", "listview-50", "border-offset"],
        navbar: {
          title: "GIPI Sistemas"
        },
        navbars: [{
          position: "bottom",
          content: [
            "<a class='fab fa-facebook'  href='https://pt-br.facebook.com/gipisistemas/'></a>",
            "<a class='fab fa-instagram' href='https://www.instagram.com/gipisistemas/'></a>"
          ]
        }]
      });
    } catch (error) {
      console.log(error.name + ": " + error.message);
    }
  }());


  // Multimídia - Galeria de fotos
  // ==========================================================================
  (function () {
    try {
      if (!isInPage(".light-gallery"))
        return false;

      $(".light-gallery").lightGallery({
        thumbnail: false,
        animateThumb: false,
        selector: '.item',
        showThumbByDefault: false,
        getCaptionFromTitleOrAlt: false,
        download: false,
        share: false,
        actualSize: false,
        scale: 0,
        zoom: false,
        fullScreen: false,
        autoplay: false,
        autoplayControls: false,
      });

    } catch (error) {
      console.log(error.name + ": " + error.message);
    }
  }());


  // Atualizar Slider que ficam dentro das TABS
  // ==========================================================================
  (function () {
    try {
      if (!isInPage('a[data-toggle="pill"]'))
        return false;

      $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        var _this = $(e.target);
        var content = $(_this.attr('href'));

        content.find('.slick-slider').slick('setPosition', 0);
      })

    } catch (error) {
      console.log(error.name + ": " + error.message);
    }
  }());


  // Fixar menu
  // ==========================================================================
  (function () {
    try {
      if (!isInPage('.sticky'))
        return false;

      $(".aside-menu.sticky").sticky({
        topSpacing: 90,
        bottomSpacing: 80
      });

    } catch (error) {
      console.log(error.name + ": " + error.message);
    }
  }());
});