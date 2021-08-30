import $ from "jquery";
// import Swiper JS
import Swipable from "./swipeble";

import "../scss/pages/main.scss";
import mp from "magnific-popup";
import iziModal from "izimodal";
import "izimodal/css/iziModal.css";
import "magnific-popup/dist/magnific-popup.css";
import logo from "../img/logo.png";
import logo_1 from "../img/ubff-logo-1.svg";
import menu_lines from "../img/menu_lines.svg";
//import Union from "../img/Union.svg";

import Print from "./print";
// import FontRegular from "../fonts/Rubik-Regular.ttf";
// import FontBold from "../fonts/Rubik-Bold.ttf";
// import ExtraBold from "../fonts/Rubik-ExtraBold.ttf";
import pageHeader from "../script/header";

pageHeader();
jQuery(function() {
  let itemCard = $(".swiper__gallery img");

  itemCard.each(function() {
    let imageSrc = $(this)
      .attr("src");

    $(this)
      .wrap(`<a class="swiper__link" href="${imageSrc}"></a>`);
  });

  $(".swiper__gallery")
    .each(function() {
      $(this)
        .magnificPopup({
          delegate: "a",
          type: "image",
          gallery: {
            enabled: true
          }
        });
    });

})

const swipe = new Swipable("imageGallery");

// init("menu");