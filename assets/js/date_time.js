function updateTime() {
    var now = new Date();
    var months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ];

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var suffix = "AM";

    if (hours > 12) {
        hours = hours - 12;
        suffix = "PM";
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var month = months[now.getMonth()];
    var day = now.getDate();
    var year = now.getFullYear().toString().substr(2);

    var time = `${hours}:${minutes} ${suffix}`;
    var date = `${month} ${day} ${year}`;

    $("#_banner_time").text(time);
    $("#_banner_date").text(date);
}

setInterval(updateTime, 1000);
