function resizeHandler() {
    updateClipMask();
}

$(window).on("resize", resizeHandler);
$(window).on("load", resizeHandler);
