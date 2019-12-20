//首页轮播
var banner = document.getElementById("index-banner");
var img = document.getElementsByClassName("banner-img");
var ul = document.getElementsByTagName("ul")[0];
var li = document.getElementsByTagName("li");
var len = img.length;
var count = 0 ;

function run(){
    count++;
    count = count ==5?0:count;
    for(var i = 0;i<len;i++){
        img[i].style.display = 'none';
    }
    img[count].style.display = 'block';
    for(var i = 0;i<li.length;i++){
        li[i].style.background = '#888585';
    }
    li[count].style.background = 'black';
}


function reverse(){
    count--;
    count = count==-1?4:count;
    for(var i = 0;i<len;i++){
        img[i].style.display = 'none';
    }
    img[count].style.display = 'block';
    for(var i = 0;i<li.length;i++){
       li[i].style.background = '#888585';
    }
    li[count].style.background = 'black';
}

var timer = setInterval(run,3000);
    
for(var i = 0;i < len;i++){
    li[i].index = i;
    li[i].onmouseenter = function(){
        for(var i = 0;i<len;i++){
            li[i].style.background = '#888585';
            img[i].style.display = 'none';
        }
        this.style.background = 'black';
        img[this.index].style.display = 'block';
    }
}

//联系客服按钮
var Customer = document.getElementById("Contact-customer-service");
var information = document.getElementById("Customer-service-Popup");
var Close = document.getElementById("return-buttom");
var detailsbody = document.getElementById("index-body");
Customer.onclick = function(){
    information.style.display = "block";
    detailsbody.style.background = "rgb(226, 225, 225)";
    detailsbody.style.opacity = "0.7";
}

Close.onclick = function(){
    information.style.display = "none";
    detailsbody.style.background = "#fff";
    detailsbody.style.opacity = "1";
}
//底部导航切换
var classification = document.getElementById("button-classification");
var shopping = document.getElementById("button-shopping");
var My = document.getElementById("button-My");
classification.onclick = function(){
    window.location.href = "file:///D:/Exercise-page/Mobvoi/Text.hit/classification/classification.html";
}
shopping.onclick = function(){
    window.location.href = "file:///D:/Exercise-page/Mobvoi/Text.hit/Shopping%20Cart/shopping-cart.html";
}
My.onclick = function(){
    window.location.href ="file:///D:/Exercise-page/Mobvoi/Text.hit/My/My.html";
}
//商品详情
var products = document.getElementById("New-products");
products.onclick = function(){
    location.href = "file:///D:/Exercise-page/Mobvoi/Text.hit/index/Product-details-page.html";
}
