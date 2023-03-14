$(() => {
    $("._player_button").hover(
        function () {
            var which = $(this).attr("which");

            $(`#_player_${which}`).attr(
                "src",
                `/assets/img/btn_${which}_hover.png`
            );

            $(this).attr("hovering", "true");
        },
        function () {
            var which = $(this).attr("which");

            if ($(this).attr("clicked") != "true") {
                $(`#_player_${which}`).attr(
                    "src",
                    `/assets/img/btn_${which}.png`
                );
            }

            $(this).attr("hovering", "false");
        }
    );

    $("._player_button").click(function () {
        var which = $(this).attr("which");
        var self = this;

        $(`#_player_${which}`).attr(
            "src",
            `/assets/img/btn_${which}_press.png`
        );

        $(this).attr("clicked", "true");

        setTimeout(() => {
            if ($(self).attr("hovering") == "true") {
                $(`#_player_${which}`).attr(
                    "src",
                    `/assets/img/btn_${which}_hover.png`
                );
            } else {
                $(`#_player_${which}`).attr(
                    "src",
                    `/assets/img/btn_${which}.png`
                );
            }

            $(self).attr("clicked", "false");
        }, 200);
    });
});
