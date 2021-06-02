! function (t, n) {
  function e() {
    if (!a) {
      a = !0;
      for (var t = 0; t < d.length; t++) d[t].fn.call(window, d[t].ctx);
      d = []
    }
  }

  function o() {
    "complete" === document.readyState && e()
  }
  t = t || "docReady", n = n || window;
  var d = [],
    a = !1,
    c = !1;
  n[t] = function (t, n) {
    if ("function" != typeof t) throw new TypeError("callback for docReady(fn) must be a function");
    return a ? void setTimeout(function () {
      t(n)
    }, 1) : (d.push({
      fn: t,
      ctx: n
    }), void("complete" === document.readyState ? setTimeout(e, 1) : c || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1)) : (document.attachEvent("onreadystatechange", o), window.attachEvent("onload", e)), c = !0)))
  }
}("docReady", window);

// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
function isInPage(element) {
  var node = document.querySelector(element);
  return (node === document.body) ? false : document.body.contains(node);
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

String.prototype.capitalize = function (lower) {
  return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
  // 'javaSCrIPT'.capitalize(); // -> 'JavaSCrIPT'
  // 'javaSCrIPT'.capitalize(true); // -> 'Javascript'
};

String.prototype.isEmpty = function () {
  msg = this.replace(/\s+/g, '');
  return (msg.length === 0 || !msg.trim());
};

(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


(function () {
  jQuery.easing.def = "easeOutQuad";

  /**
   * @Form-erros
   * Remover as classes de erro adicionadas pela validaçáo
   */
  formErrors();

  /**
   * @Styled-select
   * Aplicar um novo estilo as selects.
   */
  // styledSelect();

  if (!!document.querySelector('.scrollto')) {
    //http://iamdustan.com/smoothscroll/
    //https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
    $('a.scrollto')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            var distance = target.offset().top;

            if($('.page').hasClass('-fixed-header')) {
              distance = target.offset().top - $('.main-header.is-fixed').outerHeight();
            }

            $('html, body').animate({
              scrollTop: distance
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  }

  if (!!document.querySelector('.slick-slider-for')) {
    $('.slick-slider-for').slick({
      dots: false,
      infinite: false,
      speed: 750,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 3500,
      arrows: false,
      fade: true,
      asNavFor: '.slick-slider-nav',
      lazyLoad: 'progressive'
    });
    $('.slick-slider-nav').slick({
      dots: true,
      infinite: false,
      speed: 750,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 3500,
      asNavFor: '.slick-slider-for',
      arrows: true,
      prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive'
    });
  }

  if (!!document.querySelector('.slider')) {
    $('.slider').slick({
      dots: true,
      infinite: false,
      speed: 750,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 3500,
      arrows: true,
      prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive'
    });
  }

  if (!!document.querySelector('.slick-banner')) {
    $('.slick-banner').slick({
      dots: true,
      infinite: false,
      speed: 750,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive'
    });
  }

  if (!!document.querySelector('.slick-carousel')) {
    $('.slick-carousel').slick({
      dots: true,
      infinite: false,
      speed: 750,
      slidesToShow: 3,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4500,
      arrows: true,
      prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if (!!document.querySelector('.slick-carousel-modulos')) {
    $('.slick-carousel-modulos').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 3500,
      arrows: true,
      prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if (!!document.querySelector('.slick-carousel-4')) {
    $('.slick-carousel-4').slick({
      dots: true,
      infinite: false,
      speed: 750,
      slidesToShow: 4,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4500,
      arrows: true,
      prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if (!!document.querySelector('.slick-carousel-6')) {
    $('.slick-carousel-6').slick({
      dots: true,
      infinite: false,
      speed: 750,
      slidesToShow: 6,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }]
    });
  }

  if (!!document.querySelector('.slick-carousel-5')) {
    $('.slick-carousel-5').slick({
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      centerPadding: '4rem',
      slidesToShow: 5,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if (!!document.querySelector('.slick-carousel-clientes')) {
    $('.slick-carousel-clientes').slick({
      dots: false,
      infinite: true,
      speed: 2000,
      centerMode: false,
      // centerPadding: '4rem',
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      // prevArrow: '<button class="btn slide-control -prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      // nextArrow: '<button class="btn slide-control -next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      lazyLoad: 'progressive'
    });
  }
}());

/**
 * @Header Affix
 * Animação da header da página.
 */
function affixHeader() {
  if (!!document.querySelector('#maniHeader')) {
    setTimeout(function () {
      var gb_H = $('#maniHeader').outerHeight();
      animeHeader(gb_H);
      $(window).scroll(function () {
        var gb_H_new = $('#maniHeader').outerHeight();
        animeHeader(gb_H, gb_H_new);
      });
    }, 100);
  } else {
    return;
  }
}

function animeHeader(gb_H, gb_H_new) {
  var scroll = getCurrentScroll();

  if ($('body').is('.-affix-header')) {
    $('#maniHeader').addClass('affix-header');

    if (scroll > $('.hero').outerHeight()) {
      $('#maniHeader').addClass('fixed');
    } else {
      $('#maniHeader').removeClass('fixed');
    }
  }
}

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function formErrors() {
  if (!!document.querySelector('input.error')) {
    $("body").on("focus", "input.error, select.error, textarea.error", function () {
      $(this).removeClass('error');
    });
  }
  if (typeof ($('input.success')) !== 'undefined' && $('input.success') !== null) {
    $("body").on("focus", "input.success, select.success, textarea.success",
      function () {
        $(this).removeClass('success');
      });
  }
}

function styledSelect() {
  if (typeof ($('select')) !== 'undefined' && $('select') !== null) {
    $('select').each(function () {
      if (!$(this).parent().hasClass("styled-select"))
        $(this).wrap('<div class="styled-select input form-control" role="presentation"></div>');

      // if ($(this).parent().hasClass("styled-select")) {} else {
      //   classes = {};
      //   $($(this).attr('class').split(' ')).each(function () {
      //     if (this !== '') {
      //       classes[this] = this;
      //     }
      //   });
      //   $(this).wrap('<div class="styled-select" role="presentation"></div>');
      //   for (var class_name in classes) {
      //     $(this).closest('.styled-select').addClass(class_name);
      //   }
      // }
    });
  }
}

jQuery(document).ready(function (e) {

  jQuery.ajaxSetup({
    cache: false,
    timeout: 5000,
    // dataType: "json",
    scriptCharset: "utf-8",
    contentType: "application/x-www-form-urlencoded",
    error: function (xhr, errorType, exceptionThrown) {
      if (xhr.status == 0) {
        return console.log("Você está offline! Por favor verifique sua rede.");
      } else if (xhr.status == 404) {
        return console.log("Diretório ou arquivo não está disponível no servidor");
      } else if (xhr.status == 500) {
        return console.log("Erro interno no servidor");
      } else if (errorType == "parsererror") {
        return console.log("Erro ao verificar os dados requeridos.");
      } else if (errorType == "timeout") {
        return console.log("Servidor excedeu o tempo limite de espera");
      } else {
        return console.log("Erro desconhecido: " + exceptionThrown);
      }
    },
    fail: function (xhr, status, errorThrown) {
      console.log("fail");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
    }
  });

  $.extend($.validator.messages, {
    required: "Este campo &eacute; requerido.",
    remote: "Por favor, corrija este campo.",
    email: "Por favor, forne&ccedil;a um endere&ccedil;o eletr&ocirc;nico v&aacute;lido.",
    url: "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
    date: "Por favor, forne&ccedil;a uma data v&aacute;lida.",
    dateISO: "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).",
    number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
    digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
    creditcard: "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.",
    equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.",
    accept: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
    maxlength: jQuery.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
    range: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
    max: jQuery.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
    min: jQuery.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}.")
  });

  jQuery.validator.addMethod("notEqual", function (value, element, param) {
    return this.optional(element) || value != jQuery(param).val();
  }, "Por segurança não é permitido repetir.");

  jQuery.validator.addMethod("dateBR", function (value, element) {
    if (value.length != 10) return false;
    // verificando data
    var data = value;
    var dia = data.substr(0, 2);
    var barra1 = data.substr(2, 1);
    var mes = data.substr(3, 2);
    var barra2 = data.substr(5, 1);
    var ano = data.substr(6, 4);
    if (data.length != 10 || barra1 != "/" || barra2 != "/" || isNaN(dia) || isNaN(mes) || isNaN(ano) || dia > 31 || mes > 12) return false;
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31) return false;
    if (mes == 2 && (dia > 29 || (dia == 29 && ano % 4 != 0))) return false;
    if (ano < 1900) return false;
    return true;
  }, "Informe uma data válida");

  jQuery.validator.addMethod("viacep", function (value, element) {
    var cep = value.replace(/\.|\-/g, "");
    var result = null;
    jQuery.ajax({
      type: "GET",
      dataType: "json",
      url: "http://viacep.com.br/ws/" + cep + "/json/",
      cache: false,
      timeout: 5000,
      complete: function (msg) {
        msg = msg.responseJSON;
        if (!!msg.erro) {
          result = false;
        } else {
          result = true;
        }
      }
    });
    return result;
  }, "Por favor, digite um CEP válido.");

  jQuery.validator.addMethod("cep", function (value, element) {
    value = value.replace(/\.|\-/g, "");

    return this.optional(element) || /^[0-9]{8}$/.test(value);
  }, "Por favor, digite um CEP válido.");

  jQuery.validator.addMethod("dataBR", function (value, element) {
    var currVal = value;
    if (currVal == "")
      return false;

    //Declare Regex
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null)
      return false;

    //Checks for mm/dd/yyyy format.
    var dtDay = parseInt(dtArray[1]);
    var dtMonth = parseInt(dtArray[3]);
    var dtYear = parseInt(dtArray[5]);
    var age = calculateAge(dtMonth, dtDay, dtYear);

    if (dtMonth < 1 || dtMonth > 12)
      return false;
    else if (dtDay < 1 || dtDay > 31)
      return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
      return false;
    else if (dtMonth == 2) {
      var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
      if (dtDay > 29 || (dtDay == 29 && !isleap))
        return false;
    } else if (age < 16 || age > 100)
      return false;

    return true;
  }, "Por favor, digite uma Data válida. Mínino 16 anos de idade.");

  function calculateAge(birth_month, birth_day, birth_year) {
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - birth_year;

    if (today_month < (birth_month - 1)) {
      age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
      age--;
    }
    return age;
  }

  jQuery.validator.addMethod("cpf", function (value, element) {
    var cpf = value.replace(/[^\d]+/g, "");

    if (cpf == "")
      return false;
    if (cpf.length != 11)
      return false;

    if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
      return false;
    add = 0;
    for (i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
    add = 0;
    for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
  }, "Informe um CPF válido");

  function removeMaskTel(str) {
    str = str.replace(/\D/g, "");
    str = str.substring(2);
    // str = parseInt(str, 10);
    return str;
  }

  function removeMask(str) {
    str = str.replace(/\D/g, "");
    // str = parseInt(str, 10);
    return str;
  }

  function getDDDMaskTel(str) {
    str = str.replace(/\D/g, "");
    str = str.slice(0, 2);
    // str = parseInt(str, 10);
    return str;
  }

  function reverseDate(str) {
    str = str.split("/");
    str.reverse();
    str = str.join("-");
    return str;
  }

  function formatReal(int) {
    var tmp = int + "";
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
      tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf == "") return false;
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
    add = 0;
    for (i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
    add = 0;
    for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
  }

  jQuery("input[name=cep]").blur(function () {
    var cep = jQuery(this).val().replace(/\D/g, "");
    if (cep !== "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        jQuery.ajax({
          type: "GET",
          dataType: "json",
          url: "http://viacep.com.br/ws/" + cep + "/json/",
          cache: false,
          timeout: 5000,
          beforeSend: function () {
            console.log("Consulta para verificar a existência do CEP <strong>" + cep + "</strong>");
          },
          complete: function (msg) {
            resp = msg.responseJSON;

            if (!!resp.erro) {
              console.log("Tivemos um pequeno problema ao consultar o CEP <strong>" + cep + "</strong>.<br> Por favor, confirme se o preenchimento está correto");
              jQuery("input[name=cep]").attr("data-cep", false);
              jQuery("input[name=cep]").val("");
            } else {
              jQuery("input[name=endereco]").val(resp.logradouro);
              jQuery("input[name=bairro]").val(resp.bairro);
              jQuery("input[name=cidade]").val(resp.localidade);
              // jQuery("input[name=estado]").val(resp.uf);
              jQuery("input[name=cep]").attr("data-cep", true);
            }
          }
        });
      } else {
        jQuery("input[name=cep]").attr("data-cep", false);
      }
    }
  });

  function limpa_formulario_cep() {
    jQuery("input[name=endereco]").val("");
    jQuery("input[name=bairro]").val("");
    jQuery("input[name=cidade]").val("");
    // jQuery("input[name=estado]").val("");
  }

  if (!!jQuery('#formContato')) {
    jQuery('#formContato').validate({
      debug: false,
      errorClass: "error",
      errorElement: "div",
      onkeyup: false,
      rules: {
        nome: {
          required: true,
          minlength: 4
        },
        email: {
          required: true,
          email: true
        },
        telefone: {
          required: true
        },
        assunto: {
          required: true
        },
        representante: {
          required: true
        },
        mensagem: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        nome: {
          required: 'Preencha o campo nome',
          minlength: 'No mínimo 4 letras'
        },
        email: {
          required: 'Informe o seu email',
          email: 'Ops, informe um email válido'
        },
        telefone: {
          required: 'Nos diga seu telefone.'
        },
        mensagem: {
          required: 'Deixe sua mensagem',
          minlength: 'No mínimo 10 letras'
        }
      }
    });
  }

  var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, "").length === 11 ? "(00) 00000-0000" : "(00) 0000-00009";
  },
  spOptions = {
    onKeyPress: function (val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
  };

  jQuery("form .telefone").mask(SPMaskBehavior, spOptions);
  jQuery("form .data").mask("00/00/0000");
  jQuery("form .cep").mask("00.000-000");
  jQuery("form .cpf").mask("000.000.000-00");
  jQuery("form .cnpj").mask("00.000.000/0000-00");

  jQuery('form .date').mask('00/00/0000');
  jQuery('form .time').mask('00:00:00');
  jQuery('form .date_time').mask('00/00/0000 00:00:00');
  jQuery('form .cep').mask('00000-000');
  jQuery('form .phone').mask('0000-0000');
  jQuery('form .phone_with_ddd').mask('(00) 0000-0000');
  jQuery('form .phone_us').mask('(000) 000-0000');
  jQuery('form .mixed').mask('AAA 000-S0S');
  jQuery('form .ip_address').mask('099.099.099.099');
  jQuery('form .percent').mask('##0,00%', {reverse: true});
  jQuery('form .cnpj').mask('00.000.000/0000-00', {reverse: true});
  jQuery('form .cpf').mask('000.000.000-00', {reverse: true});
  jQuery('form .money').mask('#.##0,00', {reverse: true});
  
  if (!!jQuery("input[name=cep]")) {
    jQuery("input[name=cep]").mask("00.000-000");
  }

  if (!!jQuery("input[name=data]")) {
    jQuery("input[name=data]").mask("00/00/0000");
  }

  if (!!jQuery("input[name=dtnascimento]")) {
    jQuery("input[name=dtnascimento]").mask("00/00/0000");
  }

  if (!!jQuery("input[name=nascimento]")) {
    jQuery("input[name=nascimento]").mask("00/00/0000");
  }

  if (!!jQuery("input[name=cpf]")) {
    jQuery("input[name=cpf]").mask("000.000.000-00");
  }

  if (!!jQuery("input[name=cnpj]")) {
    jQuery("input[name=cnpj]").mask("00.000.000/0000-00");
  }

  if (!!jQuery("input[name=numeroCartao]")) {
    jQuery("input[name=numeroCartao]").mask("0000 0000 0000 0000");
  }

  if (!!jQuery("input[name=validadeCartao]")) {
    jQuery("input[name=validadeCartao]").mask("00/00");
  }

  if (!!jQuery("input[name=codigoCartao]")) {
    jQuery("input[name=codigoCartao]").mask("000");
  }

  if (!!jQuery("input[name=telefone]")) {
    jQuery("input[name=telefone]").mask(SPMaskBehavior, spOptions);
  }

  if (!!jQuery("input[name=telefone2]")) {
    jQuery("input[name=telefone2]").mask(SPMaskBehavior, spOptions);
  }

  if (!!jQuery("input[name=celular]")) {
    jQuery("input[name=celular]").mask(SPMaskBehavior, spOptions);
  }
});
