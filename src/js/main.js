"use strict";
function menuHandler() {
  var menuBtn = $('.header__button');
  var dropdown = $('.header__nav');
  menuBtn.on('click', function () {
    dropdown.slideToggle();
  });
}
function stickyHeader() { 
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 150) {
        $("#header").addClass("header--color");
    } else {
       $("#header").removeClass("header--color");
    }
  });
 }

$(document).ready(function () {
  menuHandler();
  stickyHeader();
});