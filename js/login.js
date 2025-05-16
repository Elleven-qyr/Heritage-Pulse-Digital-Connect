    //在js中定义函数
    function checkusername(){
        //函数体
        var userName= document.getElementsByName("userName")[0].value;//通过名称获得元素
        console.log(userName);//chek
        //var 声明变量,可以声明时赋值也可以之后再赋值
        var regstr=/^[A-Za-z0-9]+$/;//____正则表达式
        if(userName==""){
            alert("name can not be none:");
            document.getElementsByName("userName")[0].focus();//文本框自动追踪
        }//提示
        else if(! regstr.test(userName)){
            alert("the name must use word and number length8-12")
            document.getElementsByName("userName")[0].focus();
        }
        else if(! document.getElementById("ch1").checked){
            alert("must agree the document first!")
        }
        else{
            alert("success")
        }

    }