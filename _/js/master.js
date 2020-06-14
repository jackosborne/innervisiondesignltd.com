/* 
Sticky  Navigation
http://jsfiddle.net/5n5MA/2/ 
*/
/*
var fixmeTop = $("#nav").offset().top;
$(window).scroll(function () {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= fixmeTop) {
    $("#nav").css({
      position: "fixed",
      left: "20px",
      top: "20px",
    });
  } else {
    $("#nav").css({
      position: "absolute",
    });
  }
});
*/

/* 
Active State Scroll Position
https://jsfiddle.net/ashikjs/2g5p44of/
*/
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('#nav a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("#nav a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop() + 375;
  $("#nav a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#nav li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
