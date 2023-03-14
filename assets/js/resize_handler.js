function resizeHandler() {
    updateBannerClipMask();
    updateDesktopClipMask();
}

$(window).on("resize", resizeHandler);
$(window).on("load", resizeHandler);
