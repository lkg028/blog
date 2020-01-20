var web_style = $("#web_style").val();
var valine_appid = $("#valine_appid").val();
var valine_appKey = $("#valine_appKey").val();

new Valine({
    el: '#vcomments',
    appId: valine_appid,
    appKey: valine_appKey,
    placeholder: '请输入内容...',
    avatar: "wavatar"
})

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
    });
});

function setCookie(key, value) {
    localStorage.setItem(key, value);
}

function getCookie(key) {
    var data = localStorage.getItem(key);
    return data
}

function updateStyle() {
    $("#footer").attr("style", "color: #51525d;");
    $(".flink").attr("style", "color: #51525d;");
    $(".ba").attr("style", "color: #51525d;");
    $("#bodyx").attr("class", "bg_while");
    $("#update_style").attr('checked', false);
}

if (getCookie("style") == null) {
    setCookie("style", web_style)
}
updateStyle();

