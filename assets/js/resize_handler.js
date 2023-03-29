function resizeBorder() {
    var width = $(".interface").width();
    var height = $(".interface").height();

    $("#border").width(width - 20);
    $("#border").height(height - 5);
}

function resizeHandler() {
    updateBannerClipMask();
    updateDesktopClipMask();
    resizeBorder();
}

$(window).on("resize", resizeHandler);
$(window).on("load", () => {
    updateTime();
    resizeHandler();
    $(".loader").fadeOut();
});

$(".interface").on("load", () => {
    resizeBorder();
});
