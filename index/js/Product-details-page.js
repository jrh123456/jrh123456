//返回上一级
var Return = document.getElementById("Return");
Return.onclick = function(){
    window.history.back();
}

//详情页banner
var banner = document.getElementById("index-banner");
var img = document.getElementsByClassName("banner-img");
var len = img.length;
var count = 0 ;

function run(){
    count++;
    count = count ==5?0:count;
    for(var i = 0;i<len;i++){
        img[i].style.display = 'none';
    }
    img[count].style.display = 'block';
}


function reverse(){
    count--;
    count = count==-1?4:count;
    for(var i = 0;i<len;i++){
        img[i].style.display = 'none';
    }
    img[count].style.display = 'block';
}

var timer = setInterval(run,3000);
    

var Customer = document.getElementById("Contact-customer-service");
var information = document.getElementById("Customer-service-Popup");
var Close = document.getElementById("return-buttom");
var detailsbody = document.getElementById("Details-page");
var shopping = document.getElementById("Shopping-Cart");
Customer.onclick = function(){
    information.style.display = "block";
    detailsbody.style.background = "rgb(226, 225, 225)";
    detailsbody.style.opacity = "0.35";
}

Close.onclick = function Close(){
    information.style.display = "none";
    detailsbody.style.background = "#fff";
    detailsbody.style.opacity = "1";
}



shopping.onclick = function(){
    window.location.href = "file:///D:/Exercise-page/Mobvoi/Text.hit/Shopping%20Cart/Shopping-cart-items.html";
}
//点击加入购物车
var addcart = document.getElementById("add-to-cart");
var cartbox =document.getElementById("shopping-cart-box");
var cartclose = document.getElementById("Close-cart");
addcart.onclick = function(){
    cartbox.style.display = "block";
    detailsbody.style.background = "rgb(226, 225, 225)";
    detailsbody.style.opacity = "0.35";
}
cartclose.onclick = function(){
    cartbox.style.display = "none";
    detailsbody.style.background = "#fff";
    detailsbody.style.opacity = "1";
}
//加入购物车点击颜色进行选择
var colorRight = document.getElementById("color-right");
var cartbox =document.getElementById("shopping-cart-box");
var colorbox = document.getElementById("shopping-cart-box-color");
var colorLeft  =document.getElementById("color-left-two");


colorRight.onclick = function(){
    cartbox.style.display = "none";
    colorbox .style.display = "block";
}
colorLeft.onclick = function(){
    colorbox .style.display = "none";
    cartbox.style.display = "block";
}
//立即购买颜色选择
var Immediate = document.getElementById("Immediate-purchase-box");
var ImmediatecolorRight = document.getElementById("purchasecolor-right");
var Immediateboxcolor =document.getElementById("Immediate-purchase-box-color");
var ImmediatecolorLeft = document.getElementById("purchasecolor-left-two");
ImmediatecolorRight.onclick = function(){
    Immediate.style.display = "none";
    Immediateboxcolor .style.display = "block";
}
ImmediatecolorLeft.onclick = function(){
    Immediateboxcolor .style.display = "none";
    Immediate.style.display = "block";
}

//点击立即购买
var purchase = document.getElementById("Immediate-purchase");
var purchasebox = document.getElementById("Immediate-purchase-box");
var purchaseClose = document.getElementById("purchaseClose-cart");
purchase.onclick = function(){
    purchasebox.style.display = "block";
    detailsbody.style.background = "rgb(226, 225, 225)";
    detailsbody.style.opacity = "0.35";
}
purchaseClose.onclick = function(){
    purchasebox.style.display = "none";
    detailsbody.style.background = "#fff";
    detailsbody.style.opacity = "1";
}
//加入购物车的累加器
var reduce = document.getElementById("reduce-box");
var productnumber = document.getElementById("product-number");
var add = document.getElementById("add-box");
var Result = 1;
reduce.onclick = function(){
    Result--;
    if(Result < 1){
        alert("宝贝不能再减少了~");
        Result = 1;
    }
    productnumber.innerHTML = Result;
}
add.onclick = function(){
    Result++;
    productnumber.innerHTML = Result;
}
//点击立即购买
var purchase = document.getElementById("add-to-cart-box");
purchase.onclick = function(){
    window.location.href = "file:///D:/Exercise-page/Mobvoi/Text.hit/Shopping%20Cart/Settlement-page.html";
}

//点击加入购物车
var Selectitems = document.getElementById("Click-on-shopping-cart");
Selectitems.onclick = function(){
    cartbox.style.display = "none";
    detailsbody.style.background = "#fff";
    detailsbody.style.opacity = "1";
}