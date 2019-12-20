var index = document.getElementById("button-index");
var shopping = document.getElementById("button-shopping");
var My = document.getElementById("button-My");
index.onclick = function () {
    window.location.href = "file:///D:/Exercise-page/Mobvoi/Text.hit/index/index.html";
}
shopping.onclick = function () {
    window.location.href = "file:///D:/Exercise-page/Mobvoi/Text.hit/Shopping%20Cart/shopping-cart.html";
}
My.onclick = function () {
    window.location.href = "file:///D:/Exercise-page/Mobvoi/Text.hit/My/My.html";
}
//左侧导航选项卡
var nav = document.getElementById("body-left");
var oNav = nav.getElementsByTagName("li");
var container = document.getElementById("container");
var oDiv = container.getElementsByTagName("section");
for (var i = 0; i < oNav.length; i++) {
    oNav[i].index = i;
    oNav[i].onclick = function (){
        for (var i = 0; i < oNav.length; i++) {
            oNav[i].className = "Ask-your-watch";
            oDiv[i].className = "body-right-two";
        }
        this.className= "Ask-your-watch-first";
        oDiv[this.index].className = "body-right-first";
    }
        for (var m = 1; m < oNav.length; m++) {
            oNav[m].className = "Ask-your-watch";
            oDiv[m].className = "body-right-two";
        }
    }

//点击商品跳转详情页
var watch = document.getElementById("watch-one");
watch.onclick = function(){
    window.location.href = "file:///D:/%E5%87%BA%E9%97%A8%E9%97%AE%E9%97%AEMobvoi/index/Product-details-page.html   ";
}