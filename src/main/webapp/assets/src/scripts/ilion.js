// Titulo
// ==========================================================================
// (function () {
//   try {
//     if (!document.querySelector(".el"))
//       return false;
//   } catch (error) {
//     console.log(error.name + ": " + error.message);
//   }
// }());

jQuery(document).ready(function (e) {

  // Styled Select
  // ==========================================================================
  (function () {
    try {
      if (!document.querySelector("select"))
        return false;

      $('select').each(function () {
        $(this).addClass('form-control').wrap('<div class="styled-select" role="presentation"></div>');
      });
    } catch (error) {
      console.log(error.name + ": " + error.message);
    }
  }());
});