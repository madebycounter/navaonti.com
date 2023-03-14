function updateBannerClipMask() {
    var width = $("#_banner_gif").width();
    var height = $("#_banner_gif").height();

    var svg = {
        w: width,
        h: height,
    };

    var box1 = {
        w: 145,
        h: 91,
    };

    var box2 = {
        w: 95,
        h: 95,
    };

    var bevel = {
        d: 12,
        m: 8,
    };

    // prettier-ignore
    var data = `
        M   ${box1.w + bevel.d} 0

        L   ${svg.w - bevel.d} 0
        C   ${svg.w - bevel.d + bevel.m} 0
            ${svg.w} ${bevel.d - bevel.m}
            ${svg.w} ${bevel.d}

        L   ${svg.w} ${svg.h - box2.h - bevel.d}
        C   ${svg.w} ${svg.h - box2.h - bevel.d + bevel.m}
            ${svg.w - bevel.d + bevel.m} ${svg.h - box2.h}
            ${svg.w - bevel.d} ${svg.h - box2.h}

        L   ${svg.w - box2.w + bevel.d} ${svg.h - box2.h}
        C   ${svg.w - box2.w + bevel.d - bevel.m} ${svg.h - box2.h}
            ${svg.w - box2.w} ${svg.h - box2.h + bevel.d - bevel.m}
            ${svg.w - box2.w} ${svg.h - box2.h + bevel.d}

        L   ${svg.w - box2.w} ${svg.h - bevel.d}
        C   ${svg.w - box2.w} ${svg.h - bevel.d + bevel.m}
            ${svg.w - box2.w - bevel.d + bevel.m} ${svg.h}
            ${svg.w - box2.w - bevel.d} ${svg.h}

        L   ${bevel.d} ${svg.h}
        C   ${bevel.d - bevel.m} ${svg.h}
            0 ${svg.h - bevel.d + bevel.m}
            0 ${svg.h - bevel.d}

        L   0 ${box1.h + bevel.d}
        C   0 ${box1.h + bevel.d - bevel.m}
            ${bevel.d - bevel.m} ${box1.h}
            ${bevel.d} ${box1.h}

        L   ${box1.w - bevel.d} ${box1.h}
        C   ${box1.w - bevel.d + bevel.m} ${box1.h}
            ${box1.w} ${box1.h - bevel.d + bevel.m}
            ${box1.w} ${box1.h - bevel.d}

        L   ${box1.w} ${bevel.d}
        C   ${box1.w} ${bevel.d - bevel.m}
            ${box1.w + bevel.d - bevel.m} 0
            ${box1.w + bevel.d} 0`;

    $("#_banner_path").attr("d", data);
    $("#banner").height(svg.h);
}

function updateDesktopClipMask() {
    var cut = {
        w: 130,
        h: 115,
    };

    var bevel = {
        d: 12,
        m: 8,
    };

    var width = $("#_wallpaper").width();
    var height = $("#_desktop_links").height() + cut.h + 32;

    var svg = {
        w: width,
        h: height,
    };

    // prettier-ignore
    var data = `
        M   ${bevel.d} 0

        L   ${svg.w - bevel.d} 0
        C   ${svg.w - bevel.d + bevel.m} 0
            ${svg.w} ${bevel.d - bevel.m}
            ${svg.w} ${bevel.d}

        L   ${svg.w} ${svg.h - cut.h - bevel.d}
        C   ${svg.w} ${svg.h - cut.h - bevel.d + bevel.m}
            ${svg.w - bevel.d + bevel.m} ${svg.h - cut.h}
            ${svg.w - bevel.d} ${svg.h - cut.h}

        C   ${svg.w - cut.w * 0.9} ${svg.h - cut.h * 0.9}
            ${svg.w - cut.w} ${svg.h}
            ${svg.w - cut.w} ${svg.h - bevel.d}
        
        C   ${svg.w - cut.w} ${svg.h - bevel.d + bevel.m}
            ${svg.w - cut.w - bevel.d + bevel.m} ${svg.h}
            ${svg.w - cut.w - bevel.d} ${svg.h}

        L   ${cut.w + bevel.d} ${svg.h}
        C   ${cut.w + bevel.d - bevel.m} ${svg.h}
            ${cut.w} ${svg.h - bevel.d + bevel.m}
            ${cut.w} ${svg.h - bevel.d}

        C   ${cut.w} ${svg.h}
            ${cut.w * 0.9} ${svg.h - cut.h * 0.9}
            ${bevel.d} ${svg.h - cut.h}
        
        C   ${bevel.d - bevel.m} ${svg.h - cut.h}
            0 ${svg.h - cut.h - bevel.d + bevel.m}
            0 ${svg.h - cut.h - bevel.d}

        L   0 ${bevel.d}
        C   0 ${bevel.d - bevel.m}
            ${bevel.d - bevel.m} 0
            ${bevel.d} 0
    `;

    console.log(data);

    $("#_desktop_path").attr("d", data);
    $("#_desktop_screen").height(svg.h);
}
