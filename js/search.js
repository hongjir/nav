var google = "https://www.google.com/search?q="
var bing = "https://cn.bing.com/search?q="
var ip = "https://sitereport.netcraft.com/?url="
var weibo = "https://s.weibo.com/weibo?q="
var zhihu = "https://www.zhihu.com/search?type=content&q="
var bilibili = "https://www.bilibili.com/search?q="
var scholar = "https://scholar.google.com/scholar?q="

var engine = google

function re_search(){
    var event = window.event || arguments.callee.caller.arguments[0];
    if (event.keyCode == 13)
    {
    search();
    }
}

function search(){
    var key = document.getElementById("key").value
    if (key){
        var url = engine + key
        window.open(url, '_blank')
        document.getElementById("key").value=""
    }
}

function changeEngine(c, name){
    engine = c;
    var className = 'engine-' + name;
    document.getElementById('current-search-icon').setAttribute('src', 'image/' + name + '.png');
    document.getElementsByClassName('current-engine')[0].classList.remove('current-engine');
    document.getElementsByClassName(className)[0].classList.add('current-engine');
}