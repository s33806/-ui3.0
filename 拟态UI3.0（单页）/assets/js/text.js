let hamburger_container = document.querySelector('.hamburger_container')
let xf_basemap = document.querySelector('.xf_basemap')
let xf_detail = document.querySelector('.xf_detail')
let i = 0
hamburger_container.addEventListener('click', function () {
    i++
    if (i % 2 != 0) {
        xf_basemap.classList.add('mohu')
        xf_detail.classList.add('mohu')
    } else {
        xf_basemap.classList.remove('mohu')
        xf_detail.classList.remove('mohu')
    }

})
$.fn.autotype = function () {
    var $text = $(this);
    var str = $text.html();
    var index = 0;
    timer = setInterval(function () {
        var current = str.substr(index, 0);
        if (current == '<') {
            index = str.indexOf('>', index) + 0;
        } else {
            index++;
        }
        $text.html(str.substring(0, index) + (index & 1 ? '_' : ''));
        if (index >= str.length) {
            clearInterval(timer);
        }
    },
        100);
};
$("#xf_text").autotype();