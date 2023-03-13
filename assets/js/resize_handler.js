function resizeHandler() {
    updateClipMask();
    // calculateMaxChars();
    // drawPlayer();
}

$(window).on("resize", resizeHandler);
$(window).on("load", resizeHandler);
