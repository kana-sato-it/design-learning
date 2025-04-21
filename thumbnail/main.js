(function ($) {
  $(document).ready(function () {
    var thumbs = $(".thumb img");
    var top_images = $(".top img");

    thumbs.hover(function () {
      top_images
        .hide()
        .eq(thumbs.index($(this)))
        .show();
    });
  });
})(jQuery);
