function pageHeader() {

  $(".burger__menu")
    .click(function(event) {
      event.preventDefault();
      $(this)
        .toggleClass("menu-active");

      $('body')
        .toggleClass("overflow-hidden");

      $('.mobile__menu')
        .toggleClass('menu-open')
    });
}

function fixedHeader() {

}

module.exports = pageHeader;