$(() => {
    $("._player_button").click(function () {
        var which = $(this).attr("which");
        var self = this;

        $(`#_player_${which}`).attr(
            "src",
            `/assets/img/btn_${which}_press.png`
        );

        setTimeout(() => {
            $(`#_player_${which}`).attr("src", `/assets/img/btn_${which}.png`);
        }, 500);
    });

    $("#_player_btn_back").click(() => {});
    $("#_player_btn_forward").click(() => {});
    $("#_player_btn_play").click(() => {});
    $("#_player_btn_pause").click(() => {});
});
