function showSubmenu(group){
    if(document.getElementsByClassName("showSubmenu")[0]){
        document.getElementsByClassName("showSubmenu")[0].classList.remove("showSubmenu");
    }
    if(document.getElementsByClassName(group)){
        document.getElementsByClassName(group)[0].classList.add("showSubmenu")
    }
}

document.onclick = function(e){
    e = e || window.event;
    var target = e.target;
    if(!target.classList.contains("clickOnSubmenu") && !target.classList.contains("clickOnWebsite")){
        if(document.getElementsByClassName("showSubmenu")[0]){
            document.getElementsByClassName("showSubmenu")[0].classList.remove("showSubmenu");
    }
    }
}