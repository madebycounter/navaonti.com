function updatePlayer(selected) {
    $("._player_name").text(selected.title);
    $("#_player_album").attr("src", selected.cover);
}

function playMusic(source) {
    var audioPlayer = document.createElement("audio");
    audioPlayer.setAttribute("src", source);
    audioPlayer.setAttribute("autoplay", "autoplay");
    audioPlayer.load();

    audioPlayer.addEventListener("load", () => {
        audioPlayer.play();
    });

    return audioPlayer;
}

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

    var playerIndex = Math.floor(Math.random() * PLAYER_TRACKS.length);
    var playerSelected = PLAYER_TRACKS[playerIndex];
    var playerPlaying = false;
    var audioPlayer = null;
    updatePlayer(playerSelected);

    $("#_player_btn_back").click(() => {
        if (audioPlayer) audioPlayer.pause();

        playerIndex--;
        if (playerIndex < 0) playerIndex = PLAYER_TRACKS.length - 1;

        playerSelected = PLAYER_TRACKS[playerIndex];

        updatePlayer(playerSelected);
        audioPlayer = playMusic(playerSelected.url);
        playerPlaying = true;
    });

    $("#_player_btn_forward").click(() => {
        if (audioPlayer) audioPlayer.pause();
        playerIndex = (playerIndex + 1) % PLAYER_TRACKS.length;
        playerSelected = PLAYER_TRACKS[playerIndex];

        updatePlayer(playerSelected);
        audioPlayer = playMusic(playerSelected.url);
        playerPlaying = true;
    });

    $("#_player_btn_play").click(() => {
        if (playerPlaying) {
            audioPlayer.play();
        } else {
            audioPlayer = playMusic(playerSelected.url);
            playerPlaying = true;
        }
    });

    $("#_player_btn_pause").click(() => {
        audioPlayer.pause();
    });
});
