window.onload = function (){
 var el = document.getElementById('demo');
 el.innerHTML = '<span style="font-size:48px;">Hello, javascript</span>';
}
/**
 * 切换灯泡状态
 */
function toggleBubble()
{
    // 获取灯泡元素
    var img = document.getElementById('bubble');
    if (img.src.match('bulbon')) {
        img.src = "https://www.runoob.com/images/pic_bulboff.gif";
    } else {
        img.src = "https://www.runoob.com/images/pic_bulbon.gif";
    }
}

function onChanged(){
    console.log('input changed');
}

setInterval(function () {
    var date = new Date();
    console.log(date);
    var el = document.getElementById('demo');
    el.innerHTML = '<span style="font-size:48px;">Hello, javascript</span>';
    el.innerHTML = date;
}, 1000);