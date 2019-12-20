onload = function () {
    //复选框全选全不选
    var checkedAllBox = document.getElementById("checkAll-box");
    var checkedAllBtn = document.getElementById("checkAll");
    var items = document.getElementsByClassName("check-product");
    checkedAllBtn.onclick = function () {
        for (var i = 0; i < items.length; i++) {
            items[i].checked = checkedAllBtn.checked;
        }
        checkedAllBox.checked = checkedAllBtn.checked;
    }

    checkedAllBox.onclick = function () {
        for (var i = 0; i < items.length; i++) {
            items[i].checked = checkedAllBox.checked;
        }
        checkedAllBtn.checked = checkedAllBox.checked;
    }

    //复选框全部选中全选选上
    for (var i = 0; i < items.length; i++) {
        items[i].onchange = function () {
            qxFN();
        }
    }
    var qxFN = function () {
        var count = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].checked == true) {
                count++;
            }
            if (count == items.length) {
                checkedAllBtn.checked = true;
                checkedAllBox.checked = true;
            } else {
                checkedAllBtn.checked = false;
                checkedAllBox.checked = false;
            }
        }
    }
}

//点击结算
var Submission = document.getElementById("Submission-box");
Submission.onclick = function () {
    window.location.href = "file:///D:/%E5%87%BA%E9%97%A8%E9%97%AE%E9%97%AEMobvoi/Shopping%20Cart/Settlement-page.html";
}
//加入购物车的累加器
var reduce = document.getElementById("reduce-box");
var productnumber = document.getElementById("product-number");
var add = document.getElementById("add-box");
var Aggregate = document.getElementById("Aggregate-pirce");
var pirce = document.getElementById("pirce");

var Result = 1;
reduce.onclick = function () {
    Result--;
    if (Result < 1) {
        alert("宝贝不能再减少了~");
        Result = 1;
    }
    productnumber.innerHTML = Result;

}

add.onclick = function () {
    Result++;
    productnumber.innerHTML = Result;
}
//复选框选中时价格的变化


//点击编辑
var edit = document.getElementById("edit-box");
var Submission = document.getElementById("Submission-box");
var Delete = document.getElementById("delete-box");
var editText = document.getElementById("edit");

edit.onclick = function () {
    if (editText.innerHTML = "编辑") {
        Submission.style.display = "none";
        Delete.style.display = "block";
        editText.innerHTML = "完成";
    }else {
        Submission.style.display = "block";
        Delete.style.display = "none";
        editText.innerHTML = "编辑";
    }
}
