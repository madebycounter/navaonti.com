function updateAlbum(url) {
    if ($("#_player_album").attr("src") != url) {
        $("#_player_album").attr("src", url);
    }
}

function updateScreen(title) {
    $("._player_name").text(title);
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
    var firstBlink = setInterval(() => {
        $(`#_player_play`).attr("src", `/assets/img/btn_play_blink2.png`);

        setTimeout(() => {
            $(`#_player_play`).attr("src", `/assets/img/btn_play.png`);
        }, 500);
    }, 2000);

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

        clearInterval(firstBlink);
    });

    var playerIndex = Math.floor(Math.random() * PLAYER_TRACKS.length);
    var playerSelected = PLAYER_TRACKS[playerIndex];
    var playerPlaying = false;
    var audioPlayer = null;
    updateAlbum(playerSelected.cover);

    $("#_player_btn_back").click(() => {
        if (audioPlayer) audioPlayer.pause();

        playerIndex--;
        if (playerIndex < 0) playerIndex = PLAYER_TRACKS.length - 1;

        playerSelected = PLAYER_TRACKS[playerIndex];

        updateScreen(playerSelected.title);
        updateAlbum(playerSelected.cover);
        audioPlayer = playMusic(playerSelected.url);
        playerPlaying = true;
    });

    $("#_player_btn_forward").click(() => {
        if (audioPlayer) audioPlayer.pause();
        playerIndex = (playerIndex + 1) % PLAYER_TRACKS.length;
        playerSelected = PLAYER_TRACKS[playerIndex];

        updateScreen(playerSelected.title);
        updateAlbum(playerSelected.cover);
        audioPlayer = playMusic(playerSelected.url);
        playerPlaying = true;
    });

    $("#_player_btn_play").click(() => {
        updateScreen(playerSelected.title);
        updateAlbum(playerSelected.cover);

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
