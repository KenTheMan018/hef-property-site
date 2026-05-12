$(function () {

  $(".img-w").each(function () {
    $(this).wrap("<div class='img-c'></div>");
    let imgSrc = $(this).find("img").attr("src");
    $(this).css("background-image", "url(" + imgSrc + ")");
  });

  $(".img-c").click(function () {

    let w = $(this).outerWidth();
    let h = $(this).outerHeight();
    let x = $(this).offset().left;
    let y = $(this).offset().top;

    $(".img-c.active").remove();

    let copy = $(this).clone();

    copy.insertAfter($(this))
      .height(h)
      .width(w)
      .addClass("active");

    $("body").addClass("gallery-open");

    // IMPORTANT: DO NOT override with CSS positioning tricks
    copy.css({
      position: "fixed",
      top: y,
      left: x,
      transform: "none"
    });

    setTimeout(function () {
      copy.addClass("positioned");
    }, 10);

  });

});

$(document).on("click", ".img-c.active", function () {

  let copy = $(this);

  copy.removeClass("positioned active").addClass("postactive");

  $("body").removeClass("gallery-open");

  setTimeout(function () {
    copy.remove();
  }, 400);

});