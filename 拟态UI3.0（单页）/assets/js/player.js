var url = 'https://api.vvhan.com/api/rand.music?type=json&sort=热歌榜'
var musicInfo = []
var nowmusic = ''
var audio = $("<audio></audio>")
var musicimg = $("<img>")
var song = $("<div></div>")
var auther = $("<div></div>")

var isPaused = false
var isMuted = false
var len = 0
var nowloca = 0
var volume = 1

function init() {
    $.ajax({
        url: url,
        type: "get",
        dataType: 'json',
        success: function (res) {
            audio.attr("autoplay", "autoplay")
            audio.attr("src", res.info.mp3url)
            $(".musicbox").append(audio)
            musicimg.attr("src", res.info.picUrl)
            musicimg.addClass("musicimg")
            $(".music-img").append(musicimg)
            auther.text(res.info.auther)
            auther.addClass("auther")
            song.text(res.info.name)
            song.addClass("name")
            $(".music-info").append(song)
            $(".music-info").append(auther)

            len = 1
            nowloca = 1

            musicInfo.push(res.info)
            nowmusic = res.info
        }
    })
}

$(function () {
    init()
    setTimer()
})

function ProgressBar() {
    var duration = audio.prop("duration")
    var currentTime = audio.prop("currentTime")

    let m = parseInt(duration / 60)
    let s = parseInt(duration % 60)

    let sm = parseInt(currentTime / 60)
    let ss = parseInt(currentTime % 60)

    if (s > 9) {
        let end = '0' + m + ':' + s
        $(".end").text(end)
    } else {
        let end = '0' + m + ':0' + s
        $(".end").text(end)
    }
    if (sm > 0) {
        if (ss > 9) {
            let runtime = '0' + sm + ':' + ss
            $(".start").text(runtime)
        } else {
            let runtime = '0' + sm + ':0' + ss
            $(".start").text(runtime)
        }
    } else {
        if (ss > 9) {
            let runtime = '0' + sm + ':' + ss
            $(".start").text(runtime)
        } else {
            let runtime = '0' + sm + ':0' + ss
            $(".start").text(runtime)
        }
    }

    let width = $(".running").css("width")
    let rate = currentTime / duration
    width = parseFloat(width) * parseFloat(rate)
    $(".running1").css("width", parseInt(width))

    if (duration == currentTime) {
        $.ajax({
            url: url,
            type: "get",
            dataType: 'json',
            success: function (res) {
                nowmusic = res.info
                musicInfo.push(nowmusic)
                len = musicInfo.length
                nowloca = len
                audio.prop("src", nowmusic.mp3url)
                musicimg.prop("src", nowmusic.picUrl)
                auther.text(nowmusic.auther)
                song.text(nowmusic.name)
            }
        })
    }
}
function replayMusic() {
    audio.prop("src", nowmusic.mp3url)
    musicimg.prop("src", nowmusic.picUrl)
    auther.text(nowmusic.auther)
    song.text(nowmusic.name)
}
function pauseMusic() {
    var player = document.getElementsByTagName("audio")
    if (isPaused) {
        player[0].play()
        musicimg.css("animation-play-state", "running")
        $("#pause").html("&#xe6a5;")
    } else {
        player[0].pause()
        musicimg.css("animation-play-state", "paused")
        $("#pause").html("&#xe6a4;")
    }
    isPaused = !isPaused
}
function muteMusic() {
    var player = document.getElementsByTagName("audio")
    if (isMuted) {
        player[0].muted = false
        $("#mute").html("&#xe64c;")
    } else {
        player[0].muted = true
        $("#mute").html("&#xe65e;")
    }
    isMuted = !isMuted
}
function preMusic() {
    if (nowloca == 1) {
        alert("宝贝这是我的第一首歌曲了！")
    } else {
        nowloca = nowloca - 1
        nowmusic = musicInfo[nowloca - 1]
        audio.prop("src", nowmusic.mp3url)
        musicimg.prop("src", nowmusic.picUrl)
        auther.text(nowmusic.auther)
        song.text(nowmusic.name)
    }
}
function nextMusic() {
    if (nowloca == len) {
        $.ajax({
            url: url,
            type: "get",
            dataType: 'json',
            success: function (res) {
                nowmusic = res.info

                musicInfo.push(nowmusic)
                len = musicInfo.length
                nowloca = len
                audio.prop("src", nowmusic.mp3url)
                musicimg.prop("src", nowmusic.picUrl)
                auther.text(nowmusic.auther)
                song.text(nowmusic.name)
            }
        })
    } else {
        nowmusic = musicInfo[nowloca]
        audio.prop("src", nowmusic.mp3url)
        musicimg.prop("src", nowmusic.picUrl)
        auther.text(nowmusic.auther)
        song.text(nowmusic.name)
        nowloca = nowloca + 1
    }
}
function changeVulme(e) {
    $(".vulmeBar").click(function (e) {
        let x = e.offsetX
        let y = e.offsetY

        if (x >= 0 && x <= 5 || y <= 0) {
            volume = x / 100
            audio.prop("volume", volume)

            $(".vulmeBar1").css("width", volume * 100)
        }

    });

}
function changeProgress() {
    $(".running").click(function (e) {
        let x = e.offsetX
        let y = e.offsetY
        var duration = audio.prop("duration")

        // 在指定位置计算
        if (x >= 0 && x <= 258 || y <= 0) {
            let l = x / 258
            let time = l * duration

            document.getElementsByTagName("audio")[0].currentTime = time
            $(".running1").css("width", x)
        }

    });
}
function setTimer() {
    setInterval(() => {
        ProgressBar()
        if ($(".vulme").css("width") === '60px') {
            $(".vulmeBar").css("width", 100)
            $(".vulmeBar1").css("width", volume * 100)
        } else {
            $(".vulmeBar").css("width", 0)
            $(".vulmeBar1").css("width", 0)
        }
    }, 1000)
}