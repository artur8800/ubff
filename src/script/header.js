module.exports = function() {

  let button = '.burger__menu';
  let activeClass = 'menu-active';
  let mobileMenu = '.mobile__menu';
  let mainNavigation = '.header__navigation';

  $(button)
    .click(function(event) {
      $(this)
        .toggleClass(activeClass);
      $('body')
        .toggleClass("overflow-hidden");
      $('.mobile__menu')
        .toggleClass('menu-open')

      // let listElements = $('.header__navigation__list');
      // //   ;
      // listElements.children()
      //   .each(function(item) {
      //     $(this)
      //       .removeClass('header__navigation__item')
      //       .addClass('mobile__navigation__item');

      //     $(this)
      //       .children()
      //       .each(function() {
      //         $(this)
      //           .removeClass('header__navigation__links')
      //           .addClass('navigation__link');
      //       })
      //     $('.navigation__list')
      //       .append(this)
      //   })

    })

  // $(".burger__menu")
  //   .click(function(event) {
  //     event.preventDefault();
  //     console.log('click')
  //     $(this)
  //       .toggleClass("menu-active");

  //     $('body')
  //       .toggleClass("overflow-hidden");

  //     $('.mobile__menu')
  //       .toggleClass('menu-open')
  //   });
  // $(window)
  //   .resize(function() {
  //     console.log('resize')
  //   })
};