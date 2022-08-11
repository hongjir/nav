var google = "https://www.google.com/search?q="
var bing = "https://cn.bing.com/search?q="
var ip = "https://sitereport.netcraft.com/?url="
var weibo = "https://s.weibo.com/weibo?q="
var zhihu = "https://www.zhihu.com/search?type=content&q="

var engine = bing

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
    }
}

function changeEngine(c, name){
    engine = c;
    document.getElementById('current-search-icon').setAttribute('src', 'image/' + name + '.png');
}