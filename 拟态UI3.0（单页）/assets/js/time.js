var t = null;
function time() {
    dt = new Date();
    var y = dt.getFullYear();
    var M = dt.getMonth() + 1;
    var d = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    M = checkTime(M);
    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    $('.time_econd').html(h + ":" + m);
    $('.time_moon').html(y + "年" + M + "月" + d + "日");
    t = setTimeout(time, 1000);
}

function clock() {
    var time = new Date();
    var week;
    switch (time.getDay()) {
        case 1: week = "Monday"; break;
        case 2: week = "Tuesday"; break;
        case 3: week = "Wednesday"; break;
        case 4: week = "Thursday"; break;
        case 5: week = "Friday"; break;
        case 6: week = "Saturday"; break;
        default: week = "Sunday";
    }
    document.getElementById("clock").innerHTML = week;
}
setInterval(clock, 0);

window.onload = function () {
    time()
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
