var google = "https://www.google.com/search?q="
var bing = "https://cn.bing.com/search?q="
var weibo = "https://weibo.com/search?q="
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
    var url = engine + key
    window.open(url, '_blank')
}